import Index from "@/Components/CaseStudyVolksWagen/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";

const CaseStudyVolkswagen = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Seo
        title={t("caseStudiesVolkswagen_pageTitle")}
        description={t("caseStudiesVolkswagen_pageDesc")}
      />
      <Index />
    </div>
  );
};

export default CaseStudyVolkswagen;
