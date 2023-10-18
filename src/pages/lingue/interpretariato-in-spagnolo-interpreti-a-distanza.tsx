import Index from '@/Components/Country/Spain/Index'
import Seo from '@/Components/Seo'
import useTranslation from "@/hooks/useTranslation";


const SpainPage = () => {
    const { t } = useTranslation();
    return (
        <div>
      <Seo title={t("spanishMetaTitle")} description={t("spanishMetaDescription")} />
            <Index />
        </div>
    )
}

export default SpainPage