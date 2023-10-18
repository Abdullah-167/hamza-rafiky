import React from 'react'
import useTranslation from '@/hooks/useTranslation';
import Image from 'next/image';

const Risultati = () => {

    const { t } = useTranslation()

    return (
        <div className='container'>
            <div className='py-20'>
                <strong className='text-5xl text-[#8300e9] font-semibold text-center pb-6'>{t('risultatiHeading')}</strong>
                <p className='text-lg text-gray-500 text-center pb-3'>{t('risultatifirstpara')}</p>
                <p className='text-lg text-gray-500 text-center pb-3'>{t('risultatisecpara')}</p>
                <p className='text-lg text-gray-500 text-center pb-3'>{t('risultatithirdpara')}</p>
                <p className='text-lg text-gray-500 text-center pb-3'>{t('risultatifourthpara')}</p>
            </div>
            <div className='flex pb-10 gap-5'>
                <Image className="rounded-full w-16 max-h-16" src={'/redbullicon.jpg'} alt={''} width={120} height={120} />
                <em className='text-lg text-gray-500'>
                    {t('risultatiQuote')}
                </em>
            </div>
        </div>
    )
}

export default Risultati