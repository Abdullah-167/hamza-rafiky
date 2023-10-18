
import Hero from '../Faq/Hero'
import Summary from './Summary'
import useTranslation from '@/hooks/useTranslation'
import BgPronto from '../BgPronto'

const Index = () => {

    const { t } = useTranslation();

    return (
        <div>
            <Hero text={t("refundPolicy_header_heading")} para={t("refundPolicy_header_subHeading")} fontSize={'60px'} />
            <Summary />
            <BgPronto />
        </div>
    )
}

export default Index