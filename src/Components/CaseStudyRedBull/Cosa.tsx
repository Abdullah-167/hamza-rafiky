import React, { useEffect, useState } from "react";
import Button from "../Button";
import { IoIosArrowDown } from "react-icons/io";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import useTranslation from "@/hooks/useTranslation";
import Image from "next/image";

const Cosa = () => {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();
  const data = [
    {
      url: "u6wyZwyTVoA",
      subHeading1: t("caseStudyRedBull_subHeading1"),
      firstColorHeadingLaChallenge: t('firstColorHeadingLaChallengeRedBull'),
      secondColorHeadingLaChallenge: t('secondColorHeadingLaChallengeRedBull'),
      para1: t("caseStudyRedBull_para1"),
      para2: t("caseStudyRedBull_para2"),
      para3: t("caseStudyRedBull_para3"),
      para4: t("caseStudyRedBull_para4"),
      para5: t("caseStudyRedBull_para5"),
      para6: t("caseStudyRedBull_para6"),
    },
  ];
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
    <div className="max-w-[1100px] mx-auto px-5">
      <div className="py-12 smL:py-20">
        {data.map((item, index) => {
          return (
            <div
              className=" py-12"
              key={index}
            >
              <div className="max-w-[800px]">
                <h2 className="text-[30px] m:text-[45px] text-[#333333] font-bold  pb-7">
                  {item.subHeading1}
                </h2>
                <div>
                  <strong className="text-[26px] text-start m:text-[45px] text-[#7830f6] font-bold sm:min-w-[600px] pb-5">
                    {item.firstColorHeadingLaChallenge}
                  </strong>
                  <p className="text-base text-[#666666] font-medium leading-9 pb-5">
                    {item.para1}
                  </p>
                  <p className="text-base text-[#666666] font-medium leading-9 pb-5">
                    {item.para2}
                  </p>
                  <p className="text-base text-[#666666] font-medium leading-9 pb-5">
                    {item.para3}
                  </p>
                  <strong className="text-[26px] text-start m:text-[45px] text-[#7830f6] font-bold sm:min-w-[600px] pb-5">
                    {item.secondColorHeadingLaChallenge}
                  </strong>
                  <p className="text-base text-[#666666] font-medium leading-9">
                    {item.para4}
                  </p>
                  <p className="text-base text-[#666666] font-medium leading-9 pb-5">
                    {item.para5}
                  </p>
                  <p className="text-base text-[#666666] font-medium leading-9 pb-5">
                    {item.para6}
                  </p>
                </div>
              </div>

            </div>
          );
        })}
      </div>
      <div className="flex justify-center pb-5">
        <Image src={"/redbull.png"} alt={""} width={500} height={500} />
      </div>
    </div>
  );
};

export default Cosa;



