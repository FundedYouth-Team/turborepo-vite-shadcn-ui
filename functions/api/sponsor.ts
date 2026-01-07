/**
 * Corporate Sponsor Form Handler
 * Cloudflare Pages Function
 */

interface SponsorFormData {
  companyName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  jobTitle: string;
  industry: string;
  sponsorshipLevel: string;
  interests: string[];
  message?: string;
  captchaToken: string;
}

interface Env {
  CAPTCHA_SECRET?: string;
  SPONSOR_EMAIL_RECIPIENTS?: string;
  RESEND_API_KEY?: string;
  RESEND_FROM_EMAIL?: string;
}

/**
 * PHP-compatible hash function
 */
function jsHashCode(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash | 0; // Convert to 32-bit integer
  }
  return Math.abs(hash).toString(16).padStart(8, "0");
}

/**
 * Validate the captcha token
 */
function validateCaptchaToken(token: string, secret: string): boolean {
  if (!token) return false;

  let decoded: string;
  try {
    decoded = atob(token);
  } catch {
    return false;
  }

  const parts = decoded.split(":");
  if (parts.length !== 2) return false;

  const [timestamp, hash] = parts;
  const timestampNum = parseInt(timestamp, 10);

  // Token expires after 10 minutes
  if (Date.now() / 1000 - timestampNum > 600) {
    return false;
  }

  // Verify hash
  const expectedHash = jsHashCode(timestamp + secret);
  return expectedHash === hash;
}

/**
 * Validate email format
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Sanitize string input
 */
function sanitize(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .trim();
}

/**
 * Format sponsorship level for display
 */
function formatSponsorshipLevel(level: string): string {
  const levels: Record<string, string> = {
    bronze: "Bronze Partner ($500 - $2,499/year)",
    silver: "Silver Partner ($2,500 - $9,999/year)",
    gold: "Gold Partner ($10,000 - $24,999/year)",
    platinum: "Platinum Partner ($25,000 - $49,999/year)",
    diamond: "Diamond Partner ($50,000+/year)",
    custom: "Custom Partnership",
  };
  return levels[level] || level;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  // Parse request body
  let data: SponsorFormData;
  try {
    data = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ success: false, message: "Invalid request data" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  // Validate required fields
  const requiredFields = [
    "companyName",
    "firstName",
    "lastName",
    "email",
    "jobTitle",
    "industry",
    "sponsorshipLevel",
    "captchaToken",
  ] as const;

  const missingFields = requiredFields.filter((field) => !data[field]);

  if (missingFields.length > 0) {
    return new Response(
      JSON.stringify({
        success: false,
        message: `Missing required fields: ${missingFields.join(", ")}`,
      }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  // Validate captcha
  const captchaSecret = env.CAPTCHA_SECRET || "fundedyouth-puzzle-captcha-2024";
  if (!validateCaptchaToken(data.captchaToken, captchaSecret)) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Invalid captcha verification. Please try again.",
      }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  // Validate email format
  if (!isValidEmail(data.email)) {
    return new Response(
      JSON.stringify({ success: false, message: "Invalid email address" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  // Sanitize data
  const sanitizedData = {
    companyName: sanitize(data.companyName),
    firstName: sanitize(data.firstName),
    lastName: sanitize(data.lastName),
    email: data.email.trim().toLowerCase(),
    phone: data.phone ? sanitize(data.phone) : "",
    jobTitle: sanitize(data.jobTitle),
    industry: sanitize(data.industry),
    sponsorshipLevel: sanitize(data.sponsorshipLevel),
    interests: Array.isArray(data.interests)
      ? data.interests.map((i) => sanitize(i))
      : [],
    message: data.message ? sanitize(data.message) : "",
    submittedAt: new Date().toISOString(),
    ipAddress: request.headers.get("CF-Connecting-IP") || "unknown",
  };

  // Build email content
  const emailBody = `
New Corporate Sponsor Application
================================

Company: ${sanitizedData.companyName}
Contact: ${sanitizedData.firstName} ${sanitizedData.lastName}
Email: ${sanitizedData.email}
Phone: ${sanitizedData.phone || "Not provided"}
Job Title: ${sanitizedData.jobTitle}
Industry: ${sanitizedData.industry}

Sponsorship Level: ${formatSponsorshipLevel(sanitizedData.sponsorshipLevel)}
Areas of Interest: ${sanitizedData.interests.length > 0 ? sanitizedData.interests.join(", ") : "None selected"}

Additional Message:
${sanitizedData.message || "None"}

--------------------------------
Submitted: ${sanitizedData.submittedAt}
IP Address: ${sanitizedData.ipAddress}
  `.trim();

  // Send email via Resend (if configured)
  if (env.RESEND_API_KEY) {
    try {
      const recipients = env.SPONSOR_EMAIL_RECIPIENTS || "info@fundedyouth.org";
      const fromEmail = env.RESEND_FROM_EMAIL || "noreply@fundedyouth.org";

      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `FundedYouth Website <${fromEmail}>`,
          to: recipients.split(",").map((email: string) => email.trim()),
          subject: `New Corporate Sponsor Application: ${sanitizedData.companyName}`,
          text: emailBody,
          reply_to: sanitizedData.email,
        }),
      });

      if (!resendResponse.ok) {
        console.error("Resend error:", await resendResponse.text());
        // Continue anyway - we'll return success and log the error
      }
    } catch (error) {
      console.error("Email sending error:", error);
      // Continue anyway - the form data is valid
    }
  } else {
    // Log the submission if email is not configured
    console.log("Sponsor form submission:", sanitizedData);
  }

  return new Response(
    JSON.stringify({
      success: true,
      message:
        "Thank you for your interest in becoming a corporate sponsor! Our partnerships team will review your application and contact you within 2-3 business days.",
    }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
};
