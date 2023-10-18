import Index from "@/Components/Country/American/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";


const USA = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Seo title={t("englishUSMetaTitle")} description={t("englishUSMetaDescription")} />
      <Index />
    </div>
  );
};

export default USA;
