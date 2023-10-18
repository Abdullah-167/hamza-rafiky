import { IoBulbOutline } from 'react-icons/io5';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { HiOutlineInboxIn } from 'react-icons/hi';
import { BsCoin, BsTools, BsEnvelope } from 'react-icons/bs';
import { AiTwotoneLike } from 'react-icons/ai';
import { BiIdCard } from 'react-icons/bi';
import { CgDanger } from 'react-icons/cg';
import useTranslation from '@/hooks/useTranslation';

const LaChallenge = () => {

    const { t } = useTranslation()


    const cards = [
        {
            icon: <IoBulbOutline />,
            heading: t('LaChallengeFirstHeading'),
            para: t('LaChallengeFirstPara'),
            bgColor: 'rgba(122,105,230,0.3)',
            color: '#7a69e6'
        },
        {
            icon: <HiOutlineInboxIn />,
            heading: t('LaChallengeSecHeading'),
            para: t('LaChallengeSecPara'),
            bgColor: 'rgba(250,94,93,0.3)',
            color: '#fa5e5d'
        },
        {
            icon: <BsCoin />,
            heading: t('LaChallengeThirdHeading'),
            para: t('LaChallengeThirdPara'),
            bgColor: 'rgba(249,141,94,0.3)',
            color: '#f98d5e'
        },
        {
            icon: <IoIosCheckmarkCircleOutline />,
            heading: t('LaChallengeFourthHeading'),
            para: t('LaChallengeThirdPara'),
            bgColor: 'rgba(118,206,68,0.3)',
            color: '#76ce44'
        },

    ]

    return (
        <div className='bg-[#F5F6FC]'>
            <div className='container'>
            <h2   className="text-[45px] m:text-[45px] text-[#333333] font-bold text-center  pb-7"     >
                        {t('card_heading')}
                    </h2>
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
                                <h3 className='text-lg text-[#333333] text-center font-bold pt-8 pb-3'>
                                    {item.heading}
                                </h3>
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

export default LaChallenge;

