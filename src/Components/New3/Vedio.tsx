
import useTranslation from '@/hooks/useTranslation';
import { Link } from 'next-translate-routes';
import Button from '../Button';

const Vedio = () => {

    const { t } = useTranslation();


    const data = [
        {
            heading: t('solidNetwork_Heading'),
        },
        {
            para: t('solidNetwork_para'),
        },
    ]

    return (
        <div className='vedio-bg'>
            <div className='container relative'>
                <div className=' sm:gap-24 py-20 sm:py-32'>
                    {/* <div className='w-full h-[300px] sm:h-[600px] flex justify-between items-center pb-20'>
                        <LiteYouTubeEmbed title='rafiky' id="K1xWE4MdmTY" />
                    </div> */}
                    <div>
                        <div className='mb-10'>
                            {data.map((item, index) => {
                                return (
                                    <div className='max-w-[1050px]' key={index}>
                                        <h3 className='text-white text-[35px] sm:text-[45px] font-bold'>{item.heading}</h3>
                                        <p className='text-base font-medium text-white pbF-4 lg:max-w-[750px] py-3 leading-9'>{item.para}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            <Link href={'/come-funziona'}>
                                <Button text={t('solidNetwork_Btn')} color={'black'} backgroundColor={'white'} minWidth={undefined} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vedio

