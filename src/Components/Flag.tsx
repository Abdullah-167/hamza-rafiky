import GetLocale from "@/hooks/getLocale";
import useTranslation from "@/hooks/useTranslation";
import {
  britishSlugs,
  chineseSlugs,
  frenchSlugs,
  langPagesSlugs,
  russianSlugs,
  spanishSlugs,
  usaSlugs,
} from "@/utils";
import Link from "next-translate-routes/link";
import Image from "next/image";

const Flag = () => {
  const { t } = useTranslation();

  const locale = GetLocale();
  //@ts-ignore
  const slug = `/${locale}/${langPagesSlugs[locale]}/`;
  //@ts-ignore
  const britishSlug = `${britishSlugs[locale]}`;
  //@ts-ignore
  const chineseSlug = `${chineseSlugs[locale]}`;
  //@ts-ignore
  const frenchSlug = `${frenchSlugs[locale]}`;
  //@ts-ignore
  const russianSlug = `${russianSlugs[locale]}`;
  //@ts-ignore
  const spanishSlug = `${spanishSlugs[locale]}`;
  //@ts-ignore
  const usaSlug = `${usaSlugs[locale]}`;

  const data = [
    {
      img: "/british.png",
      text: `${t("ourOffer_Language1")}`,
      url: britishSlug,
    },
    {
      img: "/france.png",
      text: `${t("ourOffer_Language2")}`,
      url: frenchSlug,
    },
    {
      img: "/spain.png",
      text: `${t("ourOffer_Language3")}`,
      url: spanishSlug,
    },

    {
      img: "/united-states.png",
      text: `${t("ourOffer_Language4")}`,
      url: usaSlug,
    },
    {
      img: "/china.png",
      text: `${t("ourOffer_Language5")}`,
      url: chineseSlug,
    },
    {
      img: "/russia.png",
      text: `${t("ourOffer_Language6")}`,
      url: russianSlug,
    },
  ];

  return (
    <div className="container" id="languages">
      <div className="pt-10 pb-36">
        <h2 className="text-5xl font-semibold text-center pb-8">
          {t("ourOffer_Title")}
        </h2>
        <p className="text-center font-normal text-base pb-20">
          {t("ourOffer_para")}
        </p>
        <div className=" grid grid-cols-3 gap-10" >
          {data.map((item, index) => {
            return (
              <Link href={slug + item?.url} key={index}>
                <div className="flag-hover flag-shadow px-10 py-8 rounded-md cursor-pointer">
                  <Image
                    loading="lazy"
                    className="flex justify-center mx-auto pb-7"
                    src={item.img}
                    alt={t("alt_img_country")}
                    width={150}
                    height={0}
                  />
                  <h3 className="text-xl text-center font-semibold">
                    {item.text}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Flag;
