import useTranslation from "@/hooks/useTranslation";
import Link from "next-translate-routes/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const MiniNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<string | null>(null);

  const handleOpen = (item: string) => {
    setIsOpen(true);
    setCurrentItem(item);
  };

  const handleClose = () => {
    setIsOpen(false);
    setCurrentItem(null);
  };

  const { t } = useTranslation();

  return (
    <div className="mini-nav-main">
      <nav className="max-w-[1600px] mx-auto px-12">
        <ul className="hidden sm:flex justify-end gap-10">
          <li>
            <Link href={"/partner-zone"}>
              <span
                onMouseOver={() => handleOpen("partnerZoness")}
                onMouseLeave={() => handleClose()}
                className="flex items-center gap-1"
              >
                {t("partnerZone")}
                <span
                  className={`transition-all duration-300 ${isOpen && currentItem === "partnerZoness"
                      ? " rotate-180"
                      : ""
                    }`}
                >
                  <IoIosArrowDown />
                </span>
              </span>
            </Link>
            <ul className="">
              <li className="flex items-center px-5">
                <Link href={"/partner-zone/agenzie-di-noleggio-attrezzature"}>
                  <span className="px-5">{t("partnerZoneIneerFirst")}</span>{" "}
                </Link>
              </li>
              <li className="flex items-center px-5">
                <Link href={"/partner-zone/rafiky-agenzieditraduzione"}>
                  <span className="px-5">{t("partnerZoneIneerSec")}</span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href={"/lingue"}>
              <span
                onMouseEnter={() => handleOpen("interpretariato")}
                onMouseLeave={() => handleClose()}
                className="hidden md:flex items-center gap-1"
              >
                {t("interpretio")}
                <span
                  className={`transition-all duration-300 ${isOpen && currentItem === "interpretariato"
                      ? " rotate-180"
                      : ""
                    }`}
                >
                  <IoIosArrowDown />
                </span>
              </span>
            </Link>
            <ul>
              <Link href={"/lingue/interpretariato-in-inglese-britannico/"}>
                <li>
                  <span className="px-5  hidden md:block ">
                    {t("interpretioFrist")}
                  </span>
                </li>{" "}
              </Link>
              <Link href={"/lingue/interpretariato-in-inglese-americano/"}>
                <li>
                  <span className="px-5   hidden md:block">
                    {t("interpretioSec")}
                  </span>
                </li>
              </Link>
              <Link
                href={
                  "/lingue/interpretariato-in-francese-interpretariato-a-distanza/"
                }
              >
                <li>
                  <span className="px-5   hidden md:block">
                    {t("interpretioThird")}
                  </span>{" "}
                </li>
              </Link>
              <Link
                href={
                  "/lingue/interpretariato-in-spagnolo-interpreti-a-distanza/"
                }
              >
                <li>
                  <span className="px-5  hidden md:block ">
                    {t("interpretioFour")}
                  </span>{" "}
                </li>
              </Link>
              <Link
                href={"/lingue/interpretariato-in-cinese-interpreti-da-remoto/"}
              >
                <li>
                  <span className="px-5  hidden md:block ">
                    {t("interpretioFive")}
                  </span>{" "}
                </li>
              </Link>
              <Link href={"/lingue/interpretariato-in-russo/"}>
                <li>
                  <span className="px-5   hidden md:block">
                    {t("interpretioSix")}
                  </span>{" "}
                </li>
              </Link>
            </ul>
          </li>
          <Link href={"/richiesta-preventivo/"}>
            <li className="hidden lg:flex">{t("pricing")}</li>{" "}
          </Link>
          <li>
            <a href="#">+39 0282950332</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MiniNav;
