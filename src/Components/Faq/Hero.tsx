import React, { FC } from 'react'
import blueBg from '../../../public/frame.png'

interface HeroCom {
  text: string;
  para: string;
  fontSize: string
}

const Hero: FC<HeroCom> = ({ text, para, fontSize }) => {
  return (
    <div className='vedio-bg py-32' style={{
      backgroundImage: `url(${blueBg.src})`
    }}>
      <p className='text-center text-2xl text-white font-bold pb-10'>
        {para}
      </p>
      <h1
        style={{
          fontSize: fontSize
        }}
        className='uppercase font-bold text-white text-center max-w-[1000px] mx-auto'>
        {text}
      </h1>

    </div>
  )
}

export default Hero