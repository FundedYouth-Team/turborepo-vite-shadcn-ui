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
  const { request, env, params } = context;

  // Get the API token from environment variables
  const token = env.EVENTBRITE_PRIVATE_TOKEN;

  if (!token) {
    return new Response(
      JSON.stringify({ error: "Eventbrite API token not configured" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // Build the path from the catch-all parameter
  const pathSegments = params.path;
  const apiPath = Array.isArray(pathSegments)
    ? pathSegments.join("/")
    : pathSegments || "";

  // Get the query string from the original request
  const url = new URL(request.url);
  const queryString = url.search;

  // Build the Eventbrite API URL
  const eventbriteUrl = `https://www.eventbriteapi.com/${apiPath}${queryString}`;

  try {
    // Proxy the request to Eventbrite
    const response = await fetch(eventbriteUrl, {
      method: request.method,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    // Get the response body
    const data = await response.text();

    // Return the response with CORS headers
    return new Response(data, {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    console.error("Eventbrite API error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch from Eventbrite API" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
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
