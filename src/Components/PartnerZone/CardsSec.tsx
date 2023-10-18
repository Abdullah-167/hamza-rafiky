;
import useTranslation from '@/hooks/useTranslation';
import { IoExtensionPuzzleSharp, IoNewspaperSharp } from 'react-icons/io5';
import { MdAnalytics } from 'react-icons/md';
import Button from '../Button';
import Image from 'next/image';


const CardsSec = () => {

    const { t } = useTranslation()
    const cards = [
        {
            img:"/puzzle.svg",
            heading: t('zonessPartner_FirstcardHeading'),
            para: t('zonessPartner_Firstcardpara'),
        },
        {
            img:"/analytics.svg",
            heading: t('zonessPartner_SeccardHeading'),
            para: t('zonessPartner_Seccardpara'),
        },
        {
            img:"/newspaper.svg",
            heading: t('zonessPartner_ThirdcardHeading'),
            para: t('zonessPartner_Thirdcardpara'),
        },
    ]

    return (
        <div className='bg-[#FFFFFF]  sm:py-20'>
            <div className='container'>
                <h2 className=' text-[35px] sm:text-[45px] text-[#333333] font-bold text-center mb-12'>{t('zonessPartner_Title')}</h2>
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((item, index) => {
            return (
              <div className=" gap-5" key={index}>
                <Image
                  className=" object-contain pb-4"
                  src={item.img}
                  alt={"card-img"}
                  width={60}
                  height={60}
                  style={{height:"76px", width:"60px"}}
                />
                <div>
                  <h3 className="text-xl font-semibold pb-2">{item.heading}</h3>
                  <div className="w-20 h-[2px] bg-[#8624e1] mb-3"></div>
                  <p className="font-poppins font-semibold">{item.para}</p>
                </div>
              </div>
            );
          })}
        </div>
                <span className='flex justify-center mt-10'>
                    <a href={'https://www.lingoyouniverse.com/vendors/register'} target='_blank'>
                        <Button text={t('zonessPartner_Btn')} color={'white'} backgroundColor={'#8300E9'} minWidth={'400px'} />
                    </a>
                </span>
            </div>
        </div>
    );
};

export default CardsSec;

