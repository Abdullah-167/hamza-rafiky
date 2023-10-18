import GetLocale from "@/hooks/getLocale";
import useTranslation from "@/hooks/useTranslation";
import { freeQuoteSlug } from "@/utils";
import Link from "next-translate-routes/link";
import { useEffect, useState } from "react";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import Button from "../Button";
import Speaking from "../NewComponents/Speaking";

const Cosa = () => {
  const locale = GetLocale();
  //@ts-ignore
  const slug = `/${locale}/${freeQuoteSlug[locale]}`;
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

  const { t } = useTranslation();

  const data = [
    {
      url: "u6wyZwyTVoA",
      btnTitle: t("remoteInterpreting_Btn"),
      heading: t("remoteInterpreting_Heading"),
      para: t("remoteInterpreting_para"),
      para2: t("remoteInterpreting_paraOne"),
      para3: t("remoteInterpreting_paraTwo"),
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
                <b className="text-[30px] m:text-[45px] text-[#333333] font-bold sm:min-w-[600px]">
                  {item.heading}
                </b>
                <p className="text-base text-[#666666] font-medium xl:max-w-[550px] pb-3 pt-3 ">
                  {item.para}
                </p>
                <p className="text-base text-[#666666] font-medium xl:max-w-[550px]  pb-3leading-9">
                  {item.para2}
                </p>
                <div className="mt-10">
                  <Link href={slug}>
                    <Button
                      text={item.btnTitle}
                      color={"white"}
                      backgroundColor={"#682CCD"}
                      minWidth={undefined}
                    />
                  </Link>
                </div>
              </div>
              <div className="w-full h-[470px]">
                <LiteYouTubeEmbed title='rafiky' id={item.url} />
              </div>
            </div>
          );
        })}
        <div className="flex flex-col md:flex-row justify-center md:justify-between gap-5">
          <Speaking/>
        </div>
      </div>
    </div>
  );
};

export default Cosa;
