import Layout from "@/Components/Layout/Index";
import Seo from "@/Components/Seo";
import Index from "@/Components/ServicesAgency/Index";
import useTranslation from "@/hooks/useTranslation";


const ServicesAgency = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo title={t("agenziaInterpretariato_pageTitle")} description={t("agenziaInterpretariato_pageDesc")} />
      <Index />
    </Layout>
  );
};

export default ServicesAgency;
