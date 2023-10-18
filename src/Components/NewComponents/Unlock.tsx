import Image from "next/image";
import React from "react";
import useTranslation from "@/hooks/useTranslation";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useKeenSlider } from "keen-slider/react";

const Unlock = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const { t } = useTranslation();
  const data = [
    {
      img: "/events.jpg",
      heading: t("inPersonHeading"),
      para: t("inPersonPara"),
      btn: t("fndOut"),
      link:"/remote-simultaneous-interpretation-rafiky/remote-interpreters"
    },
    {
      img: "/meetings.jpg",
      heading: t("virtualMeetingsHeading"),
      para: t("virtualMeetingsPara"),
      btn: t("fndOut"),
      link:"/remote-simultaneous-interpretation-rafiky/remote-interpreters"
  
    },
    {
      img: "/virtual-events.jpg",
      heading: t("onlineMeetingsHeading"),
      para: t("onlineMeetingsPara"),
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
    <section className="container">
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
                <h2 className="text-xl font-semibold pb-3 px-2">
                  {item.heading}
                </h2>
                <p className="text-sm font-poppins font-medium pb-10 max-w-lg px-2">
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
    </section>
  );
};

export default Unlock;

function Arrow(props: any) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <div
      onClick={props.onClick}
      className={`max-w-[40px] rounded-full p-3 cursor-pointer flex justify-center items-center ${
        props.left
          ? "arrow--left bg-tertiary"
          : "arrow--right -right-4 bg-primary"
      } ${disabeld}`}
    >
      {props.left && (
        <span>
          {" "}
          <AiOutlineArrowLeft />{" "}
        </span>
      )}
      {!props.left && (
        <span>
          {" "}
          <AiOutlineArrowRight />
        </span>
      )}
    </div>
  );
}
