/**
 * Eventbrite API Proxy
 * Cloudflare Pages Function
 *
 * Proxies requests to the Eventbrite API with authentication
 * This handles all routes under /api/eventbrite/*
 */

interface Env {
  EVENTBRITE_PRIVATE_TOKEN?: string;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  // Get the API token from environment variables
  const token = env.EVENTBRITE_PRIVATE_TOKEN;

  if (!token) {
    return new Response(
      JSON.stringify({
        error: "Eventbrite API token not configured",
        debug: "EVENTBRITE_PRIVATE_TOKEN environment variable is missing",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
      }
    );
  }

  // Extract the path after /api/eventbrite/
  const url = new URL(request.url);
  const fullPath = url.pathname;
  const apiPath = fullPath.replace(/^\/api\/eventbrite\/?/, "");
  const queryString = url.search;

  // Build the Eventbrite API URL
  const eventbriteUrl = `https://www.eventbriteapi.com/${apiPath}${queryString}`;

  try {
    // Proxy the request to Eventbrite
    const response = await fetch(eventbriteUrl, {
      method: request.method,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });

    // Get the response body
    const data = await response.text();

    // If Eventbrite returned an error, include debug info
    if (!response.ok) {
      console.error(
        `Eventbrite API error: ${response.status} - ${data} - URL: ${eventbriteUrl}`
      );
    }

    // Return the response with CORS and cache headers
    return new Response(data, {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error("Eventbrite API error:", errorMessage);
    return new Response(
      JSON.stringify({
        error: "Failed to fetch from Eventbrite API",
        message: errorMessage,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
      }
    );
  }
};

// Handle CORS preflight requests
export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};
