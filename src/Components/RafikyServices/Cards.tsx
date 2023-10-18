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
          heading: t("rafikyServices_card1Heading"),
          para:t("rafikyServices_card1Para"),
          bgColor: "rgba(122,105,230,0.3)",
          color: "#7a69e6",
        },
        {
          icon: <FaArrowsAlt />,
          heading: t("rafikyServices_card2Heading"),
          para:t("rafikyServices_card2Para"),
          bgColor: "rgba(250,94,93,0.3)",
          color: "#fa5e5d",
        },
        {
          icon: <HiSpeakerWave />,
          heading: t("rafikyServices_card3Heading"),
          para:t("rafikyServices_card3Para"),
          bgColor: "#D5F0C6",
          color: "#76CE44",
        },
        {
          icon: <TbPinnedFilled />,
          heading: t("rafikyServices_card4Heading"),
          para:t("rafikyServices_card4Para"),
          bgColor: "rgba(122,105,230,0.3)",
          color: "#7a69e6",
        },
        {
          icon: <FaArrowsAlt />,
          heading: t("rafikyServices_card5Heading"),
          para:t("rafikyServices_card5Para"),
          bgColor: "rgba(250,94,93,0.3)",
          color: "#fa5e5d",
        },
        {
          icon: <HiSpeakerWave />,
          heading: t("rafikyServices_card6Heading"),
          para:t("rafikyServices_card6Para"),
          bgColor: "#D5F0C6",
          color: "#76CE44",
        },
        {
          icon: <TbPinnedFilled />,
          heading: t("rafikyServices_card7Heading"),
          para:t("rafikyServices_card7Para"),
          bgColor: "rgba(122,105,230,0.3)",
          color: "#7a69e6",
        },
        {
          icon: <FaArrowsAlt />,
          heading: t("rafikyServices_card8Heading"),
          para:t("rafikyServices_card8Para"),
          bgColor: "rgba(250,94,93,0.3)",
          color: "#fa5e5d",
        }
      ];
 
    return (
    <div className="sm:py-32">
      <div className="container">
        <h2 className="text-center text-6xl font-medium pb-16">
          {t("servicesSimultaneous_cardsTitle")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-5">
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
                <p className="text-sm text-[#333333] text-center  pt-8 pb-3">
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

export default Cards;


