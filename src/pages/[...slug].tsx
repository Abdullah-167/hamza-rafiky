import { useRouter } from "next/router";
import { getAllPostsWithSlug, getPost } from "@/lib/api";
import DetailPage from "@/Components/Blog/DetailPage";
import Layout from "@/Components/Layout/Index";
import Seo from "@/Components/Seo";
import slugify from "slugify";
import parse from "html-react-parser";

const ArticleSignlePage = ({ postData }: any) => {
  
  const router = useRouter();
  if (!router.isFallback && !postData?.slug) {
    return <p>something went wrong!</p>;
  }

  const featueredImage = postData?.featuredImage?.node?.sourceUrl;
  const authorName = postData?.author?.node?.name;

  const postDate = postData?.date;
  const postTitle = postData?.title;
  const seoTitle = postData?.translation?.seo?.title;
  const metaDesccription = postData?.translation?.seo?.metaDesc;

  return (
    <Layout>
      <Seo title={seoTitle} description={metaDesccription} />
      <div className="container">
        <DetailPage
          postTitle={postTitle}
          authorName={authorName}
          headerImage={featueredImage}
          postDate={postDate}
        />
        <div className="text-[#4C4C4C] blog-detail py-20">
          {postData?.content && parse(postData?.content)}
        </div>
      </div>
    </Layout>
  );
};

export default ArticleSignlePage;

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths:
      allPosts.edges.map(({ node }: any) => {
        const slug = Array.isArray(node.slug) ? node.slug : [node.slug];
        return `/${slug.map((segment: string) => slugify(segment)).join("-")}`;
      }) || [],
    fallback: true,
  };
}

export async function getStaticProps({ params, locale }: any) {
  const language = locale.toUpperCase();
  const slug = params.slug.join("/"); // Join the slug segments with "/"
  const data = await getPost(slug, language); // Pass the slug as a string

  return {
    props: {
      postData: data.postBy,
    },
    revalidate: 10,
  };
}
