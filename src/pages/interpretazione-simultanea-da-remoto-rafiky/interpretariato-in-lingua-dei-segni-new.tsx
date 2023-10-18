import Layout from "@/Components/Layout/Index";
import Index from "@/Components/Lingua/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";

const Rafikyinterpretariato = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo title={t("signLanguageMetaTitle")} description={t("signLanguageMetaDescription")} />
      <Index />
    </Layout>
  );
};

export default Rafikyinterpretariato;
