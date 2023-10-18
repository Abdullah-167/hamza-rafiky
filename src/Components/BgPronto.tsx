import Button from "./Button";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io5";
import { BsYoutube } from "react-icons/bs";
import BgImage from "../../public/frame3.webp";
import useTranslation from "@/hooks/useTranslation";
import GetLocale from "@/hooks/getLocale";
import { freeQuoteSlug } from "@/utils";
import Link from "next-translate-routes/link";
const BgPronto = () => {
  const { t } = useTranslation();
  const locale = GetLocale();
  //@ts-ignore
  const slug = `/${locale}/${freeQuoteSlug[locale]}`;
  return (
    <div
      className="main-cpmBg py-10"
      style={{
        backgroundImage: `url(${BgImage.src})`,
      }}
    >
      <div className="container">
        <div>
          <div>
            <h3 className="text-2xl text-white font-bold text-center pt-10 pb-8 leading-1">
              {t("ready_Title")}
            </h3>
            <h2 className="text-[35px] sm:text-[50px] text-white font-bold text-center mx-auto pb-12 lg:leading-30">
              {t("ready_SubTitle")}
            </h2>
          </div>
          <Link href={slug}>
            <div className="flex justify-center">
              <Button
                text={t("ready_Btn")}
                color={"black"}
                backgroundColor={"white"}
                minWidth={undefined}
              />
            </div>
          </Link>
        </div>
        <div className="flex justify-center gap-5 items-center">
          {iconData.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                className="bg-[#F3E9FD] text-[#6A1ACC] font-bold text-xl w-12 h-12 rounded-full p-3 flex justify-center items-center cursor-pointer mt-14"
              >
                {item.icon}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BgPronto;

const iconData = [
  {
    url: "https://www.facebook.com/Rafiky-103256367862244/",
    icon: <FaFacebookF />,
  },
  {
    url: "https://twitter.com/rafiky_net",
    icon: <AiOutlineTwitter />,
  },
  {
    url: "https://www.linkedin.com/in/rafiky-ltd-49826a19a/",
    icon: <GrLinkedinOption />,
  },
  {
    url: "https://www.instagram.com/rafikynet/",
    icon: <IoLogoInstagram />,
  },
  {
    url: "https://www.youtube.com/channel/UCQj4LE9-1G0dhWDbzIoUy8w",
    icon: <BsYoutube />,
  },
];
