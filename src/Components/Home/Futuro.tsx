import GetLocale from "@/hooks/getLocale";
import useTranslation from "@/hooks/useTranslation";
import { freeQuoteSlug } from "@/utils";
import Link from "next-translate-routes/link";
import Image from "next/image";
import Button from "../Button";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

const Futuro = () => {
  const { t } = useTranslation();

  const locale = GetLocale();
  //@ts-ignore
  const slug = `/${locale}/${freeQuoteSlug[locale]}`;
  const data = [
    {
      heading: t("futureRemote_Heading"),
    },
   
    {
      text2: t("futureRemote_para2"),
    },
  ];

  return (
    <div className="container">
      <div className="flex flex-wrap lg:flex-nowrap items-center gap-0 md:gap-20 py-10">
        <div className="py-8 sm:py-28">
          <div className="mb-10">
            {data.map((item, index) => {
              return (
                <div className="" key={index}>
                  <h2 className="text-[#333333] text-[30px] sm:text-[45px] font-bold leading-10 sm:leading-[60px]">
                    {item.heading}
                  </h2>
                  
                  <p className=" text-base text-[#666666] font-medium max-w-[795px] mx-auto  py-2 sm:py-3">
                    {item.text2}
                  </p>
                </div>
              );
            })}
          </div>
          <Link href={slug}>
            <Button
              text={t("futureRemote_Btn")}
              color={"white"}
              backgroundColor={"#7F26DA"}
              minWidth={undefined}
            />
          </Link>
        </div>
        <div className="w-full">
        <LiteYouTubeEmbed id="KCgEhNeVhUc" title='rafiky' />
        </div>
      </div>
    </div>
  );
};

export default Futuro;
