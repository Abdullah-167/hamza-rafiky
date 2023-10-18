import Button from "../Button";
import { IoIosArrowDown } from "react-icons/io";
import BgImage from "../../../public/frame3.webp";
import useTranslation from "@/hooks/useTranslation";

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
              {t("servicesSimultaneousTranslation_SubTitle")}
            </h3>
            <h1 className="text-3xl sm:text-6xl md:text-[79px] text-white font-bold mx-auto max-w-[1060px] text-center leading-[1.2em] pb-12">
              {t("servicesSimultaneousTranslation_Title")}
            </h1>
           
            <p className=" text-[20px] font-medium text-white mx-auto max-w-[850px] text-center pb-5">
              {t("servicesSimultaneousTranslation_para1")}
            </p>
            <p className=" text-[20px] font-medium text-white mx-auto max-w-[850px] text-center pb-10">
            </p>
          </div>
          <div className="flex justify-center">
            <Button
              text={t("servicesSimultaneous_contactBtn")}
              color={"black"}
              backgroundColor={"white"}
              minWidth={undefined}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
