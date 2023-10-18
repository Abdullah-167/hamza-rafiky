import Image from "next/image";
import React from "react";
import useTranslation from "@/hooks/useTranslation";


const Speaking = () => {
  const { t } = useTranslation();
  return (
    <section className="container">
      <div className="py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {data.map((item, index) => {
            return (
              <div className="" key={index}>
                <Image
                  className="min-h-[120px] mx-auto flex justify-center pb-4"
                  src={item.img}
                  alt={"images"}
                  width={70}
                  height={70}
                />
                <div>
                  <h3 className="text-2xl sm:text-3xl font-semibold pb-2 text-center">
                    {item.number}
                  </h3>
                  <p className="text-sm sm:text-xl font-medium sm:font-semibold text-center">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Speaking;

const data = [
  {
    img: "/xl.svg",
    number: "100%",
    text: "Customisable platform",
  },
  {
    img: "/x2.svg",
    number: "250",
    text: "4.7/5 Reviews.io",
  },
  {
    img: "/x5.svg",
    number: "2000",
    text: "interpreter with 10+ years experience",
  },
  {
    img: "/x3.svg",
    number: "27001",
    text: "ISO Certified platform",
  },
];
