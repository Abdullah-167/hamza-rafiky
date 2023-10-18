
import useTranslation from '@/hooks/useTranslation';
import { Link } from 'next-translate-routes';
import BgImage from '../../../public/frame3.webp';
import Button from '../Button';

const Hero = () => {

    const { t } = useTranslation();

    return (
        <div className='main-cpmBg'
            style={{
                backgroundImage: `url(${BgImage.src})`
            }}>
            <div className='container'>
                <div className=' py-20'>
                    <div>
                        <h1 className='text-3xl sm:text-6xl md:text-[70px] text-white font-bold mx-auto max-w-[1060px] text-center leading-[100px] pb-12'>{t("services_HeroTitle")}</h1>
                        <p className='text-base sm:text-[26px] max-w-[1000px] mx-auto font-medium text-white text-center pb-5 leading-9'>{t("services_Heropara")}</p>
                    </div>
                    <div className='flex justify-center'>
                        <Link href={'/contattaci'}>
                            <Button text={t("services_HeroBtn")} color={'black'} backgroundColor={'white'} minWidth={undefined} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero

