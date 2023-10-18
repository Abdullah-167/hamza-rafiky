import Index from "@/Components/Country/Britians/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";


const ChinaPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Seo title={t("englishUKMetaTitle")} description={t("englishUKMetaDescription")} />
      <Index />
    </div>
  );
};

export default ChinaPage;
