import Index from "@/Components/Faq/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";

const FaqInternet = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Seo
        title={t("FAQInternetAndWiFi_pageTitle")}
        description={t("FAQInternetAndWiFi_pageDesc")}
      />
      <Index id={1} />
    </div>
  );
};

export default FaqInternet;
