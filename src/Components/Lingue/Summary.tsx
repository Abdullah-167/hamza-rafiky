
import useTranslation from '@/hooks/useTranslation';
import { Link } from 'next-translate-routes';
import Button from '../Button';

const Summary = () => {

    const { t } = useTranslation();

    const data = [
        {
            heading: t('ourOffer_FirstHeading'),
            text: t('ourOffer_Firstpara'),
        },
        {
            heading: t('ourOffer_SecHeading'),
            text: t('ourOffer_Secpara'),
        }, {
            heading: t('ourOffer_ThirdHeading'),
            text: t('ourOffer_Thirdpara'),
        }, {
            heading: t('interpretationServices_HeadingChinese'),
            text: t('ourOffer_Forthpara'),
        },
    ]

    return (
        <div className='max-w-[1000px] mx-auto'>
            <div className='text-[#666666] py-28'>

                <div>
                    <h2 className="text-[30px] text-black font-semibold sm:text-[45px] pb-6">
                        {t('lingueMainTitle')}
                    </h2>
                    <p className='pb-8'>
                        {t('lingueMainText')}
                    </p>
                </div>

           <h2  className="text-[45px] m:text-[45px] text-[#333333] font-bold   pb-7 " >La nostra offerta</h2>
                <div className='pb-6'>
                    {data.map((item, index) => {
                        return (
                            <div key={index}>
                                <strong className='font-bold pb-2 text-black'>{item.heading}</strong>
                                <p className='pb-5'>{item.text}</p>
                            </div>
                        )
                    })}
                </div>
                <span>
                    <Link href={'/richiesta-preventivo'}>
                        <Button text={t('ourOffer_Btn')} color={'white'} backgroundColor={'#8300E9'} minWidth={undefined} />
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default Summary

