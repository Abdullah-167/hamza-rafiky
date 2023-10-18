import Layout from "@/Components/Layout/Index";
import Index from "@/Components/New3/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";


const TranslationAgencies = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo title={t("agencyPartnerMetaTitle")} description={t("agencyPartnerMetaDescription")} />
      <Index />
    </Layout>
  );
};

export default TranslationAgencies;
