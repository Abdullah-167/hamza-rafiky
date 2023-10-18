
import useTranslation from '@/hooks/useTranslation';
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

const Vedio = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const { t } = useTranslation();
  const data = [
    {
      img: "/integration-teams.jpg",
      heading: t("services_Card1Title"),
      para: t("services_Card1para"),
      btn: t("fndOut"),
      link:"/remote-simultaneous-interpretation-rafiky/remote-interpreters"
    },
    {
      img: "/sign-lang-interpreter1.jpg",
      heading: t("services_Card2Title"),
      para: t("services_Card2para"),
      btn: t("fndOut"),
      link:"/remote-simultaneous-interpretation-rafiky/remote-interpreters"
  
    },
    {
      img: "/remote-interpreter1.jpg",
      heading: t("services_Card3Title"),
      para: t("services_Card3para"),
      btn: t("fndOut"),
      link:"/remote-simultaneous-interpretation-rafiky/remote-interpreters"
    },
  ];
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 10,
    },

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });


    return (
        <div className='vedio-bg py-12 sm:py-20'>
            <div className='container relative'>
                <div className='block lg:flex sm:gap-10'>
                   
                    <div className='pt-10'>
                        <p className='text-[#FCA497] text-[32px] font-bold pt-20'>{t('videoServiceTitel')}</p>
                        <p className='text-base font-medium text-white pbF-4   py-3'>{t('videoServiceparaOne')}</p>
                        <p className='text-base font-medium text-white pbF-4   pb-3'>{t('videoServiceparaTwo')}</p>
                        
                    </div>
                    <div className="py-20">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((item, index) => {
            return (
              <div
                className="card-shadow bg-white pb-6 p-3 rounded-md hover:scale-105 transition-all duration-500"
                key={index}
              >
                <Image
                  className="pb-5 rounded-t-md"
                  src={item.img}
                  alt={"cards-img"}
                  width={500 * 2}
                  height={500}
                />
                <h2 className="text-2xl font-semibold pb-3 px-2">
                  {item.heading}
                </h2>
                <p className="text-md font-poppins font-medium pb-10 max-w-lg px-2">
                  {item.para}
                </p>
                <span className="mx-2 font-medium text-[#8624E1] border-b-2 border-b-[#8624E1] hover:border-black hover:text-black duration-500 cursor-pointer">
                 <a href={item.link} className="text-[#8624E1]">{item.btn}</a>
                </span>
              </div>
            );
          })}
        </div>
      </div>
                </div>
            </div>
        </div>
    )
}

export default Vedio

