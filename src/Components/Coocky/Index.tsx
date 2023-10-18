
import Hero from '../Faq/Hero'
import Summary from './Summary'
import useTranslation from '@/hooks/useTranslation'
import BgPronto from '../BgPronto'

const Index = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Hero text={t("cookiePolicy_Title")} para={t("cookiePolicy_SubTitle")} fontSize={'80px'} />
      <Summary />
      <BgPronto />
    </div>
  )
}

export default Index