import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const ads = (await getCollection('ads')).sort(
    (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime()
  );

  return rss({
    title: 'Ad Swipe File',
    description: 'A daily archive of ads that work, and why.',
    site: context.site!,
    items: ads.map((ad) => ({
      title: `${ad.data.brand} — ${ad.data.title}`,
      pubDate: ad.data.publishedAt,
      description: ad.data.insight,
      link: `/ads/${ad.slug}/`,
      categories: ad.data.tags,
    })),
  });
}
