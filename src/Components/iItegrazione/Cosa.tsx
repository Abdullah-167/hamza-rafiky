import useTranslation from "@/hooks/useTranslation";
import Image from "next/image";
import { useEffect, useState } from "react";
import Speaking from "../NewComponents/Speaking";

const Cosa = () => {
  const { t } = useTranslation();

  const data = [
    {
      img: "/laughman.png",
      btnTitle: "Interpretazione a distanza per qualsiasi tipologia di evento!",
      heading: t("microsoftTeams_Heading"),
      para: t("microsoftTeams_para"),
      para2: t("microsoftTeams_para2"),
      para3: t("microsoftTeams_para3"),
    },
  ];

  const counting = [
    {
      num: "+200",
      text: t("microsoftTeams_FirstCountTesting"),
      color: "#8300E9",
      color2: "#8300E9",
    },
    {
      num: "+30000",
      text: t("microsoftTeams_SecCountTesting"),
      color: "#2EA3F2",
      color2: "#0c71c3",
    },
    {
      num: "+6000",
      text: t("microsoftTeams_ThirdCountTesting"),
      color: "#f22ed4",
      color2: "#ea20e3",
    },
  ];

  const [count, setCount] = useState(0);

  const declaredNum = 500;

  useEffect(() => {
    if (count < declaredNum) {
      const timeOutId = setTimeout(() => {
        setCount(count + 25);
      }, 100);

      return () => clearTimeout(timeOutId);
    }
  }, [count]);

  return (
    <div className="container">
      <div className="py-12 smL:py-20">
        {data.map((item, index) => {
          return (
            <div
              className="flex flex-col justify-center gap-10 py-10 sm:py-20 items-center"
              key={index}
            >
              <div>
                <h2 className="text-[30px] m:text-[45px] text-[#333333] font-bold pb-5">
                  {item.heading}
                </h2>
                <p className="text-base text-[#666666] font-medium leading-9 pb-3">
                  {item.para}
                </p>
                <p className="text-base text-[#666666] font-medium leading-9 pb-3">
                  {item.para2}
                </p>
                <p className="text-base text-[#666666] font-medium leading-9 pb-3">
                  {item.para3}
                </p>
              </div>
              <div className="flex justify-center w-full">
                <Image
                  loading="lazy"
                  src={item.img}
                  alt={t("alt_img_microsoft_teams_integration")}
                  width={1000}
                  height={0}
                />
              </div>
            </div>
          );
        })}
       <Speaking/>
      </div>
    </div>
  );
};

export default Cosa;
