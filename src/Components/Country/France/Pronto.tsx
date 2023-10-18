;
import Button from '../../Button';
import { IoIosArrowDown } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';
import { IoLogoInstagram } from 'react-icons/io5';
import { BsYoutube } from 'react-icons/bs';
import BgImage from '../../../../public/frame.png'
import useTranslation from '@/hooks/useTranslation'

const Pronto = () => {
    const {t} = useTranslation();
    return (
        <div className='main-cpmBg py-10'
            style={{
                backgroundImage: `url(${BgImage.src})`
            }}>
            <div className='container'>
                <div>

                    <div>
                        <h5 className='text-2xl text-white font-bold text-center pt-10 pb-8 leading-1'>{t("letsBegin_Title")}</h5>
                        <h2 className='text-[35px] sm:text-[50px] text-white font-bold text-center mx-auto pb-12 max-w-[950px]'>{t("letsBegin_SubTitle")}</h2>
                    </div>

                    <div className='flex justify-center'>
                        <Button text={t("letsBegin_Btn")} color={'black'} backgroundColor={'white'} minWidth={undefined} />
                    </div>
                </div>
                <div className='flex justify-center gap-5 items-center'>
                    {iconData.map((item, index) => {
                        return (
                            <div key={index} className='bg-[#F3E9FD] text-[#6A1ACC] font-bold text-xl w-12 h-12 rounded-full p-3 flex justify-center items-center cursor-pointer mt-14'>
                                {item.icon}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Pronto;



const iconData = [
    {
        icon: <FaFacebookF />
    },
    {
        icon: <AiOutlineTwitter />
    },
    {
        icon: <GrLinkedinOption />
    },
    {
        icon: <IoLogoInstagram />
    },
    {
        icon: <BsYoutube />
    }
];
