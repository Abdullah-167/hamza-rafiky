import useTranslation from "@/hooks/useTranslation";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import Button from "../Button";

const Vedio = () => {
  const { t } = useTranslation();

  const data = [
    {
      heading: t("servicesSimultaneousInterpretation_Heading"),
    },
    {
      para: t("servicesSimultaneousInterpretation_para"),
    },
  ];

  return (
    <div className="vedio-bg">
      <div className="container relative">
        <div className="flex flex-col lg:flex-row gap-16 sm:gap-24 py-20 sm:py-32">
          <div className="w-full flex justify-between items-center h-[300px] sm:h-[600px]">
            <LiteYouTubeEmbed title="rafiky" id="K1xWE4MdmTY" />
          </div>
          <div>
            <div className="mb-10">
              {data.map((item, index) => {
                return (
                  <div className="lg:min-w-[550px]" key={index}>
                    <h2 className="text-[#FCA497] text-[35px] sm:text-[45px] font-bold">
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
              <Button
                text={t("servicesSimultaneousInterpretation_Btn")}
                color={"black"}
                backgroundColor={"white"}
                minWidth={undefined}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vedio;
