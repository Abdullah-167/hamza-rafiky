import Button from "@/Components/Button";

import useTranslation from "@/hooks/useTranslation";
import { Link } from "next-translate-routes";

const Text = () => {
  const { t } = useTranslation();
  const text = [
    {
      heading:
        t("italianEnglish_Heading"),
      para: t("italianEnglish_para"),
      btnText: t("italianEnglish_Btn"),
    },
    {
      heading:
        t("italianIntoEnglish_Heading"),
      para: t("italianIntoEnglish_para"),
      btnText: t("italianIntoEnglish_Btn"),
    },
    {
      heading:
        t("interpretationServices_HeadingEnglish"),
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
              <Link href={'/richiesta-preventivo'}>
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
