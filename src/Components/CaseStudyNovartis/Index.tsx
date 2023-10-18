
import Layout from "../Layout/Index";
import NovartisCards from "./Cards";
import Cosa from "./Cosa";
import Hero from "./Hero";

const Index = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <Cosa />
        <NovartisCards />
      </Layout>
    </div>
  );
};

export default Index;
