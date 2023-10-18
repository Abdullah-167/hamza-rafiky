import Index from "@/Components/Contact/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";

const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Seo title={t("contactUsMetaTitle")} description={t("contactUsMetaDescription")} />
      <Index />
    </div>
  );
};

export default ContactPage;
