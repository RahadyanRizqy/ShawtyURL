import { defaultHTML } from "./pages/default.js";
import { unknownHTML } from "./pages/unknown.js";

const HTML_HEADERS = { "Content-Type": "text/html;charset=UTF-8" };

export default {
  async fetch(req, env) {
    const DEFAULT_REDIRECT = env.DEFAULT_REDIRECT;
    const url = new URL(req.url);
    const key = url.pathname.slice(1);

    const htmlResponse = (html) => new Response(html, { headers: HTML_HEADERS });

    if (!key) {
      return htmlResponse(defaultHTML(DEFAULT_REDIRECT));
    }

    const row = await env.shawties.prepare("SELECT destination FROM shortlinks WHERE code = ?")
      .bind(key)
      .first();

    if (row && row.destination) {
      return Response.redirect(row.destination, 302);
    }

    return htmlResponse(unknownHTML(DEFAULT_REDIRECT));
  }
};
