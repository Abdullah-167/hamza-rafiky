import Index from "@/Components/CaseStudyRedBull/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";

const CaseStudyRedbull = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Seo
        title={t("caseStudiesRedBull_pageTitle")}
        description={t("caseStudiesRedBull_pageDesc")}
      />
      <Index />
    </div>
  );
};

export default CaseStudyRedbull;
