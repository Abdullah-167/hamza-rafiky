import { getAllPosts } from "@/lib/api";
import { GetServerSideProps } from "next";

const SITE_URL = "https://www.rafiky.net";
const locales = ["it", "de", "fr", "en"];

function generateSiteMap(data: any, locale: string) {
  const modifiedData = data.map((item: any) => {
    const modifiedString = item?.node?.link?.replace(
      "https://manuelm83.sg-host.com",
      SITE_URL
    );
    return `
      <url>
          <loc>${modifiedString}</loc>
      </url>
    `;
  });

  return modifiedData.join("");
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemapData: any[] = [];

  for (const locale of locales) {
    const language = locale?.toUpperCase();
    let after = "";
    let posts: any[] = [];
    do {
      const result = await getAllPosts(language, after);
      posts = posts.concat(result?.edges);
      const pageInfo = result?.pageInfo;
      if (pageInfo?.hasNextPage) {
        after = pageInfo.endCursor;
      } else {
        after = "";
      }
    } while (after);

    sitemapData.push(...posts);
  }

  const sitemaps = locales
    .map((locale) => generateSiteMap(sitemapData, locale))
    .join("\n");

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemaps}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(xmlContent);
  res.end();
  return {
    props: {},
  };
};

// Default export to prevent next.js errors
const SitemapIndex: React.FC = () => {
  return null;
};

export default SitemapIndex;
