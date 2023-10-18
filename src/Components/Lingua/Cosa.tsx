import GetLocale from "@/hooks/getLocale";
import useTranslation from "@/hooks/useTranslation";
import { useEffect, useState } from "react";
import Button from "../Button";

import { freeQuoteSlug } from "@/utils";
import Link from "next-translate-routes/link";
import Speaking from "../NewComponents/Speaking";
import Image from "next/image";
const Cosa = () => {
  const [count, setCount] = useState(0);
  const locale = GetLocale();
  //@ts-ignore
  const slug = `/${locale}/${freeQuoteSlug[locale]}`;
  const declaredNum = 500;

  useEffect(() => {
    if (count < declaredNum) {
      const timeOutId = setTimeout(() => {
        setCount(count + 25);
      }, 100);

      return () => clearTimeout(timeOutId);
    }
  }, [count]);

  const { t } = useTranslation();

  const data = [
    {
      url: "https://www.youtube.com/embed/u6wyZwyTVoA?feature=oembed",
      btnTitle: t("servicesLanguageinterpretation_Btn"),
      heading: t("servicesLanguageinterpretation_Heading"),
      para: t("servicesLanguageinterpretation_para"),
    },
  ];

  const counting = [
    {
      num: "+200",
      text: t("servicesLanguageinterpretatio_Firstcountingtest"),
      color: "#8300E9",
      color2: "#8300E9",
    },
    {
      num: '24/7',
      text: t("servicesLanguageinterpretatio_Seccountingtest"),
      color: "#2EA3F2",
      color2: "#0c71c3",
    },
    {
      num: `20'000`,
      text: t("servicesLanguageinterpretatio_Thirdcountingtest"),
      color: "#f22ed4",
      color2: "#ea20e3",
    },
  ];

  return (
    <div className="container">
      <div className="py-12 smL:py-20">
        {data.map((item, index) => {
          return (
            <div
              className="flex flex-col xl:flex-row gap-10 py-10 sm:py-20 items-center"
              key={index}
            >
              <div>
                <h2 className="text-[30px] m:text-[45px] text-[#333333] font-bold sm:min-w-[600px] pb-5">
                  {item.heading}
                </h2>
                <p className="text-base text-[#666666] font-medium xl:max-w-[550px] leading-9">
                  {item.para}
                </p>
                <div className="mt-10">
                  <Link href={slug}>
                    <Button
                      text={t("servicesLanguageinterpretation_Btn")}
                      color={"white"}
                      backgroundColor={"#682CCD"}
                      minWidth={undefined}
                    />
                  </Link>
                </div>
              </div>
              <div className="w-full">
                   <Image 
                    className="rounded-3xl"
            loading="lazy"
             src="/sign-language-pic1.png" 
            alt="sign-language"
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