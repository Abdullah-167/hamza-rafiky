
import Image from "next/image";
import BgPronto from "../BgPronto";
import Layout from "../Layout/Index";
import Cosa from "./Cosa";
import Hero from "./Hero";
import LaChallenge from "./LaChallenge";
import Risultati from "./Risultati";
import useTranslation from "@/hooks/useTranslation";

const Index = () => {

  const { t } = useTranslation();

  return (
    <div>
      <Layout>
        <Hero />
        <Cosa />
        <LaChallenge />
        <Risultati />
        <BgPronto />
      </Layout>
    </div>
  );
};

export default Index;
