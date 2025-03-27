export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Serve static assets from /_next/static
    if (url.pathname.startsWith('/_next/static')) {
      const response = await env.ASSETS.fetch(request);
      if (response.status === 404) {
        return new Response('Not found', { status: 404 });
      }
      const headers = new Headers(response.headers);
      headers.set('cache-control', 'public, max-age=31536000, immutable');
      return new Response(response.body, {
        ...response,
        headers,
      });
    }

    // Fallback to serving as normal
    try {
      return await env.ASSETS.fetch(request);
    } catch (e) {
      return new Response('Not found', { status: 404 });
    }
  },
}; 