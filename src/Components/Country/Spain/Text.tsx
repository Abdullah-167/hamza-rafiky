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
      heading: t("italianSpanish_Heading"),
      para: t("italianSpanish_para"),
      btnText: t("italianSpanish_Btn"),
    },
    {
      heading: t("findYour_Heading"),
      para: t("findYour_para"),
      btnText: t("findYour_Btn"),
    },
    {
      heading: t("interpretationServices_HeadingSpanish"),
      para: t("interpretationServices_para"),
      btnText: t("interpretationServices_Btn"),
    },
  ];
  return (
    <div className="container">
      <div className="py-24">
        {text.map((item, index) => {
          return (
            <div className="py-10" key={index}>
              <strong className="text-2xl font-semibold pb-3">{item.heading}</strong>
              <p className="text-base font-normal pb-4 leading-8">
                {item.para}
              </p>
              <Link href={slug}>
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
