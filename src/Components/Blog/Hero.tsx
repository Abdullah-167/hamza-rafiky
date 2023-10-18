import Image from 'next/image';
import React, { useState } from 'react';
import blogImg from '../../../public/frame3.webp'
import useTranslation from '@/hooks/useTranslation';

const Hero = () => {
    const { t } = useTranslation();
    return (
        <div 
        style={{
            backgroundImage: `url(${blogImg.src})`
        }}>
        
            <div className='py-32'>
                <p className='text-white text-2xl text-center font-bold pb-6'>Blog</p>
                <h1 className='text-[80px] font-bold text-white max-w-[1200px] mx-auto text-center leading-[110px]'>{t("blogh1Title")}</h1>
            </div>
        </div>
    )
}

export default Hero;
