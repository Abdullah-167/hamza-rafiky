
import Layout from "../Layout/Index";
import Hero from "./Hero";
import BlogCard from "./BlogCards";
import BgPronto from "../BgPronto";

const Blog = ({ data }: any) => {
  return (
    <div>
      <Layout>
        <Hero />
        <BlogCard data={data} />
        <BgPronto />
      </Layout>
    </div>
  );
};

export default Blog;
