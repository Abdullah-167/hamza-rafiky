import Layout from "@/Components/Layout/Index";
import Index from "@/Components/RafikyXp/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";

const Rafikyxp = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo
        title={t("rafikyXpMetaTitle")}
        description={t("rafikyXpMetaDescription")}
      />
      <Index />
    </Layout>
  );
};

export default Rafikyxp;
