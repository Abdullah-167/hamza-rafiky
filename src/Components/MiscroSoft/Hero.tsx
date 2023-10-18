import Button from "../Button";
import BgImage from "../../../public/frame3.webp";
import useTranslation from "@/hooks/useTranslation";
import Link from "next-translate-routes/link";
import { freeQuoteSlug } from "@/utils";
import GetLocale from "@/hooks/getLocale";

const Hero = () => {
  const { t } = useTranslation();
  const locale = GetLocale();
  //@ts-ignore
  const slug = `/${locale}/${freeQuoteSlug[locale]}`;
  return (
    <div
      className="main-cpmBg"
      style={{
        backgroundImage: `url(${BgImage.src})`,
      }}
    >
      <div className="container">
        <div className="flex justify-center items-center gap-10">
          <div className="pb-20 sm:pb-32">
            <div className="mb-12">
              <h1 className="text-[30px] sm:text-[60px] md:text-[79px] text-white font-bold mx-auto max-w-[1100px] text-center leading-[1.2em] pt-20 pb-12">
                {" "}
                {t("servicesMicrosoftteams_HeroHeading")}{" "}
              </h1>
              <p className="text-base sm:text-[20px] font-medium text-white mx-auto max-w-[750px] text-center leading-9">
                {" "}
                {t("servicesMicrosoftteams_Heropara")}
              </p>
            </div>
            <Link href={slug}>
              <div className="flex justify-center">
                <Button
                  text={t("servicesMicrosoftteams_HeroBtn")}
                  color={"black"}
                  backgroundColor={"white"}
                  minWidth={undefined}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
