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
        <h2 className="text-[26px] font-medium">
        {t("caseStudies_subTitle")}
        </h2>
        <h1 className="text-[80px] font-bold pb-8">
          {t("caseStudies_Title")}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
