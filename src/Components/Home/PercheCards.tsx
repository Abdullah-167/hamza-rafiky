;
import { IoExtensionPuzzleSharp } from 'react-icons/io5';
import { AiOutlineDesktop } from 'react-icons/ai';
import { BsCoin, BsStar, BsEnvelope } from 'react-icons/bs';
import { GrReactjs } from 'react-icons/gr';
import { RiGlobalLine } from 'react-icons/ri';
import { AiOutlineMobile } from 'react-icons/ai';
import useTranslation from '@/hooks/useTranslation';

const PercheCards = () => {

    const { t } = useTranslation();
    const cards = [
        {
            icon: <IoExtensionPuzzleSharp />,
            heading: t('chooseRafiky_Firstcard_Heading1'),
            para: t('chooseRafiky_Firstcard_para'),
            bgColor: 'rgba(122,105,230,0.3)',
            color: '#7a69e6'
        },
        {
            icon: <AiOutlineDesktop />,
            heading: t('chooseRafiky_Seccard_Heading'),
            para: t('chooseRafiky_Seccard_para'),
            bgColor: 'rgba(250,94,93,0.3)',
            color: '#fa5e5d'
        },
        {
            icon: <BsCoin />,
            heading: t('chooseRafiky_Thirdcard_Heading'),
            para: t('ChooseRafiky_Thirdcard_para'),
            bgColor: 'rgba(249,141,94,0.3)',
            color: '#f98d5e'
        },
        {
            icon: <BsStar />,
            heading: t('chooseRafiky_Forthcard_Heading'),
            para: t('chooseRafiky_Forthcard_para'),
            bgColor: 'rgba(118,206,68,0.3)',
            color: '#76ce44'
        },

        {
            icon: <GrReactjs />,
            heading: t('chooseRafiky_Fifthcard_Heading'),
            para: t('chooseRafiky_Fifthcard_para'),
            bgColor: 'rgba(106,154,232,0.3)',
            color: '#6a9ae8'
        },
        {
            icon: <RiGlobalLine />,
            heading: t('chooseRafiky_Sixthcard_Heading'),
            para: t('chooseRafiky_Sixthcard_para'),
            bgColor: 'rgba(249,192,67,0.3)',
            color: '#f9c043'
        },
        {
            icon: <AiOutlineMobile />,
            heading: t('chooseRafiky_Seventhcard_Heading'),
            para: t('chooseRafiky_Seventhcard_para'),
            bgColor: 'rgba(247,103,180,0.3)',
            color: '#f767b4'
        },
        {
            icon: <BsEnvelope />,
            heading: t('chooseRafiky_Eightcard_Heading'),
            para: t('chooseRafiky_Eightcard_para'),
            bgColor: 'rgba(68,206,176,0.3)',
            color: '#44ceb0'
        },
    ]

    return (
        <div className='bg-[#FFFFFF]'>
            <div className='container'>
                <h1 className=' text-[35px] sm:text-[45px] text-[#333333] font-bold text-center mb-12'>{t('chhoserafikyheading')}</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-5'>
                    {cards.map((item, index) => {

                        return (
                            <div
                                className='hero-cards bg-white px-4 py-10 rounded-xl'
                                key={index}
                            >
                                <div
                                    className={`text-4xl rounded-full w-16 h-16 mx-auto px-4 py-3 text-center`}
                                    style={{
                                        backgroundColor: item.bgColor,
                                        color: item.color
                                    }}
                                >
                                    <div className="icon-container"> {item.icon} </div>
                                </div>
                                <h3 className='text-lg text-[#333333] text-center font-bold pt-8 pb-3'>
                                    {item.heading}
                                </h3>
                                <p className='text-base text-[#666666] max-w-[250px] mx-auto text-center'>
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

export default PercheCards;


