import Layout from "@/Components/Layout/Index";
import Index from "@/Components/Lingue/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";


const LinguePage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo title={t("allLanguagesMetaTitle")} description={t("allLanguagesMetaDescription")} />
      <Index />
    </Layout>
  );
};

export default LinguePage;
