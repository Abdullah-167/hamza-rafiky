
import Hero from '../Faq/Hero'
import Summary from './Summary'
import useTranslation from '@/hooks/useTranslation'
import BgPronto from '../BgPronto'

const Index = () => {

    const { t } = useTranslation();

    return (
        <div>
            <Hero text={`Rinegoziazione, cancellazione e politica di rimborso`} para={`LEGGI`} fontSize={'60px'} />
            <Summary />
            <BgPronto />
        </div>
    )
}

export default Index