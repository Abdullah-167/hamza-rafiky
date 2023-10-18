;
import { IoExtensionPuzzleSharp } from 'react-icons/io5';
import { AiOutlineDesktop } from 'react-icons/ai';
import { BsCoin, BsStar, BsEnvelope } from 'react-icons/bs';
import { GrReactjs } from 'react-icons/gr';
import { RiGlobalLine } from 'react-icons/ri';
import { AiOutlineMobile } from 'react-icons/ai';
import useTranslation from '@/hooks/useTranslation';
import Image from 'next/image';

const NovartisCards = () => {

    const { t } = useTranslation();
    const cards = [
        {
            icon: <IoExtensionPuzzleSharp />,
            heading: t('novartisFirstHeading'),
            para: t('novartisFirstPara'),
            bgColor: 'rgba(122,105,230,0.3)',
            color: '#7a69e6'
        },
        {
            icon: <AiOutlineDesktop />,
            heading: t('novartisSecHeading'),
            para: t('novartisSecPara'),
            bgColor: 'rgba(250,94,93,0.3)',
            color: '#fa5e5d'
        },
        {
            icon: <BsCoin />,
            heading: t('novartisThirdHeading'),
            para: t('novartisThirdPara'),
            bgColor: 'rgba(249,141,94,0.3)',
            color: '#f98d5e'
        },
        {
            icon: <BsStar />,
            heading: t('novartisFourthHeading'),
            para: t('novartisFourthPara'),
            bgColor: 'rgba(118,206,68,0.3)',
            color: '#76ce44'
        },

    ]

    return (
        <div className='bg-[#FFFFFF]'>
            <div className='container'>
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

                <div className='py-20 max-w-[900px] mx-auto'>
                    <strong className="text-[26px] text-center sm:text-[50px] text-[#7830f6] font-bold sm:min-w-[600px] pb-5  mx-auto">
                        {t('risultatiHeading')}
                    </strong>
                    <p className="text-sm text-[#666666] font-medium leading-9 pb-2">
                        {t('risultatipara')}
                    </p>
                    <p className="text-sm text-[#666666] font-medium leading-9 pb-2">
                        {t('risultatipara2')}
                    </p>
                    <p className="text-sm text-[#666666] font-medium leading-9 pb-2">
                        {t('risultatipara3')}
                    </p>
                </div>
                <div className='flex'>
                    <Image src={'/risultati.png'} alt={''} width={200} height={200} />
                    <em className='text-lg text-gray-500'>
                        {t('risultatiQuote')}
                    </em>
                </div>
            </div>
        </div>
    );
};

export default NovartisCards;


