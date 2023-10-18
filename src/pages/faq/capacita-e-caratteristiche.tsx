import Index from "@/Components/Faq/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";

const FaqCapacityAndFeatures = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Seo
        title={t("FAQCapacityAndFeatures_pageTitle")}
        description={t("FAQCapacityAndFeatures_pageDesc")}
      />
      <Index id={1} />
    </div>
  );
};

export default FaqCapacityAndFeatures;
