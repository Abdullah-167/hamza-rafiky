import { GoLocation } from "react-icons/go";
import { GrMail } from "react-icons/gr";
import { IoHome } from "react-icons/io5";
import useTranslation from "@/hooks/useTranslation";
import Image from "next/image";

const PercheCards = () => {
  const { t } = useTranslation();
  const cards = [
    {
      img:"/location1.svg",
      heading: t("contactUs_FirstcardHeading"),
      para: t("contactUs_Firstcardpara"),
    },
    {
      img:"/envelope.svg",
      heading: t("contactUs_SeccardHeading"),
      para: t("contactUs_Seccardpara"),
    },
    {
      img:"/home.svg",
      heading: t("contactUs_ThirdcardHeading"),
      para: t("contactUs_Thirdcardpara"),
    },
  ];
  return (
    <div className="">
      <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-5 gap-y-5 py-20">
          {cards.map((item, index) => {
            return (
              <div
                className="px-4 py-10 rounded-xl relative"
                key={index}
              >
                <div
                  className={`text-4xl rounded-full w-20 h-20 mx-auto px-4 py-3 text-center`}
                  
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
                <p className="text-base text-[#666666] mb-5 sm:max-w-[250px] mx-auto text-center">
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

export default PercheCards;
