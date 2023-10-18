import Image from "next/image";
import useTranslation from "@/hooks/useTranslation";
import React from "react";

const WhyUs = () => {

  const { t } = useTranslation();

  const data = [
    {
      imge: "/piggy-bank-icon.svg",
      heading: t('chooseRafiky_Thirdcard_Heading'),
      para: t('ChooseRafiky_Thirdcard_para'),
    },
    {
      imge: "/quality-4.svg",
      heading: t('chooseRafiky_Forthcard_Heading'),
      para: t('chooseRafiky_Forthcard_para'),
    },
    {
      imge: "/box.svg",
      heading: t('chooseRafiky_Sixthcard_Heading'),
      para: t('chooseRafiky_Sixthcard_para'),
    },
    {
      imge: "/handle.svg",
      heading: t('chooseRafiky_Seccard_Heading'),
      para: t('chooseRafiky_Seccard_para'),
    },
    {
      imge: "/hand.svg",
      heading: t('chooseRafiky_Seventhcard_Heading'),
      para: t('chooseRafiky_Seventhcard_para'),
    },
    {
      imge: "/adapter-2.svg",
      heading: t('chooseRafiky_Fifthcard_Heading'),
      para: t('chooseRafiky_Fifthcard_para'),
    },
  ];
  
  return (
    <section className=" py-20 bg-indigo-500 bg-opacity-10">
      <div className="container">
      <h2 className=' text-[35px] sm:text-[45px] text-[#333333] font-bold text-center mb-12'>{t('chhoserafikyheading')}</h2>
        <div className=" grid grid-cols-1 md:grid-cols-3  gap-10">
          {data.map((item, index) => {
            return (
              <div className=" gap-5" key={index}>
                <Image
                  className=" object-contain pb-4"
                  src={item.imge}
                  alt={"card-img"}
                  width={60}
                  height={60}
                  style={{height:"76px"}}
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
    </section>
  );
};

export default WhyUs;

