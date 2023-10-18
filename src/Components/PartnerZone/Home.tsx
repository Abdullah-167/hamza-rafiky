
import useTranslation from '@/hooks/useTranslation'
import Button from '../Button'

const Home = () => {

    const { t } = useTranslation()

    return (
        <div className='contact-bg'>
            <div className='text-white  text-center py-32'>
                <h2 className='text-[26px] font-medium'>{t('zonessPartners_Title')}</h2>
                <h1 className='text-[80px] font-bold pb-8'>{t('zonessPartners_SubTitle')}</h1>
                <p className='font-normal max-w-[750px] mx-auto text-lg leading-9 pb-12'>
                    {t('zonessPartners_para')}
                </p>
                <span className='flex justify-center'>
                    <a href={'https://www.lingoyouniverse.com/vendors/register'} target='_blank'>
                        <Button text={t('zonessPartners_Btn')} color={'black'} backgroundColor={'white'} minWidth={undefined} />
                    </a>
                </span>
            </div>
        </div>
    )
}

export default Home