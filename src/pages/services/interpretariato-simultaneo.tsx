import Layout from "@/Components/Layout/Index";
import Seo from "@/Components/Seo";
import Index from "@/Components/ServicesSimultaneous/Index";
import useTranslation from "@/hooks/useTranslation";


const ServicesSimultaneous = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo title={t("interpretariatoSimultaneo_pageTitle")} description={t("interpretariatoSimultaneo_pageDesc")} />
      <Index />
    </Layout>
  );
};

export default ServicesSimultaneous;
