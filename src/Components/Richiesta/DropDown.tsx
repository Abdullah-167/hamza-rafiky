import useTranslation from "@/hooks/useTranslation";
import Image from "next/image";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface Props {}

const DropDown: React.FC<Props> = ({}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleDropDownClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const { t } = useTranslation();

  const data = [
    {
      heading: t("subscriptionCategories_FirstSubHeading"),
      para: t("subscriptionCategories_FirstSubHeadingpara"),
      gold: true,
      platinum: true,
      silver: true,
    },
    {
      heading: t("subscriptionCategories_SecSubHeading"),
      para: t("subscriptionCategories_SecSubHeadingpara"),
      gold: true,
      platinum: true,
      silver: true,
    },
    {
      heading: t("subscriptionCategories_ThirdSubHeading"),
      para: t("subscriptionCategories_ThirdSubHeadingpara"),
      gold: true,
      platinum: true,
      silver: true,
    },
    {
      heading: t("subscriptionCategories_ForthSubHeading"),
      para: t("subscriptionCategories_ForthSubHeadingpara"),
      gold: true,
      platinum: true,
      silver: true,
    },
    {
      heading: t("subscriptionCategories_FifthtSubHeading"),
      para: t("subscriptionCategories_FifthSubHeadingpara"),
      gold: true,
      platinum: true,
      silver: true,
    },
    {
      heading: t("subscriptionCategories_SixthSubHeading"),
      para: t("subscriptionCategories_SixthSubHeadingpara"),
      gold: true,
      platinum: true,
      silver: true,
    },
    {
      heading: t("subscriptionCategories_SeventhSubHeading"),
      para: t("subscriptionCategories_SeventhSubHeadingpara"),
      gold: true,
      platinum: true,
      silver: true,
    },
    {
      heading: t("subscriptionCategories_EightSubHeading"),
      para: t("subscriptionCategories_EightSubHeadingpara"),
      gold: true,
      platinum: true,
      silver: true,
    },
    {
      heading: t("subscriptionCategories_NineSubHeading"),
      para: t("subscriptionCategories_NineSubHeadingpara"),
      gold: true,
      platinum: true,
      silver: true,
    },
    {
      heading: t("subscriptionCategories_TenthtSubHeading"),
      para: t("subscriptionCategories_TenthSubHeadingpara"),
      gold: true,
      platinum: true,
      silver: true,
    },
    {
      heading: t("subscriptionCategories_EleventhtSubHeading"),
      para: t("subscriptionCategories_EleventhSubHeadingpara"),
      gold: true,
      platinum: true,
      silver: true,
    },
    {
      heading: t("subscriptionCategories_TwelvelSubHeading"),
      para: t("subscriptionCategories_TwelvelSubHeadingpara"),
      gold: true,
      platinum: true,
      silver: true,
    },
    {
      heading: t("subscriptionCategories_ThirteenSubHeading"),
      para: t("subscriptionCategories_ThirteenSubHeadingpara"),
      gold: true,
      platinum: true,
      silver: true,
    },
    {
      heading: t("subscriptionCategories_FourteenSubHeading"),
      para: t("subscriptionCategories_FourteenSubHeadingpara"),
      gold: true,
      platinum: true,
    },
    {
      heading: t("subscriptionCategories_FifteenSubHeading"),
      para: t("subscriptionCategories_FifteenSubHeadingpara"),
      gold: true,
      platinum: true,
    },
    {
      heading: t("subscriptionCategories_SixteenSubHeading"),
      para: t("subscriptionCategories_SixteenSubHeadingpara"),
      gold: true,
      platinum: true,
    },
    {
      heading: t("subscriptionCategories_SeventeenSubHeading"),
      para: t("subscriptionCategories_SeventeenSubHeadingpara"),
      gold: true,
      platinum: true,
    },
    {
      heading: t("subscriptionCategories_EighteenSubHeading"),
      para: t("subscriptionCategories_EighteenSubHeadingpara"),
      gold: true,
      platinum: true,
    },
    {
      heading: t("subscriptionCategories_NineteenSubHeading"),
      para: t("subscriptionCategories_NineteenSubHeadingpara"),
      gold: true,
      platinum: true,
    },
    {
      heading: t("subscriptionCategories_TwentySubHeading"),
      para: t("subscriptionCategories_TwentySubHeadingpara"),
      gold: true,
      platinum: true,
    },
    {
      heading: t("subscriptionCategories_TwentyoneSubHeading"),
      para: t("subscriptionCategories_TwentyoneSubHeadingpara"),
      platinum: true,
    },
    {
      heading: t("subscriptionCategories_TwentytwoSubHeading"),
      para: t("subscriptionCategories_TwentytwoSubHeadingpara"),
      platinum: true,
    },
    {
      heading: t("subscriptionCategories_TwentythreeSubHeading"),
      para: t("subscriptionCategories_TwentythreeSubHeadingpara"),
      platinum: true,
    },
    {
      heading: t("subscriptionCategories_TwentyfourSubHeading"),
      para: t("subscriptionCategories_TwentyfourSubHeadingpara"),
      platinum: true,
    },
    {
      heading: t("subscriptionCategories_TwentyfiveSubHeading"),
      para: t("subscriptionCategories_TwentyfiveSubHeadingpara"),
      platinum: true,
    },
    {
      heading: t("subscriptionCategories_TwentysixSubHeading"),
      para: t("subscriptionCategories_TwentysixSubHeadingpara"),
      platinum: true,
    },
  ];

  return (
    <div className="pricing-bg container lg:flex hidden">
      <div className="py-32">
        <table className="table-fixed">
          <thead>
            <tr>
              <th className="text-3xl text-left font-medium pb-[70px]">
                Subscription
              </th>
              <th className="text-center text-3xl font-medium pb-[70px] pl-10">
                Platinum
              </th>
              <th className="text-center text-3xl font-medium pb-[70px] pl-32">
                Gold
              </th>
              <th className="text-center text-3xl font-medium pb-[70px] pl-32">
                Silver
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <tr key={index}>
                  <td className="p">
                    <div
                      className="max-w-[500px] cursor-pointer border border-[#d2d2d2] px-4 py-5 my-4"
                      onClick={() => handleDropDownClick(index)}
                    >
                      <div className="flex justify-between items-center">
                        <h2 className="text-[#8B20BB] max-w-[350px] cursor-pointer font-normal text-xl mb-2">
                          {item.heading}
                        </h2>
                        <span
                          className={`text-3xl transition-all  ${
                            activeIndex === index
                              ? "rotate-180 duration-300"
                              : "rotate-[360deg]"
                          } duration-300`}
                        >
                          <IoMdArrowDropdown />
                        </span>
                      </div>
                      <div
                        className={`${
                          isActive
                            ? "max-h-96 duration-700 ease-in-out transition-all opacity-100"
                            : "max-h-0 opacity-0 pointer-events-none duration-700"
                        }`}
                      >
                        <p className="text-[#A8A8A8] py-2 text-[15px]">
                          {item.para}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="pl-10">
                    {item.platinum && (
                      <span className="flex justify-center">
                        <Image
                          loading="lazy"
                          src={"/tick.png"}
                          alt={"Tick"}
                          width={80}
                          height={80}
                        />
                      </span>
                    )}
                  </td>
                  <td className="pl-32">
                    {item.gold && (
                      <span className="flex justify-center">
                        <Image
                          loading="lazy"
                          src={"/tick.png"}
                          alt={"Tick"}
                          width={80}
                          height={80}
                        />
                      </span>
                    )}
                  </td>
                  <td className="pl-32">
                    {item.silver && (
                      <span className="flex justify-center">
                        <Image
                          loading="lazy"
                          src={"/tick.png"}
                          alt={"Tick"}
                          width={80}
                          height={80}
                        />
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DropDown;
