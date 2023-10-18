import Index from "@/Components/Country/Russia/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";


const Russia = () => {
      const { t } = useTranslation();
  return (
    <div>
      <Seo title={t("russianMetaTitle")} description={t("russianMetaDescription")} />
      <Index />
    </div>
  );
};

export default Russia;
