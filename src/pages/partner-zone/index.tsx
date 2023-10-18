import Layout from "@/Components/Layout/Index";
import Index from "@/Components/PartnerZone/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";


const Partner = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo title={t("partnerZoneMetaTitle")} description={t("partnerZoneMetaDescription")} />
      <Index />
    </Layout>
  );
};

export default Partner;
