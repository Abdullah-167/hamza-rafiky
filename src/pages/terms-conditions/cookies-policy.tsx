import Index from "@/Components/Coocky/Index";
import Layout from "@/Components/Layout/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";

const CookiesPolicy = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo
        title={t("cookiesPolicy_pageTitle")}
        description={t("TermsAndConditionCookiesPolicy_pageDesc")}
      />
      <Index />
    </Layout>
  );
};

export default CookiesPolicy;
