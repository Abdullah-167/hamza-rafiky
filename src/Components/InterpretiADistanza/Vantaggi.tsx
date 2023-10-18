;

import Image from "next/image"
import useTranslation from '@/hooks/useTranslation';

const Vantaggi = () => {

    const { t } = useTranslation();
    const data = [
    
        {
            img: "/bulb.svg",
            heading: t("qualifiedInterpreters_FirstcardTitle"),
            para: t("qualifiedInterpreters_Firstcardpara"),
        },
        {
            img: "/inbox.svg",
            heading: t("qualifiedInterpreters_SeccardTitle"),
            para: t("qualifiedInterpreters_Seccardpara"),
        },
        {
            img: "/x5.svg",
            heading: t("qualifiedInterpreters_ThirdcardTitle"),
            para: t("qualifiedInterpreters_Thirdcardpara"),
        },
        {
            img: "/checked.svg",
            heading: t("qualifiedInterpreters_ForthcardTitle"),
            para: t("qualifiedInterpreters_Forthcardpara"),
        },
      ];
    return (
        <section className='py-20 bg-[#F5F6FC]'>
        <div className="container">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {data.map((item, index) => {
            return (
                <div className="gap-5" key={index}>
                <Image
                  className="min-h-[120px] mx-auto flex justify-center pb-4"
                  src={item.img}
                  alt={"images"}
                  width={70}
                  height={70}
                />
                <div>
                  <h3 className="text-2xl sm:text-3xl font-semibold pb-2 text-center">
                    {item.heading}
                  </h3>
                  <p className="text-sm sm:text-xl font-medium sm:font-semibold text-center">
                    {item.para}
                  </p>
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

