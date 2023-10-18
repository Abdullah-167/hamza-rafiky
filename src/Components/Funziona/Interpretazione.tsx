import { useState } from "react";
import useTranslation from "@/hooks/useTranslation";
import Image from "next/image";

const Interpretazione1 = () => {
  const { t } = useTranslation();
  const cards = [
    {
      img:"/flexibility.svg",
      heading: t("remoteSimultaneous_list1"),
      para: t("remoteSimultaneous_list1para"),
    },
    {
      img:"/video.svg",
      heading: t("remoteSimultaneous_list2"),
      para: t("remoteSimultaneous_list2para"),
    },
    {
      img:"/quality.svg",
      heading: t("remoteSimultaneous_list3"),
      para: t("remoteSimultaneous_list3para"),
    },
  ];
  const cards1 = [
    {
      img:"/chat.svg",
      heading: t("remoteSimultaneous_list4"),
      para: t("remoteSimultaneous_list4para"),
    },

    {
      img:"/chat-pm.svg",
      heading: t("remoteSimultaneous_list5"),
      para: t("remoteSimultaneous_list5para"),
    },
  ];
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index: any) => {
    if (index === expandedIndex) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="bg-[#F7F6FD] py-10">
      <div className="container">
        <h2 className="text-[45px] m:text-[45px] text-[#333333] font-bold text-center  pb-7 max-w-[900px] mx-auto">
        {t("remoteSimultaneous_Title")}{" "}
        </h2>
        <p className="text-base text-center sm:text-3xl text-[#C1C1C1] font-medium py-1 mb-7">
              {t("remoteSimultaneous_SubTitle")}{" "}
            </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-2 gap-y-3 py-10">
          {cards.map((item, index) => {
            return (
              <div
                className="px-2 py-10 rounded-xl relative"
                key={index}
              >
                <div
                  className={`text-4xl rounded-full w-20 h-20 mx-auto px-2 py-3 text-center`}
                  
                >
                  <div className="icon-container"> 
                  <Image
                  className="min-h-[120px] mx-auto flex justify-center pb-4"
                  src={item.img}
                  alt={"images"}
                  width={70}
                  height={70}
                />
                  </div>
                </div>
                <h3 className="text-lg text-[#333333] text-center font-bold pt-8 pb-3">
                  {item.heading}
                </h3>
                <p className="text-base text-[#666666] sm:max-w-[250px] mx-auto text-center">
                  {item.para}
                </p>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-1 gap-y-2 py-10 mx-auto max-w-[fit-content]">
          {cards1.map((item, index) => {
            return (
              <div
                className="py-10 px-2 rounded-xl relative"
                key={index}
              >
                <div
                  className={`text-4xl rounded-full w-20 h-20 mx-auto px-2 py-3 text-center`}
                  
                >
                  <div className="icon-container"> 
                  <Image
                  className="min-h-[120px] mx-auto flex justify-center pb-4"
                  src={item.img}
                  alt={"images"}
                  width={70}
                  height={70}
                />
                  </div>
                </div>
                <h3 className="text-lg text-[#333333] text-center font-bold pt-8 pb-3">
                  {item.heading}
                </h3>
                <p className="text-base text-[#666666] sm:max-w-[250px] mx-auto text-center">
                  {item.para}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Interpretazione1;
