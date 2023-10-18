import Image from "next/image";
import useTranslation from "@/hooks/useTranslation";
import React from "react";

const Vantaggi = () => {

  const { t } = useTranslation();

  const data = [
    
    {
        img: "/bulb.svg",
        heading: t('teamsIntegration_Firstcard_Heading'),
        para: t('teamsIntegration_Firstcard_para'),
    },
    {
        img: "/inbox.svg",
        heading: t('teamsIntegration_Seccard_Heading'),
        para: t('teamsIntegration_Seccard_para'),
    },
    {
        img: "/piggy-bank-icon.svg",
        heading: t('teamsIntegration_Thirdcard_Heading'),
        para: t('teamsIntegration_Thirdcard_para'),
    },
    {
        img: "/checked.svg",
        heading: t('teamsIntegration_Forthcard_Heading'),
        para: t('teamsIntegration_Forthcard_para'),
    },

    {
        img: "/tools.svg",
        heading: t('teamsIntegration_Fifthcard_Heading'),
        para: t('teamsIntegration_Fifthcard_para'),
    },
    {
        img: "/x5.svg",
        heading: t('teamsIntegration_Sixthcard_Heading'),
        para: t('teamsIntegration_Sixthcard_para'),
    },
  ];
  
  return (
    <section className='py-20 bg-[#F5F6FC]'>
      <div className="container">
      <h3 className=' text-[35px] sm:text-[45px] text-[#333333] font-bold text-center mb-12'>VANTAGGI</h3>
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
      </div>
    </section>
  );
};

export default Vantaggi;

