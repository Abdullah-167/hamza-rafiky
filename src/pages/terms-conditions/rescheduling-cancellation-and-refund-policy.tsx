import Layout from "@/Components/Layout/Index";
import Index from "@/Components/Refund/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";

const Rescheduling = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo
        title={t("reschedulingCancellationPolicy_pageTitle")}
        description={t(
          "TermsAndConditionReschedulingCancellationRefundPolicy_pageDesc"
        )}
      />
      <Index />
    </Layout>
  );
};

export default Rescheduling;
