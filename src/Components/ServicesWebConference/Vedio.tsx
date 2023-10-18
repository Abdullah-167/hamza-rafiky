import useTranslation from "@/hooks/useTranslation";
import { Link } from "next-translate-routes";
import Image from "next/image";
import lockUpMobile from "../../../public/lockup-mobile.png";
import Button from "../Button";

const Vedio = () => {
  const { t } = useTranslation();

  const data = [
    {
      heading: t("servicesWebConference_Heading"),
    },
    {
      para: t("servicesWebConference_para"),
    },
  ];

  return (
    <div className="vedio-bg">
      <div className="container relative">
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row  justify-between items-center py-20 ">
          <div>
            {/* <LiteYouTubeEmbed title='rafiky' id="K1xWE4MdmTY" /> */}
            <Image loading="lazy" src={lockUpMobile} alt={t("alt_img_advantages")} />
            {/* <LiteYouTubeEmbed title='rafiky' id="K1xWE4MdmTY" /> */}
          </div>
          <div>
            <div className="mb-10">
              {data.map((item, index) => {
                return (
                  <div className="lg:min-w-[550px]" key={index}>
                    <h3 className="text-[#FCA497] text-[35px] sm:text-[45px] font-bold">
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
              <Link href={'/come-funziona'} >
                <Button
                  text={t("servicesWebConference_Btn")}
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
