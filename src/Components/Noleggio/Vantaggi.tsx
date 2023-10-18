;
import { IoBulbOutline } from 'react-icons/io5';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { HiOutlineInboxIn } from 'react-icons/hi';
import { BsCoin, BsTools, BsEnvelope } from 'react-icons/bs';
import { AiTwotoneLike } from 'react-icons/ai';
import { BiIdCard } from 'react-icons/bi';
import { CgDanger } from 'react-icons/cg';
import useTranslation from '@/hooks/useTranslation';
import Image from 'next/image';

const Vantaggi = () => {

    const { t } = useTranslation();

    const cards = [
        {
            img:"/bulb.svg",
            heading: t('commonGoals_FirstcardHeading'),
            para: t('commonGoals_Firstcardpara'),
        },
        {
            img:"/inbox1.svg",
            heading: t('commonGoals_SeccardHeading'),
            para: t('commonGoals_Seccardpara'),
        },
        {
            img:"/piggy-bank-icon.svg",
            heading: t('commonGoals_ThirdHeading'),
            para: t('commonGoals_Thirdpara'),
        },
        {
            img:"/checked.svg",
            heading: t('commonGoals_ForthHeading'),
            para: t('commonGoals_Forthpara'),
            bgColor: 'rgba(118,206,68,0.3)',
            color: '#76ce44'
        },

        {
            img:"/tools.svg",
            heading: t('commonGoals_FifthHeading'),
            para: t('commonGoals_Fifthpara'),
        },
        {
            img:"/list.svg",
            heading: t('commonGoals_SixthHeading'),
            para: t('commonGoals_Sixthpara'),
        },
        {
            img:"/warning.svg",
            heading: t('commonGoals_SevenHeading'),
            para: t('commonGoals_Sevenpara'),
            bgColor: 'rgba(247,103,180,0.3)',
            color: '#f767b4'
        },
        {
            img:"/like.svg",
            heading: t('commonGoals_EightHeading'),
            para: t('commonGoals_Eightpara'),
        },
    ]
    return (
        <div className='bg-[#F5F6FC]'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-5 py-20'>
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
            </div>
        </div>
    );
};

export default Vantaggi;

