import Image from "next/image";

import useTranslation from "@/hooks/useTranslation";
import { Link } from "next-translate-routes";
import lockUpMobile from "../../../public/lockup-mobile.png";
import Button from "../Button";

const Vedio = () => {
  const { t } = useTranslation();

  const data = [
    {
      heading: t("servicesAdvantages_Heading"),
    },
    {
      para: t("servicesAdvantages_para"),
    },
  ];

  return (
    <div className="vedio-bg">
      <div className="container relative">
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row  justify-between items-center py-20 ">
          <div>
            <Image className=" -rotate-[30deg]"  src={lockUpMobile} alt={t("alt_img_advantages")} />
          </div>
          <div>
            <div className="mb-10">
              {data.map((item, index) => {
                return (
                  <div className="lg:min-w-[550px]" key={index}>
                    <h3 className=" text-white text-[35px] sm:text-[45px] font-bold">
                      {item.heading}
                    </h3>
                    <p className="text-base font-medium text-white pbF-4 lg:max-w-[750px] py-3 leading-9">
                      {item.para}
                    </p>
                  </div>
                );
              })}
            </div>
            <div>
              <Link href={'/richiesta-preventivo'}>
                <Button
                  text={t("servicesAdvantages_Btn")}
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
