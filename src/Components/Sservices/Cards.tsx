import { TbPinnedFilled } from "react-icons/tb";
import { BsHourglassSplit, BsFillPeopleFill } from "react-icons/bs";
import { HiSpeakerWave } from "react-icons/hi2";
import { FaArrowsAlt } from "react-icons/fa";
import useTranslation from "@/hooks/useTranslation";

const Cards = () => {

    const {t} = useTranslation();
    const cards = [
        {
          icon: <TbPinnedFilled />,
          heading: t("servicesSimultaneous_card1Heading"),
          bgColor: "rgba(122,105,230,0.3)",
          color: "#7a69e6",
        },
        {
          icon: <BsHourglassSplit />,
          heading: t("servicesSimultaneous_card2Heading"),
          bgColor: "rgba(250,94,93,0.3)",
          color: "#fa5e5d",
        },
        {
          icon: <BsFillPeopleFill />,
          heading: t("servicesSimultaneous_card3Heading"),
          bgColor: "rgba(249,141,94,0.3)",
          color: "#f98d5e",
        },
        {
          icon: <BsFillPeopleFill />,
          heading: t("servicesSimultaneous_card4Heading"),
          bgColor: "#E09900",
          color: "#F0B800",
        },
        {
          icon: <FaArrowsAlt />,
          heading: t("servicesSimultaneous_card5Heading"),
          bgColor: "#FECECE",
          color: "#E02B20",
        },
        {
          icon: <HiSpeakerWave />,
          heading: t("servicesSimultaneous_card6Heading"),
          bgColor: "#D5F0C6",
          color: "#76CE44",
        },
      ];
 
    return (
    <div className="sm:py-32">
      <div className="container">
        <h2 className="text-center text-6xl font-medium pb-16">
          {t("servicesSimultaneous_cardsTitle")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-5">
          {cards.map((item, index) => {
            return (
              <div
                className="hover-animate hero-cards bg-white px-4 py-16 rounded-xl"
                key={index}
              >
                <div
                  className={`text-4xl rounded-full w-16 h-16 mx-auto px-4 py-3 text-center`}
                  style={{
                    backgroundColor: item.bgColor,
                    color: item.color,
                  }}
                >
                  <div className="icon-container"> {item.icon} </div>
                </div>
                <h4 className="text-lg text-[#333333] text-center font-bold pt-8 pb-3">
                  {item.heading}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;


