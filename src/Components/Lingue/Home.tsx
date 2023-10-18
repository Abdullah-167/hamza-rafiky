
import useTranslation from '@/hooks/useTranslation';
import { Link } from 'react-scroll';
import Button from '../Button';

const Home = () => {

    const { t } = useTranslation();

    return (
        <div className='contact-bg'>
            <div className='text-white  text-center py-32'>
                <h1 className='text-[45px] sm:text-[80px] font-bold pb-8 max-w-[1050px] mx-auto'>
                    {t('allLanguages_Heading')}
                </h1>
                <p className='font-normal max-w-[750px] mx-auto text-lg leading-9 pb-12'>
                    {t('allLanguages_para')}
                </p>
                <span className='flex justify-center'>
                    <Link to="languages" smooth={true} duration={400}>
                        <Button text={t('allLanguages_Btn')} color={'black'} backgroundColor={'white'} minWidth={undefined} />
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default Home