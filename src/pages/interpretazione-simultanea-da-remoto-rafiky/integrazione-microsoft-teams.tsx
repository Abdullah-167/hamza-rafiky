import Layout from "@/Components/Layout/Index";
import Index from "@/Components/MiscroSoft/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";

const RafikyIntegrazione = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo title={t("microsoftTeamsMetaTitle")} description={t("microsoftTeamsMetaDescription")} />
      <Index />
    </Layout>
  );
};

export default RafikyIntegrazione;
