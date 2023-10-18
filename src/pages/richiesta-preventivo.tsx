import Layout from "@/Components/Layout/Index";
import Index from "@/Components/Richiesta/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";


const Richiesta = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo title={t("quoteMetaTitle")} description={t("quoteMetaDescription")} />
      <Index />
    </Layout>
  );
};

export default Richiesta;
