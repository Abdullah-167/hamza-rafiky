import Layout from "@/Components/Layout/Index";
import Hero from "./Hero";
import Text from "./Text";
import Flag from "../../Flag";
import BgPronto from "@/Components/BgPronto";

const Index = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Text />
        <Flag />
        <BgPronto />
      </Layout>
    </>
  );
};

export default Index;
