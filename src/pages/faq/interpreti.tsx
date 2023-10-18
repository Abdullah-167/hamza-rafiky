import Index from "@/Components/Faq/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";

const FaqInterpreti = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Seo
        title={t("FAQInterpreti_pageTitle")}
        description={t("FAQInterpreti_pageDesc")}
      />
      <Index id={1} />
    </div>
  );
};

export default FaqInterpreti;
