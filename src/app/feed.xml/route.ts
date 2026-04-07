import { articles } from '@/lib/articles'

export function GET() {
  const baseUrl = 'https://sveltia.fr'

  const items = articles
    .map(
      (article) => `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${baseUrl}/${article.slug}</link>
      <guid isPermaLink="true">${baseUrl}/${article.slug}</guid>
      <description>${escapeXml(article.description)}</description>
      <pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>
      <category>${escapeXml(article.category)}</category>
    </item>`
    )
    .join('\n')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Sveltia - Guide indépendant des traitements GLP-1</title>
    <link>${baseUrl}</link>
    <description>Ozempic, Wegovy, Mounjaro : prix, avis, effets secondaires. L'information médicale claire et indépendante sur les traitements GLP-1.</description>
    <language>fr</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}
