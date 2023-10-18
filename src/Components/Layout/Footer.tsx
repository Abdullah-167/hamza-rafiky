import React, { useState } from "react";
import Image from "next/image";
import useTranslation from "@/hooks/useTranslation";
import Link from "next-translate-routes/link";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiRightArrow } from "react-icons/bi";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { AiOutlineGlobal } from "react-icons/ai";
import { TbShieldLockFilled } from "react-icons/tb";

const Footer = () => {
  const { t } = useTranslation();
  const [subscribe, setSubscribe] = useState(false)
  const data = [
    {
      mainHeading:t("footer_section1Title"),
      innerSec: [
        {
          text: t("footer_section1"),
        },
      ],
    },
    {
      mainHeading: t("footer_section2Title"),
      innerSec: [
        {
          text: t("footer_section2"),
        },
      ],
    },
    {
      mainHeading: t("pages"),
      innerSec: [
        {
          text: t("footerPageOne"),
          link: "/chi-siamo",
        },
        {
          text: t("footerPageTwo"),
          link: "/come-funziona",
        },
        {
          text: t("footerPageThree"),
          link: "/casi-duso",
        },
        {
          text: t("footerPageFour"),
          link: "/contattaci",
        },
      ],
    },
  ];
  return (
    <footer className="bg-[#FBFBFB] ">
      <div>
        <div className=" container">
          <div className="flex flex-wrap md:flex-nowrap justify-between gap-16 py-10">
            <div className="flex flex-wrap sm:flex-nowrap justify-between gap-10">
              <div>
                <h4 className="text-[#1F1926] text-2xl mt-5 mb-6 font-bold">
                  {t("footer_section1Title")}
                </h4>
                <p>
                  {t("footer_section1")}
                </p>
              </div>
              <div>
                <h4 className="text-[#1F1926] text-2xl mt-5 mb-6 font-bold">
                  {t("offices")}
                </h4>
                <p className="text-sm">
                  Viale Fulvio Testi, 59
                  <br />
                  Cinisello Balsamo (MI), 20092 – Italia
                </p>
                <p className="text-sm mt-6 mb-1">VAT number</p>
                <p className="text-sm">10145550967</p>
              </div>
              <div>
                <h4 className="text-[#1F1926] text-2xl mt-5 mb-6 font-bold">
                  {t("pages")}
                </h4>
                <div className="footer flex flex-col text-sm">
                  <Link href={"/chi-siamo"} className="mb-4">
                    <span>{t("footerPageOne")}</span>
                  </Link>
                  <Link href={"/come-funziona"} className="mb-4">
                    <span>{t("footerPageTwo")}</span>
                  </Link>
                  <Link href={"/casi-duso"} className="mb-4">
                    <span>{t("footerPageThree")}</span>
                  </Link>
                  <Link href={"/contattaci"} className="mb-4">
                    <span>{t("footerPageFour")}</span>
                  </Link>
                  <Link
                    href={
                      "/terms-conditions/rescheduling-cancellation-and-refund-policy"
                    }
                    className="mb-4"
                  >
                    {t("footerPageFive")}
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h2 className="text-lg pb-2 font-medium text-green-600 font-green">
                {subscribe ? t("Subscribe") : ""}
                </h2>
              <div className="flex items-center mb-4 cursor-pointer">
                <input
                  className="py-1.5 w-full bg-white border-blue-800 border px-2 outline-none rounded-l-md"
                  placeholder="Email Address*"
                />
                <span className="text-lg bg-[#8624e1] text-white flex justify-center items-center px-2 rounded-r-md py-[10px]">
                  {" "}
                  <FiSend onClick={()=>setSubscribe(true)}/>{" "}
                </span>
              </div>
              <p className="text-sm">{t("happyTeam")}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-10 mb-5">
            <div className="flex gap-10">
              <a
                className="flex gap-2"
                href="https://apps.apple.com/us/app/rafiky-connect/id1515495958"
                target="_blank"
              >
                <span>
                  <AiOutlineGlobal className="text-4xl sm:text-5xl text-[#895dbb]" />
                </span>
                <span className="text-sm sm:text-base text-[#6f6f6f] font-medium">
                  IOS <br /> 23000/25000
                </span>
              </a>
              <a
                className="flex gap-2"
                href="https://apps.apple.com/us/app/rafiky-connect/id1515495958"
                target="_blank"
              >
                <span>
                  <TbShieldLockFilled className="text-4xl sm:text-5xl text-[#895dbb]" />
                </span>
                <span className="textext-sm sm:t-base text-[#6f6f6f] font-medium">
                  GDPR <br /> 100% success rate{" "}
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <a href="https://apps.apple.com/us/app/rafiky-connect/id1515495958" target="_blank">
                <Image src="/appstore.png" alt="" width={150} height={150} />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.rafiky.connect&hl=it&pli=1" target="_blank">
                <Image src="/play.png" alt="" width={160} height={160} />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 ">
          <div className="text-xs flex items-center flex-wrap sm:flex-nowrap justify-between max-w-[1240px] mx-auto py-5 px-5">
            <div className="max-w-[300px]">
              <Link href={"/"}>
                <Image
                  loading="lazy"
                  src="/logo.png"
                  alt="logo"
                  width={150}
                  height={0}
                />
              </Link>
            </div>
            <p className="">{t("captcha")} </p>
            <span className="hidden sm:block">
              <Link href={"/terms-conditions"}>
                <span className="px-1">{t("terms")} ||</span>
              </Link>
              <Link href={"/terms-conditions/privacy-policy"}>
                <span className="px-1">{t("privacy")} ||</span>
              </Link>
              <Link href={"/terms-conditions/cookies-policy"}>
                <span className="px-1"> {t("cookie")} </span>
              </Link>
            </span>
            <div className="flex gap-3 items-center">
              {iconData.map((item, index) => {
                return (
                  <a
                    key={index}
                    href={item.url}
                    className="bg-gray-200 text-black font-bold text-xl w-10 h-10 rounded-full p-3 flex justify-center items-center cursor-pointer"
                    target="_blank"
                  >
                    {item.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

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
