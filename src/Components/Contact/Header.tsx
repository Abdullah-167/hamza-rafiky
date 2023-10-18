import newBg from "../../../public/frame.png";
import useTranslation from "@/hooks/useTranslation";

const Header = () => {
  const { t } = useTranslation();
  return (
    <div
      className="home-bg "
      style={{
        backgroundImage: `url(${newBg.src})`,
      }}
    >
      <div className="text-white  text-center py-32">
        <h2 className="text-[26px] font-medium pb-4">{t("contactUs_Title")}</h2>
        <h1 className="text-3xl sm:text-[80px] font-bold pb-8">
          {t("contactUs_SubTitle")}
        </h1>
        <p className="font-normal max-w-[600px] mx-auto text-lg leading-9">
          {t("contactUs_para")}
        </p>
      </div>
    </div>
  );
};

export default Header;
