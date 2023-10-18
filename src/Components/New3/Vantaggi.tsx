;
import { IoBulbOutline } from 'react-icons/io5';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { HiOutlineInboxIn } from 'react-icons/hi';
import { BsCoin, BsTools, BsEnvelope } from 'react-icons/bs';
import { AiTwotoneLike } from 'react-icons/ai';
import { BiIdCard } from 'react-icons/bi';
import { CgDanger } from 'react-icons/cg';
import useTranslation from '@/hooks/useTranslation';

const Vantaggi = () => {

    const { t } = useTranslation();

    const cards = [
        {
            icon: <IoBulbOutline />,
            heading: t("workingTogether_FirstcardHeading"),
            para: t("workingTogether_Firstcardpara"),
            bgColor: 'rgba(122,105,230,0.3)',
            color: '#7a69e6'
        },
        {
            icon: <HiOutlineInboxIn />,
            heading: t("workingTogether_SeccardHeading"),
            para: t("workingTogether_Seccardpara"),
            bgColor: 'rgba(250,94,93,0.3)',
            color: '#fa5e5d'
        },
        {
            icon: <BsCoin />,
            heading: t("workingTogether_ThirdHeading"),
            para: t("workingTogether_Thirdpara"),
            bgColor: 'rgba(249,141,94,0.3)',
            color: '#f98d5e'
        },
        {
            icon: <IoIosCheckmarkCircleOutline />,
            heading: t("workingTogether_ForthHeading"),
            para: t("workingTogether_Forthpara"),
            bgColor: 'rgba(118,206,68,0.3)',
            color: '#76ce44'
        },

        {
            icon: <BsTools />,
            heading: t("workingTogether_FifthHeading"),
            para: t("workingTogether_Fifthpara"),
            bgColor: 'rgba(106,154,232,0.3)',
            color: '#6a9ae8'
        },
        {
            icon: <BiIdCard />,
            heading: t("workingTogether_SixthHeading"),
            para: t("workingTogether_Sixthpara"),
            bgColor: 'rgba(249,192,67,0.3)',
            color: '#f9c043'
        },
        {
            icon: <CgDanger />,
            heading: t("workingTogether_SeventhHeading"),
            para: t("workingTogether_Seventhpara"),
            bgColor: 'rgba(247,103,180,0.3)',
            color: '#f767b4'
        },
        {
            icon: <AiTwotoneLike />,
            heading: t("workingTogether_EightHeading"),
            para: t("workingTogether_Eightpara"),
            bgColor: 'rgba(68,206,176,0.3)',
            color: '#44ceb0'
        },
    ]

    return (
        <div className='bg-[#F5F6FC]'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-5 py-20'>
                    {cards.map((item, index) => {

                        return (
                            <div
                                className='hero-cards bg-white px-4 py-10 rounded-xl'
                                key={index}
                            >
                                <div
                                    className={`text-4xl rounded-full w-20 h-20 mx-auto px-4 py-3 text-center`}
                                    style={{
                                        backgroundColor: item.bgColor,
                                        color: item.color
                                    }}
                                >
                                    <div className="icon-container"> {item.icon} </div>
                                </div>
                                <h2 className='text-lg text-[#333333] text-center font-bold pt-8 pb-3'>
                                    {item.heading}
                                </h2>
                                <p className='text-base text-[#666666] sm:max-w-[250px] mx-auto text-center'>
                                    {item.para}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Vantaggi;


