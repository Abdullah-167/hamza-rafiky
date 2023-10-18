import Index from "@/Components/CaseStudyNovartis/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";

const CaseStudyNovartis = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Seo
        title={t("caseStudiesNovartis_pageTitle")}
        description={t("caseStudiesNovartis_pageDesc")}
      />
      <Index />
    </div>
  );
};

export default CaseStudyNovartis;
