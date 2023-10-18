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
      heading: t("russianItalian_Heading"),
      para: t("russianItalian_para"),
      btnText: t("russianItalian_Btn"),
    },
    {
      heading: t("russianInterpreter_Heading"),
      para: t("russianInterpreter_para"),
      btnText: t("russianInterpreter_Btn"),
    },
    {
      heading: t("interpretationServices_HeadingItalin"),
      para: t("interpretationServices_para"),
      btnText: t("interpretationServices_Btn"),
    },
  ];
  return (
    <div className="container">
      <div className="py-24">
        {text.map((item, index) => {
          return (
            <Link href={slug} key={index}>
              <div className="py-10">
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
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Text;
