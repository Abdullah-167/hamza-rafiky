import Index from "@/Components/Faq/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";

const FaqApp = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Seo title={t("FAQMetaTitle")} description={t("FAQMetaDescription")} />
      <Index id={1} />
    </div>
  );
};

export default FaqApp;
