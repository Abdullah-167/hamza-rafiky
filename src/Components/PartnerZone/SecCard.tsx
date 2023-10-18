import useTranslation from "@/hooks/useTranslation";
import Image from "next/image";

import {
  AiFillLock,
  AiOutlineCloudDownload,
  AiOutlineMobile,
} from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { GrStatusGood } from "react-icons/gr";
import { HiOutlineKey } from "react-icons/hi";
import { RxSpeakerLoud } from "react-icons/rx";
import { SlMagnifierAdd } from "react-icons/sl";

const SecCard = () => {
  const { t } = useTranslation();

  const cards = [
    {
      img:"/clock.svg",
      heading: t("chooseRafiky_FirstcardTitle"),
      para: t("chooseRafiky_Firstcardpara"),
    },
    {
      img:"/checked.svg",
      heading: t("chooseRafiky_SeccardTitle"),
      para: t("chooseRafiky_Seccardpara"),
      bgColor: "rgba(250,94,93,0.3)",
      color: "#7a69e6",
    },
    {
      img:"/zoom-in.svg",
      heading: t("chooseRafiky_ThirdcardTitle"),
      para: t("chooseRafiky_Thirdcardpara"),
      bgColor: "rgba(249,141,94,0.3)",
      color: "#f98d5e",
    },

    {
      img:"/speaker.svg",
      heading: t("chooseRafiky_ForthcardTitle"),
      para: t("chooseRafiky_Forthcardpara"),
  },
    {
      img:"/key.svg",
      heading: t("chooseRafiky_FifthcardTitle"),
      para: t("chooseRafiky_Fifthcardpara"),
    },
    {
      img:"/lock.svg",
      heading: t("chooseRafiky_SixcardTitle"),
      para: t("chooseRafiky_Sixcardpara"),
    },
    {
      img:"/mobile-lock.svg",
      heading: t("chooseRafiky_SeventhcardTitle"),
      para: t("chooseRafiky_Seventhcardpara"),
      bgColor: "rgba(247,103,180,0.3)",
      color: "#f767b4",
    },
    {
      img:"/cloud.svg",
      heading: t("chooseRafiky_EightcardTitle"),
      para: t("chooseRafiky_Eightcardpara"),
    },
  ];

  return (
    <div className="bg-[#FFFFFF] sm:py-20">
      <div className="container">
        <h2 className=" text-[35px] sm:text-[45px] text-[#333333] font-bold text-center mb-16">
          {t("chooseRafiky_Title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-5 pb-32">
        {cards.map((item, index) => {
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
    </div>
  );
};

export default SecCard;
