
import useTranslation from '@/hooks/useTranslation';
import { Link } from 'next-translate-routes';
import Button from '../Button';

const RafikyPrezzi = () => {

    const { t } = useTranslation(); 

    const cards = [
        {
            type: 'Silver',
            price: 299,
            euro: '€',
            priceText: '/al Mese',
            text:  t("rafikyPrices_Firstcardpara"),
            text2:  t("rafikyPrices_Firstcardpara"),
            btnText: t("rafikyPrices_FirstcardBtn"),
            color: '#fe3d73',
            shadow: '0px 2px 18px 0px rgba(0,0,0,0.3'
        },
        {
            type: 'Gold',
            price: 499,
            euro: '€',
            priceText: '/al Mese',
            text:  t("rafikyPrices_Seccardpara"),
            text2: t("rafikyPrices_Seccardpara"),
            btnText: t("rafikyPrices_FirstcardBtn"),
            color: '#8b20bb',
            shadow: '0px 2px 40px 0px rgba(0,0,0,0.18)'
        }, {
            type: 'Platinum',
            price: 699,
            euro: '€',
            priceText: '/al Mese',
            text:  t("rafikyPrices_Thirdcardpara"),
            text2:  t("rafikyPrices_Thirdcardpara"),
            btnText: t("rafikyPrices_FirstcardBtn"),
            color: '#c532c9',
            shadow: '0px 2px 18px 0px rgba(0,0,0,0.3'
        },
    ]
    return (
        <div className='container'>
            <div>
                <div>
                    <h2 className='text-black text-[30px] sm:text-[50px] font-semibold text-center'>{t("rafikyPrices_Heading")}</h2>
                    <p className='max-w-[700px] font-normal text-center mx-auto py-6 text-lg leading-8 mb-20'>{t("rafikyPrices_para")}</p>
                </div>
                <div className='flex justify-center flex-wrap lg:flex-nowrap gap-y-10 sm:gap-y-20'>
                    {cards.map((item, index) => {
                        return (
                            <div style={{
                                boxShadow: item.shadow
                            }} className='text-center bg-[#f7f7f7] py-20 px-5' key={index}>
                                <h2 className='text-xl font-semibold pb-5'>{item.type}</h2>
                                <p className='relative font-medium pb-10 sm:pb-20'><sup className='text-xl absolute top-4'> {item.euro}</sup><span className='text-[70px] sm:text-[90px] pl-3' style={{ color: item.color }}> {item.price} </span> <span>{item.priceText}</span></p>
                                <p className='text-xl sm:text-2xl text-[#666666] font-semibold pb-3'>{item.text}</p>
                                <p className='text-xl sm:text-2xl text-[#666666] font-semibold pb-10'>{item.text2}</p>
                                <span className='flex justify-center'>
                                    <Link href={'/contattaci'}>
                                        <Button text={item.btnText} color={'white'} backgroundColor={'#8300E9'} minWidth={undefined} />
                                    </Link>
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default RafikyPrezzi

