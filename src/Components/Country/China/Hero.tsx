import Button from "../../Button";

import BgImage from "../../../../public/frame3.webp";
import useTranslation from "@/hooks/useTranslation";
import GetLocale from "@/hooks/getLocale";
import { freeQuoteSlug } from "@/utils";
import Link from "next-translate-routes/link";
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
        <div className="flex justify-center items-center sm:gap-10">
          <div className="pb-10 pt-10 sm:pt-32 sm:pb-32">
            <div>
              <h1 className="text-3xl sm:text-6xl md:text-[79px] text-white font-bold mx-auto max-w-[1160px] text-center leading-[1.2em] pb-10">
                {t("chineseInterpreting_Heading")}{" "}
              </h1>
              <p className=" text-[20px] font-medium text-white mx-auto max-w-[950px] text-center pt-5 leading-10">
                {t("chineseInterpreting_para")}
              </p>
            </div>
            <div className="flex justify-center mt-10">
              <Link href={slug}>
                <Button
                  text={t("chineseInterpreting_Btn")}
                  color={"black"}
                  backgroundColor={"white"}
                  minWidth={undefined}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
