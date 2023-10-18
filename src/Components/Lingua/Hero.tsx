import Button from "../Button";
import BgImage from "../../../public/frame3.webp";
import useTranslation from "@/hooks/useTranslation";
import GetLocale from "@/hooks/getLocale";
import { contactUsSlug } from "@/utils";
import Link from "next-translate-routes/link";

const Hero = () => {
  const { t } = useTranslation();
  const locale = GetLocale();
  //@ts-ignore
  const slug = `/${locale}/${contactUsSlug[locale]}`;
  return (
    <div
      className="main-cpmBg"
      style={{
        backgroundImage: `url(${BgImage.src})`,
      }}
    >
      <div className="container">
        <div className="flex justify-center items-center gap-10">
          <div className="py-20 sm:py-32">
            <div className="mb-12">
              <h2 className="text-3xl text-center text-white font-medium pb-5 uppercase">
                {t("servicesSignlanguage_Title")}
              </h2>
              <h1 className="text-[30px] sm:text-[60px] md:text-[79px] text-white font-bold mx-auto max-w-[1100px] text-center leading-[1.2em] pb-12">
                {t("servicesSignlanguage_Subtitle")}
              </h1>
              <p className="text-base sm:text-[20px] font-medium text-white mx-auto max-w-[950px] text-center leading-9">
                {t("servicesSignlanguage_para")}
              </p>
            </div>
            <Link href={slug}>
              <div className="flex justify-center">
                <Button
                  text={t("servicesSignlanguage_Btn")}
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
