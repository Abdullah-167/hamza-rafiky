import GetLocale from "@/hooks/getLocale";
import useTranslation from "@/hooks/useTranslation";
import { freeQuoteSlug } from "@/utils";
import Link from "next-translate-routes/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../Button";
import Speaking from "../NewComponents/Speaking";

const Cosa = () => {
  const locale = GetLocale();
  //@ts-ignore
  const slug = `/${locale}/${freeQuoteSlug[locale]}`;
  const [count, setCount] = useState(0);

  const declaredNum = 500;

  useEffect(() => {
    if (count < declaredNum) {
      const timeOutId = setTimeout(() => {
        setCount(count + 25);
      }, 100);

      return () => clearTimeout(timeOutId);
    }
  }, [count]);

  const { t } = useTranslation();

  const data = [
    {
      url: "https://www.youtube.com/embed/u6wyZwyTVoA?feature=oembed",
      btnTitle:
        "Servizio di interpretariato a distanza – Interpreti Qualificati ",
      heading: "In cosa consiste l’integrazione di Microsoft Teams su Rafiky?",
      para: "La nuova integrazione di Microsoft Teams su Rafiky vi permetterà di continuare a utilizzare la piattaforma di Microsoft Teams e contemporaneamente godere dei servizi di interpretariato remoto di Rafiky. Questa interconnessione tra le due piattaforme di web conferencing abilita i nostri interpreti nell’ operare ottimamente servizi di traduzione e interpretariato, e consente alle aziende di gestire la conferenza sul proprio terminale MS Teams.L’avanzato e innovativo software di Rafiky fornisce tutta una serie di servizi di team meeting online, anche nella integrazione di Microsoft Teams.",
    },
  ];

  const counting = [
    {
      num: "+200",
      text: t("qualifiedInterpreters_Firstcountingtest"),
      color: "#8300E9",
      color2: "#8300E9",
    },
    {
      num: "24/7",
      text: t("qualifiedInterpreters_Seccountingtest"),
      color: "#2EA3F2",
      color2: "#0c71c3",
    },
    {
      num: `20'000`,
      text: t("qualifiedInterpreters_Thirdcountingtest"),
      color: "#f22ed4",
      color2: "#ea20e3",
    },
  ];

  return (
    <div className="container">
      <div className="py-12 smL:py-20">
        <div className="flex flex-col lg:flex-row gap-16 sm:gap-12 py-20 sm:py-32">
          <div className="min-w-full lg:min-w-[500px] flex justify-between items-center">
            <Image
             className="rounded-3xl"
              loading="lazy"
              src={"/remote-interpreter.jpg"}
              alt={t("alt_img_qualified_interpreters")}
              width={1000}
              height={0}
            />
          </div>
          <div>
            <div className="mb-10">
              {data.map((item, index) => {
                return (
                  <div className="lg:max-w-[550px]" key={index}>
                    <h2 className="text-[#8300e9] text-[35px] sm:text-[40px] font-bold leading-[45px]">
                      {t("qualifiedInterpreters_Heading")}{" "}
                    </h2>
                    <p className="text-base font-medium text-black pbF-4 lg:max-w-[750px] py-3 leading-9">
                      {t("qualifiedInterpreters_para")}
                    </p>
                  </div>
                );
              })}
            </div>
            <div>
              <Link href={slug}>
                <Button
                  text={t("qualifiedInterpreters_Btn")}
                  color={"white"}
                  backgroundColor={"#8300e9"}
                  minWidth={undefined}
                />
              </Link>
            </div>
          </div>
        </div>
        <Speaking/>
      </div>
    </div>
  );
};

export default Cosa;
