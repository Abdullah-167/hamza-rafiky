import useTranslation from "@/hooks/useTranslation";
import { Link } from "next-translate-routes";
import Image from "next/image";

import { FiArrowUpRight } from "react-icons/fi";
import BgImage from "../../../public/frame3.webp";

const OurMission = () => {
  const { t } = useTranslation();
  return (
    <div className="main-cpmBg py-10"
    style={{
      backgroundImage: `url(${BgImage.src})`,
    }}>
      <div className="container">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center py-12 sm:py-28">
          <div className="text-white max-w-[640px] mb-10 md:mb-0">
            <h2 className="text-[32px] font-bold pb-7">
              {t("ourMission_Heading")}
            </h2>
            <p className="text-base font-normal leading-8 pb-5">
              {t("ourMission_para")}{" "}
            </p>
            <Link href={'/contattaci'}>
              <button className="text-[20px] flex gap-1 items-center pb-1 text-secondary hover:text-[#66a5ff] outline-none border-b border-b-secondary hover:border-b-[#66a5ff] transition-all duration-500">
                {t("ourMission_link")}
                <FiArrowUpRight className="text-[23px] font-black" />
              </button>
            </Link>
          </div>
          <div className="w-full lg:min-w-[450px] xl:min-w-[500px]">
            <Image
            className="rounded-3xl"
              loading="lazy"
              src={"/mission.jpg"}
              alt={t("alt_img_our_mission")}
              width={1000}
              height={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
