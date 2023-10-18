import Layout from "@/Components/Layout/Index";
import Index from "@/Components/RafikyIntegration/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";

const RafikyIntegration = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo
        title={t("rafikyIntegration_pageTitle")}
        description={t("rafikyIntegration_pageDesc")}
      />
      <Index />
    </Layout>
  );
};

export default RafikyIntegration;
