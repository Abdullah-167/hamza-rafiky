import Image from "next/image";

import Button from "../Button";
import PinkBg from "../../../public/pink.png";
import useTranslation from "@/hooks/useTranslation";
import GetLocale from "@/hooks/getLocale";
import { freeQuoteSlug } from "@/utils";
import Link from "next-translate-routes/link";
const WeDo = () => {
  const { t } = useTranslation();
  const locale = GetLocale();
  //@ts-ignore
  const slug = `/${locale}/${freeQuoteSlug[locale]}`;
  const skillset = [
    {
      title: t("doBest_FirstSubHeading"),
      icon: "/puzzle.svg",
    },
    {
      title: t("doBest_SecSubHeading"),
      icon: "/doc.svg",
    },
    {
      title: t("doBest_ThirdSubHeading"),
      icon: "/avatar.svg",
    },
    {
      title: t("doBest_ForthSubHeading"),
      icon: "/vlc.svg",
    },
    {
      title: t("doBest_FivethSubHeading"),
      icon: "/analytics.svg",
    },
    {
      title: t("doBest_SixSubHeading"),
      icon: "/monitor.svg",
    },
    {
      title: t("doBest_SevenSubHeading"),
      icon: "/mail.svg",
    },
  ];
  return (
    <div
      className="wedo-main"
      style={{
        backgroundImage: `url(${PinkBg.src})`,
      }}
    >
      <div className="container">
        <div className="py-20">
          <h2 className="text-3xl md:text-5xl font-bold text-[#333] mb-20 text-center">
            {t("doBest_Heading")}
          </h2>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-20 mb-24">
            {skillset.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" flex justify-center items-center min-w-[250px]  rounded-full"
                >
                  <div>
                    <span className="flex justify-center pb-6">
                      <Image loading="lazy" src={item.icon} alt="" width={60} height={30} />
                    </span>
                    <div className="text-xl font-bold text-[#333] text-center">
                      {item.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Link href={slug}>
            <div className="flex justify-center">
              <Button
                text={t("doBest_Btn")}
                color={"white"}
                backgroundColor={"#8624E1"}
                minWidth={"full"}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WeDo;
