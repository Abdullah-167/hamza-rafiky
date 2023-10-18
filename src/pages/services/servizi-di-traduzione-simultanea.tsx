import Layout from "@/Components/Layout/Index";
import Seo from "@/Components/Seo";
import Index from "@/Components/ServicesSimultaneousTranslation/Index";
import useTranslation from "@/hooks/useTranslation";


const ServicesTranslation = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo title={t("serviziDiTraduzioneSimultanea_pageTitle")} description={t("serviziDiTraduzioneSimultanea_pageDesc")} />
      <Index />
    </Layout>
  );
};

export default ServicesTranslation;
