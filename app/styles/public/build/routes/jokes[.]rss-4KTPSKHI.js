import {
  require_db
} from "/build/_shared/chunk-SMZ7NZN3.js";
import {
  __toModule,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Volumes/Development/sites/remix-jokes/app/routes/jokes[.]rss.tsx?browser
init_react();

// app/routes/jokes[.]rss.tsx
init_react();
var import_db = __toModule(require_db());
function escapeCdata(s) {
  return s.replaceAll("]]>", "]]]]><![CDATA[>");
}
function escapeHtml(s) {
  return s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}
var loader = async ({ request }) => {
  var _a;
  const jokes = await import_db.db.joke.findMany({
    take: 100,
    orderBy: { createdAt: "desc" },
    include: { jokester: { select: { username: true } } }
  });
  const host = (_a = request.headers.get("X-Forwarded-Host")) != null ? _a : request.headers.get("host");
  if (!host) {
    throw new Error("Could not determine domain URL.");
  }
  const protocol = host.includes("localhost") ? "http" : "https";
  const domain = `${protocol}://${host}`;
  const jokesUrl = `${domain}/jokes`;
  const rssString = `
    <rss xmlns:blogChannel="${jokesUrl}" version="2.0">
      <channel>
        <title>Remix Jokes</title>
        <link>${jokesUrl}</link>
        <description>Some funny jokes</description>
        <language>en-us</language>
        <generator>Kody the Koala</generator>
        <ttl>40</ttl>
        ${jokes.map((joke) => `
            <item>
              <title><![CDATA[${escapeCdata(joke.name)}]]></title>
              <description><![CDATA[A funny joke called ${escapeHtml(joke.name)}]]></description>
              <author><![CDATA[${escapeCdata(joke.jokester.username)}]]></author>
              <pubDate>${joke.createdAt.toUTCString()}</pubDate>
              <link>${jokesUrl}/${joke.id}</link>
              <guid>${jokesUrl}/${joke.id}</guid>
            </item>
          `.trim()).join("\n")}
      </channel>
    </rss>
  `.trim();
  return new Response(rssString, {
    headers: {
      "Cache-Control": `public, max-age=${60 * 10}, s-maxage=${60 * 60 * 24}`,
      "Content-Type": "application/xml",
      "Content-Length": String(Buffer.byteLength(rssString))
    }
  });
};
export {
  loader
};
//# sourceMappingURL=/build/routes/jokes[.]rss-4KTPSKHI.js.map
