import useTranslation from "@/hooks/useTranslation";
import { Link } from "next-translate-routes";
import BgImage from "../../../public/frame3.webp";
import Button from "../Button";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div
      className="main-cpmBg"
      style={{
        backgroundImage: `url(${BgImage.src})`,
      }}
    >
      <div className="container">
        <div className=" py-20">
          <div>
            <h3 className="text-base sm:text-[26px] font-medium text-white text-center pb-5">
              {t("servicesWebConference_SubTitle")}
            </h3>
            <h1 className="text-3xl sm:text-6xl md:text-[79px] text-white font-bold mx-auto max-w-[1060px] text-center leading-[1.2em] pb-12">
              {t("servicesWebConference_Title")}
            </h1>

            <p className=" text-[20px] font-medium text-white mx-auto max-w-[850px] text-center pb-5">
              {t("servicesWebConference_para1")}
            </p>
            <p className=" text-[20px] font-medium text-white mx-auto max-w-[850px] text-center pb-10">
              {t("servicesWebConference_para2")}
            </p>
          </div>
          <div className="flex justify-center">
            <Link href={'/contattaci'} >
              <Button
                text={t("servicesSimultaneous_contactBtn")}
                color={"black"}
                backgroundColor={"white"}
                minWidth={undefined}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
