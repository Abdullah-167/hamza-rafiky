import Index from "@/Components/Funziona/Index";
import Layout from "@/Components/Layout/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";


const Funziona = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo title={t("howDoesItWorkMetaTile")} description={t("howDoesItWorkMetaDescription")} />
      <Index />
    </Layout>
  );
};

export default Funziona;
