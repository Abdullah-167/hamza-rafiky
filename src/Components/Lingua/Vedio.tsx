import Image from "next/image";

import useTranslation from "@/hooks/useTranslation";
import { Link } from "next-translate-routes";
import lockUpMobile from "../../../public/lockup-mobile.png";
import Button from "../Button";

const Vedio = () => {
  const { t } = useTranslation();

  const data = [
    {
      heading: t("servicesWhysign_Heading"),
    },
    {
      para: t("servicesWhysign_para"),
    },
  ];

  return (
    <div className="vedio-bg">
      <div className="container relative">
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-10  justify-between items-center py-20 ">
          <div className="w-1/2">
            <Image
              loading="lazy"
              className=" -rotate-[30deg]"
              src={lockUpMobile}
              alt={t("alt_img_sign_language_interpretation")}
              width={1000}
              height={1000}
            />
          </div>
          <div className="max-w-[600px]">
            <div className="mb-10">
              {data.map((item, index) => {
                return (
                  <div className="" key={index}>
                    <h2 className="text-white text-[35px]  font-bold">
                      {item.heading}
                    </h2>
                    <p className="text-base font-medium text-white pbF-4 lg:max-w-[750px] py-3 leading-9">
                      {item.para}
                    </p>
                  </div>
                );
              })}
            </div>
            <div>
              <Link href={'/come-funziona'}>
                <Button
                  text={t("servicesWhysign_Btn")}
                  color={"black"}
                  backgroundColor={"white"}
                  minWidth={undefined}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vedio;
