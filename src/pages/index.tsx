import Index from "@/Components/Home/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";
export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Seo title={t("homeMetaTitle")} description={t("homeMetaDescription")} />
      <Index />
    </>
  );
}
