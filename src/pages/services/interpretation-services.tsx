import Layout from "@/Components/Layout/Index";
import Seo from "@/Components/Seo";
import Index from "@/Components/ServicesInterpret/Index";
import useTranslation from "@/hooks/useTranslation";


const ServicesInterpret = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo title={t("serviziDiInterpretariato_pageTitle")} description={t("serviziDiInterpretariato_pageDesc")} />
      <Index />
    </Layout>
  );
};

export default ServicesInterpret;
