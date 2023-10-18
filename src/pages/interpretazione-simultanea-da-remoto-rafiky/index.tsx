import Layout from "@/Components/Layout/Index";
import Seo from "@/Components/Seo";
import Index from "@/Components/Servizi/Index";
import useTranslation from "@/hooks/useTranslation";

const InterPretazione = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo
        title={t("simultaneousRemoteInterpretation_pageTitle")}
        description={t("simultaneousRemoteInterpretation_pageDesc")}
      />
      <Index />
    </Layout>
  );
};

export default InterPretazione;
