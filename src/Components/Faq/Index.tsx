import Layout from "../Layout/Index";
import Hero from "./Hero";
import FaqSection from "./Faq";
import BgPronto from "../BgPronto";
import useTranslation from "@/hooks/useTranslation";

const Index = ({ id = 0 }: { id: number }) => {

  const { t } = useTranslation();

  return (
    <div>
      <Layout>
        <Hero text={'Rafiky FAQ'} para={""} fontSize={"80px"} />
        <FaqSection id={id} />
        <BgPronto />
      </Layout>
    </div>
  );
};

export default Index;
