import Layout from "@/Components/Layout/Index";
import Seo from "@/Components/Seo";
import Index from "@/Components/iItegrazione/Index";
import useTranslation from "@/hooks/useTranslation";

const Integrazione = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo title={t("useCasesMetaTitle")} description={t("useCasesMetaDescription")} />
      <Index />
    </Layout>
  );
};

export default Integrazione;
