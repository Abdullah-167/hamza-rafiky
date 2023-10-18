import useTranslation from "@/hooks/useTranslation";
import { Link } from "next-translate-routes";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import BgImage from "../../../public/pink.png";
import Button from "../Button";

const Vedio = () => {
  const { t } = useTranslation();
  return (
    <div
      className="vedio"
      style={{
        backgroundImage: `url(${BgImage.src})`,
      }}
    >
      <div className="container relative">
        <div className=" grid grid-cols-2 gap-24 py-20 sm:py-32 pb-[100px]">
          <div>
            <div className="flex justify-center items-center mb-6">

              <div>
                <h3 className="text-[#6A1ACC] text-3xl sm:text-[45px] font-bold pt-10 leading-[55px]">

                </h3>
                <p className="text-base font-normal text-black pbF-4 max-w-[750px] pb-3 leading-7">
                  {t("videoInterpreted_para")}
                </p>

              </div>
            </div>
            <div className="mb-10">
              <Link href={'/richiesta-preventivo'} >
                <Button
                  text={t("videoInterpreted_Heading")}
                  color={"white"}
                  backgroundColor={"#8624E1"}
                  minWidth={undefined}
                />
              </Link>
            </div>
          </div>
          <div className="self-center">
            <LiteYouTubeEmbed
              id="K1xWE4MdmTY" title="rafikay"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vedio;
