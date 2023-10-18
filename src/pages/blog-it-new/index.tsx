import Blog from "@/Components/Blog";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";

import { getAllPosts } from "@/lib/api";

const BlogList = ({ posts }: any) => {
  const { t } = useTranslation();
  return (
    <>
      <Seo
        title={t("blogItNew_pageTitle")}
        description={t("blogItNew_pageDesc")}
      />
      <Blog data={posts} />
    </>
  );
};

export default BlogList;

export async function getStaticProps(context: any) {
  const language = context?.locale?.toUpperCase();
  let after = "";

  let posts: any[] = [];

  do {
    const result = await getAllPosts(language, after);
    posts = posts.concat(result?.edges);
    const pageInfo = result?.pageInfo;
    if (pageInfo?.hasNextPage) {
      after = pageInfo.endCursor;
    } else {
      after = ""; // Set 'after' to empty string to exit the loop
    }
  } while (after);

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}
