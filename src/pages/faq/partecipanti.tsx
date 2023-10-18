import Index from "@/Components/Faq/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";

const FaqApp = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Seo
        title={t("FAQPerformer_pagetitle")}
        description={t("FAQPerformer_pageDesc")}
      />
      <Index id={1} />
    </div>
  );
};

export default FaqApp;
