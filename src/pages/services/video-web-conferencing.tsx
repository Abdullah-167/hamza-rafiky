import Layout from "@/Components/Layout/Index";
import Seo from "@/Components/Seo";
import Index from "@/Components/ServicesWebConference/Index";
import useTranslation from "@/hooks/useTranslation";


const ServicesVideoConference = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo title={t("videowebconferencing_pageTitle")} description={t("videowebconferencing_pageDesc")} />
      <Index />
    </Layout>
  );
};

export default ServicesVideoConference;
