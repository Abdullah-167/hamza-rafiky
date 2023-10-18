import Layout from "@/Components/Layout/Index";
import Seo from "@/Components/Seo";
import Index from "@/Components/Trems&Conditions/Index";
import useTranslation from "@/hooks/useTranslation";

const TermsPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo
        title={t("termsAndConditions_pageTitle")}
        description={t("TermsAndCondition_pageDesc")}
      />
      <Index />
    </Layout>
  );
};

export default TermsPage;
