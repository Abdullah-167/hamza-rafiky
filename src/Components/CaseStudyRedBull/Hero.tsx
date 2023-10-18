import newBg from "../../../public/frame.png";
import useTranslation from "@/hooks/useTranslation";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div
      className="home-bg "
      style={{
        backgroundImage: `url(${newBg.src})`,
      }}
    >
      <div className="text-white  text-center py-32">
        <h2 className="text-[26px] font-medium">{t("caseStudyNovartis_subTitle")}</h2>
        <h1 className="text-[35px] sm:text-[70px] font-bold pb-8">
          {t("mainTitleRedBull")}
        </h1>
        <p className="font-normal max-w-[600px] mx-auto text-lg leading-9">
          {t("caseStudyRedBull_paraMain")}
        </p>
      </div>
    </div>
  );
};

export default Hero;
