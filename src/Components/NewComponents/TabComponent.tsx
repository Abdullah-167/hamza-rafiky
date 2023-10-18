import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const TabComponent = () => {
  const DataA = [
    {
      id: 1,
      btnHeading: "Click Me",
      mainHeading: "Hello One",
      subHeading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, sit laudantium dolores omnis veritatis ipsum eius reprehenderit inventore voluptatem numquam!",
      img: "/newimg.jpg",
    },
    {
      id: 2,
      btnHeading: "Presentation",
      mainHeading: "Hello Two",
      subHeading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, sit laudantium dolores omnis veritatis ipsum eius reprehenderit inventore voluptatem numquam!",
      img: "/newimg.jpg",
    },
    {
      id: 3,
      btnHeading: "Who We Are",
      mainHeading: "Hello Three",
      subHeading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, sit laudantium dolores omnis veritatis ipsum eius reprehenderit inventore voluptatem numquam!",
      img: "/newimg.jpg",
    },
    {
      id: 4,
      btnHeading: "Our Services",
      mainHeading: "Hello Four",
      subHeading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, sit laudantium dolores omnis veritatis ipsum eius reprehenderit inventore voluptatem numquam!",
      img: "/newimg.jpg",
    },
  ];

  const [activeTab, setActiveTab] = useState(DataA[0].id);

  return (
    <div className={`py-12 px-5`}>
      <div className="max-w-6xl mx-auto relative ">
        <div className="">
          <div className="flex gap-4 justify-center  max-w-[600px] mx-auto lg:max-w-full overflow-x-scroll lg:overflow-auto ">
            {DataA.map((item, index) => {
              return (
                <div key={index}>
                  <div
                    className={`px-6 py-2 mb-14 rounded-full cursor-pointer text-center shadow-lg min-w-[150px] ${
                      activeTab === item.id
                        ? "bg-black"
                        : " bg-transparent text-black"
                    }`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    <p
                      className={` whitespace-nowrap text-sm ${
                        activeTab === item.id ? "text-white" : "text-[#8624e1]"
                      }`}
                    >
                      {item.btnHeading}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="">
            {DataA.map((item, index) => {
              return (
                <div
                  className={`transition-all duration-500 ${
                    activeTab === item.id ? "opacity-100" : "opacity-0"
                  }`}
                  key={index}
                >
                  {activeTab === item.id && (
                    <div
                      className={`flex flex-wrap md:flex-nowrap items-center gap-10 `}
                    >
                      <div>
                        <h2 className="text-3xl font-medium pb-5">
                          {item.mainHeading}
                        </h2>
                        <p className="font-poppins text-lg font-normal leading-8 md:pb-10">
                          {item.subHeading}
                        </p>
                      </div>
                      <Image
                        src={item.img}
                        alt={"card-img"}
                        width={400}
                        height={400}
                      />
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

export default TabComponent;
