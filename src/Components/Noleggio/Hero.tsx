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
        <div className="flex justify-center items-center gap-10">
          <div className="pb-20 sm:pb-32">
            <div className="mb-12">
              <h1 className="text-[30px] sm:text-[40px] md:text-[79px] text-white font-bold mx-auto max-w-[1100px] text-center leading-[1.2em] pt-20 pb-12">
                {t("equipmentRental_Heading")}
              </h1>
              <p className="text-base sm:text-[20px] font-medium text-white mx-auto max-w-[750px] text-center leading-9">
                {" "}
                {t("equipmentRental_para")}
              </p>
            </div>
            <div className="flex justify-center">
              <Link href={'/contattaci'}>
                <Button
                  text={t("equipmentRental_Btn")}
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
