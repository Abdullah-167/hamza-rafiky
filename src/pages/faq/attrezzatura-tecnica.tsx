import Index from "@/Components/Faq/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";

const FaqTechEquipment = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Seo
        title={t("FAQAttrezzaturaTecnica_pageTitle")}
        description={t("FAQAttrezzaturaTecnica_pageDesc")}
      />
      <Index id={1} />
    </div>
  );
};

export default FaqTechEquipment;
