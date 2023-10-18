import Index from "@/Components/CaseStudies/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";

const CaseStudies = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Seo
        title={t("caseStudies_pageTitle")}
        description={t("caseStudies_pageDesc")}
      />
      <Index />
    </div>
  );
};

export default CaseStudies;
