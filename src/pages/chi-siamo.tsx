import Index from "@/Components/About/Index";
import Layout from "@/Components/Layout/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";

const About = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo title={t("aboutUsMetaTitle")} description={t("aboutUsMetaDescription")} />
      <Index />
    </Layout>
  );
};

export default About;
