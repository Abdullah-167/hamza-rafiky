import Index from "@/Components/Country/China/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";

const ChinaPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Seo
        title={t("chineseMetaTitle")}
        description={t("chineseMetaDescription")}
      />
      <Index />
    </div>
  );
};

export default ChinaPage;
