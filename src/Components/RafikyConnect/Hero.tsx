import newBg from "../../../public/frame.png";
import useTranslation from "@/hooks/useTranslation";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div
      className="home-bg py-10"
      style={{
        backgroundImage: `url(${newBg.src})`,
      }}
    >
      <div className="text-white  text-center py-32 container">
        <p className="text-[26px] font-medium">{t("rafikyConnectsubtHeading")}</p>
        <h1 className="text-[40px] md:text-[70px] font-bold pb-8">
          {t("rafikyConnectfirstHeading")}
        </h1>
        <p className="font-normal max-w-[600px] mx-auto text-lg leading-9">
          {t("caseStudyVolksWagen_para")}
        </p>
      </div>
    </div>
  );
};

export default Hero;
