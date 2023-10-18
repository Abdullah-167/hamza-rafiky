import Layout from "@/Components/Layout/Index";
import Index from "@/Components/Privacy/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo
        title={t("privacyPolicy_pageTitle")}
        description={t("TermsAndConditionPrivacyPolicy_pageDesc")}
      />
      <Index />
    </Layout>
  );
};

export default PrivacyPolicy;
