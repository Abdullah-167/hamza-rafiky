const API_URL = process.env.WP_API_URL as any;

const dev = process.env.WP_API_URL !== "production";

export const server: any = dev
  ? "https://manuelm83.sg-host.com/graphql"
  : API_URL;

async function fetchAPI(query: any, { variables }: any = {}) {
  const headers = { "Content-Type": "application/json" };
  const res = await fetch(server, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    console.log("error details", query, variables);
    // throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getAllPosts(language: any, after: string = "") {
  const data = await fetchAPI(
    `
    query posts($language: LanguageCodeFilterEnum!, $after: String) {
      posts(first: 100, after: $after, where: { language: $language, orderby: { field: DATE, order: DESC} }) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              date
              title
              slug
              content
              link
              excerpt
              featuredImage {
                node {
                  mediaItemUrl
                  altText
                }
              }
            }
          }
        }
      }
      `,
    {
      variables: {
        language,
        after, // Pass the 'after' cursor variable
      },
    }
  );

  return data?.posts;
}


export async function getAllPostsWithSlug() {
  const data = await fetchAPI(
    `
    {
      posts(first: 10000) {
        edges {
          node {
            id
            title
            slug
          }
        }
      }
    }
    `
  );
  return data?.posts;
}
export async function getPost(slug: any, language: any) {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: String!, $language: LanguageCodeEnum!) {
      postBy(slug: $slug) {
        id
        content
        title
        slug
        translation(language: $language) {
          id
          slug
          content
          title
          seo{
            title
            metaDesc
          }
          language {
            locale
            slug
          }
        }
        date
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
      }
    }
    `,
    {
      variables: {
        slug: slug,
        language,
      },
    }
  );

  return data;
}