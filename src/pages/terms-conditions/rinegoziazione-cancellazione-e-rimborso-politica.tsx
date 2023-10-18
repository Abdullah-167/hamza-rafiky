import Layout from "@/Components/Layout/Index";
import Index from "@/Components/Renegotiation/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";

const Renegotiation = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo
        title={t("renegotiationCancellationAndRefundPolicy_pageTitle")}
        description={t(
          "TermsAndConditionRenegotiationCancellationRefundPolicy_pageDesc"
        )}
      />
      <Index />
    </Layout>
  );
};

export default Renegotiation;
