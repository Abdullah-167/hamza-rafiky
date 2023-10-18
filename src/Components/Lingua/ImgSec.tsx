import Image from "next/image";
import useTranslation from "@/hooks/useTranslation";
import { Link } from "next-translate-routes";
import Button from "../Button";

const ImgSec = () => {

  const { t } = useTranslation();

  const data = [
    {
      heading: t("servicesAdvantages_HeadingDouble2"),
    },
    {
      para: t("servicesAdvantages_paraDouble2"),
    },
  ];

  return (
    <div className="container relative">
      
      <div className="flex flex-col lg:flex-row gap-16 sm:gap-12 py-20 sm:py-32">
      <div className="min-w-full lg:min-w-[700px] flex justify-between items-center">
          <Image
          className="rounded-3xl"
            loading="lazy"
            src={"/sign-lang-interpreter.jpg"}
            alt={t("alt_img_advantages")}
            width={1000}
            height={0}
          />
        </div>
        <div>
          <div className="mb-10">
            {data.map((item, index) => {
              return (
                <div className="lg:max-w-[550px]" key={index}>
                  <h2 className="text-[#8300e9] text-[35px] sm:text-[45px] font-bold">
                    {item.heading}
                  </h2>
                  <p className="text-base font-medium text-black pbF-4 lg:max-w-[750px] py-3 leading-9">
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
                color={"white"}
                backgroundColor={"#8300e9"}
                minWidth={undefined}
              />
            </Link>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default ImgSec;
