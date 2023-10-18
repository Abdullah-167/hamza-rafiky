import Button from "@/Components/Button";
import useTranslation from "@/hooks/useTranslation";
import GetLocale from "@/hooks/getLocale";
import { freeQuoteSlug } from "@/utils";
import Link from "next-translate-routes/link";
const Text = () => {
  const { t } = useTranslation();
  const locale = GetLocale();
  //@ts-ignore
  const slug = `/${locale}/${freeQuoteSlug[locale]}`;
  const text = [
    {
      heading: t("italianEnglish_Heading"),
      para: t("italianEnglish_para"),
      btnText: t("italianEnglish_Btn"),
    },
    {
      heading: t("italianEnglishInterpreting_Heading"),
      para: t("italianEnglishInterpreting_para"),
      btnText: t("italianEnglish_Btn"),
    },
    {
      heading: t("servicesInEnglish_Heading"),
      para: t("servicesInEnglish_para"),
      btnText: t("italianEnglish_Btn"),
    },
  ];
  return (
    <div className="container">
      <div className="py-24">
        {text.map((item, index) => {
          return (
            <div className="py-10" key={index}>
              <Link href={slug} passHref>
                <strong className="text-2xl font-semibold pb-3">{item.heading}</strong>
                <p className="text-base font-normal pb-4 leading-8">
                  {item.para}
                </p>
                <Button
                  text={item.btnText}
                  color={"white"}
                  backgroundColor={"#8624E1"}
                  minWidth={undefined}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Text;
