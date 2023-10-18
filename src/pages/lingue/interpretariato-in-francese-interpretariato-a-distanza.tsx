import Index from "@/Components/Country/France/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";


const FrancePage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Seo title={t("frenchMetaTitle")} description={t("frenchMetaDescription")} />
      <Index />
    </div>
  );
};

export default FrancePage;
