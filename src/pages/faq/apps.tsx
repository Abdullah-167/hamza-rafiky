import Index from "@/Components/Faq/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";

const FaqApps = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Seo title={t("FAQApp_pageTitle")} description={t("FAQMetaDescription")} />
      <Index id={1} />
    </div>
  );
};

export default FaqApps;
