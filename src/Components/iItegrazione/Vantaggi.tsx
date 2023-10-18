import { useState } from "react";
import { HiPuzzlePiece } from "react-icons/hi2";
import { HiClipboardDocumentCheck } from "react-icons/hi2";
import {
  BsEnvelope,
  BsFileBarGraphFill,
  BsFillPeopleFill,
} from "react-icons/bs";
import { AiTwotoneLike, AiOutlineDesktop } from "react-icons/ai";
import { FcVlc } from "react-icons/fc";
import useTranslation from "@/hooks/useTranslation";
import Image from "next/image";

const Vantaggi = () => {
  const { t } = useTranslation();
  const cards = [
    {
      img:"/puzzle.svg",
      heading: t("microsoftTeams_FirstcardHeading"),
      para: t("microsoftTeams_Firstcardpara"),
      faqHeading: t("scorpiHeading"),
      faqpara: t("scorpiParaOne"),
      btn: t("fndOut"),
      link:"/remote-simultaneous-interpretation-rafiky/remote-interpreters"
    },
    {
      img:"/star.svg",
      heading: t("microsoftTeams_SeccardHeading"),
      para: t("microsoftTeams_Seccardpara"),
      faqHeading: t("scorpiHeading"),
      faqpara: t("scorpiParaTwo"),
      btn: t("fndOut"),
      link:"/remote-simultaneous-interpretation-rafiky/remote-interpreters"
    },
    {
      img:"/avatar.svg",
      heading: t("microsoftTeams_ThirdHeading"),
      para: t("microsoftTeams_Thirdpara"),
      faqHeading: t("scorpiHeading"),
      faqpara: t("scorpiParaThree"),
      btn: t("fndOut"),
      link:"/remote-simultaneous-interpretation-rafiky/remote-interpreters"
    },
    {
      img:"/vlc1.svg",
      heading: t("microsoftTeams_ForthHeading"),
      para: t("microsoftTeams_Forthpara"),
      faqHeading: t("scorpiHeading"),
      faqpara: t("scorpiParaFour"),
      btn: t("fndOut"),
      link:"/remote-simultaneous-interpretation-rafiky/remote-interpreters"
    },

    {
      img:"/analytics.svg",
      heading: t("microsoftTeams_FiveHeading"),
      para: t("microsoftTeams_Fivepara"),
      faqHeading: t("scorpiHeading"),
      faqpara: t("scorpiParaFive"),
      btn: t("fndOut"),
      link:"/remote-simultaneous-interpretation-rafiky/remote-interpreters"
    },
    {
      img: "/envelope.svg",
      heading: t("microsoftTeams_SixHeading"),
      para: t("microsoftTeams_Sixpara"),
      faqHeading: t("scorpiHeading"),
      faqpara: t("scorpiParaSix"),
      btn: t("fndOut"),
      link:"/remote-simultaneous-interpretation-rafiky/remote-interpreters"
    },
    {
      img:"/monitor.svg",
      heading: t("microsoftTeams_SevenHeading"),
      para: t("microsoftTeams_Sevenpara"),
      faqHeading: t("scorpiHeading"),
      faqpara: t("scorpiParaSeven"),
      btn: t("fndOut"),
      link:"/remote-simultaneous-interpretation-rafiky/remote-interpreters"
    },
    {
      img:"/like.svg",
      heading: t("microsoftTeams_EightHeading"),
      para: t("microsoftTeams_Eightpara"),
      faqHeading: t("scorpiHeading"),
      faqpara: t("scorpiParaEight"),
      btn: t("fndOut"),
      link:"/remote-simultaneous-interpretation-rafiky/remote-interpreters"
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
    <div className="bg-[#F5F6FC] py-10">
      <div className="container">
        <h2 className="text-[45px] m:text-[45px] text-[#333333] font-bold text-center  pb-7 max-w-[900px] mx-auto">
          {t("card_heading2")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-5 py-20">
          {cards.map((item, index) => {
            return (
              <div
                className="hero-cards bg-white px-4 py-10 rounded-xl relative"
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
                <div
                      className={`team-shadow absolute z-[1000s] inset-x-0 bottom-0 w-full flex items-center gap-3 cursor-pointer p-4 transition duration-700 ease-in-out`}
                    >
                      <h3 className="text-xl mt-5 font-semibold">
                      <a href={item.link} className="text-[#8624E1]">{item.btn}</a>
                      </h3>
                    </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Vantaggi;
