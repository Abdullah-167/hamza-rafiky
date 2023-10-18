import GetLocale from "@/hooks/getLocale";
import useTranslation from "@/hooks/useTranslation";
import { freeQuoteSlug } from "@/utils";
import Link from "next-translate-routes/link";
import Image from "next/image";
import Button from "../Button";
const OurSkills = () => {
  const { t } = useTranslation();
  const locale = GetLocale();
  //@ts-ignore
  const slug = `/${locale}/${freeQuoteSlug[locale]}`;
  const skillset = [
    {
      title: t("ourSkills_FirstCardHeading"),
      para: t("ourSkills_FirstCardDescription"),
      icon: "/doc.svg",
    },
    {
      title: t("ourSkills_SecCardHeading"),
      para: t("ourSkills_SecCardDescription"),
      icon: "/monitor.svg",
    },
    {
      title: t("doBest_ThirdSubHeading"),
      para: t('teamsIntegration_Sixthcard_para'),
      icon: "/x5.svg",
    },
    {
      title: t("ourSkills_ThirdCardHeading"),
      para: t("ourSkills_ThirdCardDescription"),
      icon: "/avatar.svg",
    },
    {
      title: t("ourSkills_ForthCardHeadingpara"),
      para: t("ourSkills_ForthCardHeadingDescription"),
      icon: "/analytics.svg",
    },
    {
      title: t("ourSkills_SixthCardHeading"),
      para: t("ourSkills_SixthCardDescription"),
      icon: "/piggy-bank-icon.svg",
    },
  ];
  return (
    <div className="bg-[#fdfdfd]">
      <div className="container">
        <div className="py-20 px-5">
          <h2 className="text-3xl md:text-5xl font-bold text-[#333] pb-5 small:pb-0 text-center mb-16">
            {t("ourSkills_Heading")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto sm:mx-0 sm:max-w-full mb-10">
            {skillset.map((item, index) => {
              return (
                <div
                  key={index}
                  className="hover-animate rounded mb-9 px-5 sm:px-8 lg:px-8 py-8 "
                >
                  <Image
                    loading="lazy"
                    className=" mx-auto pb-4"
                    src={item.icon}
                    alt=""
                    width={60}
                    height={76}
                  />
                  <h3 className="text-lg 2xl:text-xl font-bold text-[#333] text-center pb-6">
                    {item.title}
                  </h3>
                  <p className="text-sm font-normal text-[#333] text-center">
                    {item.para}
                  </p>
                </div>
              );
            })}
          </div>
          <Link href={slug}>
            <div className="flex justify-center">
              <Button
                text={t("ourSkills_Btn")}
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

export default OurSkills;
