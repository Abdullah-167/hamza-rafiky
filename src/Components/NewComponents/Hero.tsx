import GetLocale from "@/hooks/getLocale";
import Image from "next/image";
import Link from "next/link";
import { freeQuoteSlug } from "@/utils";
import useTranslation from "@/hooks/useTranslation";



const Hero = () => {
  const { t } = useTranslation();
  const locale = GetLocale();
  //@ts-ignore
  const slug = `/${locale}/${freeQuoteSlug[locale]}`;
  return (
    <header className="home-bgMain pt-10">
      <div className=" max-w-[1600px] mx-auto px-5">
        <div className="header flex justify-between sm:gap-20 items-center">
        <div className="pb-10 sm:pb-12 sm:pl-10 md:pl-20">
            <div>
              <h2 className="text-[20px] font-medium text-secondary pt-[70px] sm:pt-[106px] pb-4 ">
                {t("home_HeroTitle")}{" "}
              </h2>
              <h1 className="text-[40px] md:text-[60px] text-white font-bold  xl:max-w-[651px]  leading-[50px] sm:leading-[65px] pb-7">
                {t("home_HeroSubTitle")}
              </h1>
              <h2 className="text-[28px] font-semibold mb-4 text-white">
                {t("home_heroline")}
              </h2>
              <p className="text-base sm:text-[20px] font-medium text-white  xl:max-w-[750px] mb-10 sm:mb-14 leading-8">
                {t("home_HeroDescription")}
              </p>
            </div>
            <div className="flex item-center flex-wrap md:flex-nowrap gap-x-5  gap-y-3">
              <Link href={slug}>
              <span className="border border-white  bg-white px-5 rounded-full py-2 cursor-pointer flex justify-center items-center min-w-[230px] max-w-[230px]">
              {t("home_HeroFirstBtn")}
              </span>
              </Link>
              <Link href={`${locale}/#${t("talk_to_sales")}`}>
              <span className=" border-2 border-white px-5 rounded-full py-2 text-white cursor-pointer flex justify-center items-center min-w-[230px] max-w-[230px]">
              {t("home_HeroSecBtn")}
              </span>
              </Link>
            </div>
          </div>
          <div className="mx-auto overflow-hidden relative mt-40">
            <Image
              className="image"
              src={"/hero-baji.svg"}
              alt={"Image"}
              width={1700}
              height={1700}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
