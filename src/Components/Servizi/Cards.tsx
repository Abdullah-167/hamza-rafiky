import useTranslation from '@/hooks/useTranslation';
import { useEffect, useState } from 'react';
import Image from "next/image"
import Speaking from '../NewComponents/Speaking';

const Cards = () => {

    const [count, setCount] = useState(0);

    const declaredNum = 500;

    useEffect(() => {
        if (count < declaredNum) {
            const timeOutId = setTimeout(() => {
                setCount(count + 25)
            }, 100);

            return () => clearTimeout(timeOutId)
        }
    }, [count])

    const { t } = useTranslation();

    const data = [
        {
            img: "/puzzle.svg",
            heading: t("serviceschooseRafiky_FirstcardTitle"),
            para: t("serviceschooseRafiky_Firstcardpara"),
        },
        {
            img: "/piggy-bank-icon.svg",
            heading: t("serviceschooseRafiky_ThirdcardTitle"),
            para: t("serviceschooseRafiky_Thirdcardpara"),
       },
        {
            img: "/star.svg",
            heading: t("serviceschooseRafiky_ForthcardTitle"),
            para: t("serviceschooseRafiky_Forthcardpara"),
    },

    ]

    return (
        <div className='bg-[#FFFFFF]  sm:py-20'>
            <div className='container'>
                <h2 className='  text-[35px] sm:text-[45px] text-[#333333] font-bold text-center mb-12'>{t("serviceschooseRafiky_Tile")}</h2>
        <div className=" grid grid-cols-1 md:grid-cols-3  gap-10">
          {data.map((item, index) => {
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
                <Speaking/>
            </div>
        </div>
    );
};

export default Cards;


