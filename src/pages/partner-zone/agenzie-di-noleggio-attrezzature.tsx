import Layout from "@/Components/Layout/Index";
import Index from "@/Components/Noleggio/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";


const LquipmentRentalcompanies = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo title={t("equipmentPartnerMetaTitle")} description={t("equipmentPartnerMetaDescription")} />
      <Index />
    </Layout>
  );
};

export default LquipmentRentalcompanies;
