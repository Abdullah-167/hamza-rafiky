import React, { useState } from "react";
import useTranslation from "@/hooks/useTranslation";
import Link from 'next/link';


const FaqSection = ({ id = 0 }: { id: number }) => {
  const { t } = useTranslation();
  const DataA = [
    {
      id: 4,
      btnHeading: t("technicalEquipment_Title"),
      mainHeading: t("technicalEquipment_FirstSubTitle"),
      subHeading: t("technicalEquipment_FirstSubTitlepara"),
      heading: t("technicalEquipment_SecSubTitle"),
      para: t("technicalEquipment_SecSubTitlepara"),
    },
    {
      id: 5,
      btnHeading: t("internetWifi_FirstSubTitle"),
      mainHeading: t("internetWifi_FirstSubTitle"),
      subHeading: t("internetWifi_FirstSubTitlepara"),
      heading: t("internetWifi_SecSubTitle"),
      para: t("internetWifi_SecSubTitlepara"),
    },
    {
      id: 6,
      btnHeading: t("capacityFeatures_FirstSubTitle"),
      mainHeading: t("capacityFeatures_FirstSubTitle"),
      subHeading: t("capacityFeatures_FirstSubTitlepara"),
      heading: t("capacityFeatures_SecSubTitle"),
      para: t("capacityFeatures_SecSubTitlepara"),
    },
  ];
  const DataB = t("faqApp");
  
  const data = [...DataA, ...DataB];
  const [activeTab, setActiveTab] = useState(id);

  return (
    <div className={`py-12 sm:py-32 px-5`}>
      <div className="max-w-6xl mx-auto relative ">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          <div className="md:col-span-2 flex flex-row md:flex-col overflow-auto md:overflow-hidden gap-4 ">
            {data.map((item, index) => {
              return (
                <div key={index}>
                  <div
                    className={`px-1 py-4 md:py-6 cursor-pointer min-w-[230px] text-center rounded-md shadow-lg ${activeTab === item.id ? "bg-[#6CC1D7]" : "bg-[#F5F5F5]"
                      }`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    <h2
                      className={` text-sm md:text-xl ${activeTab === item.id ? "text-white" : "text-indigo-700"
                        }`}
                    >
                      <Link href={`/faq/${item.btnHeading.toLowerCase().replaceAll(" ", "-")}`}> {item.btnHeading}</Link>
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="md:col-span-4">
            {data.map((item, index) => {
              return (
                <div key={index}>
                  {activeTab === item.id && (
                    <div>
                      <div className="">
                        <h2 className="text-3xl font-medium pb-5">
                          {item.mainHeading}
                        </h2>
                        <p className="text-lg font-normal leading-8 pb-10">
                          {item.subHeading}
                        </p>
                        <h2 className="text-3xl font-medium pb-5">
                          {item.heading}
                        </h2>
                        <p className="text-lg font-normal leading-8">
                          {item.para}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
