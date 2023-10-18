import GetLocale from "@/hooks/getLocale";
import useTranslation from "@/hooks/useTranslation";
import axios from "axios";
import { useRouter } from "next-translate-routes/router";
import Slider from "rc-slider";
import React, { useState } from "react";
import BgImage from "../../../public/frame3.webp";
import Button from "../Button";
interface FormData {
  [key: string]: string;
}
const Hero = () => {
  const { t } = useTranslation();
  const locale = GetLocale();
  const router = useRouter();

  const slug =
    locale === "en"
      ? "/en/thank-you-en"
      : locale === "de" 
        ? "/de/thank-you-de"
      : locale === "fr"
          ? "/fr/thank-you-fr"
      : locale === "it"
            ? "/thank-you-it"
      : "/en/thank-you-en";

  const [interpreters, setInterpreters] = useState(false);
  const [next, setNext] = useState(false);

  const [data, setData] = useState([
    {
      text: t("estimateRates_RangeOne"),
      min: 0,
      max: 50,
      value: 0,
    },
    {
      text: t("estimateRates_RangeTwo"),
      min: 0,
      max: 500,
      value: 0,
    },
    {
      text: t("estimateRates_RangeThree"),
      min: 0,
      max: 20,
      value: 0,
    },
  ]);

  const [formData, setFormData] = useState<FormData>({
    "your-name": "",
    "your-email": "",
    "company-name": "",
    "phone-number": "",
    "event-date": "",
    "event-time": "",
    hours: "0",
    competitors: "0",
    languages: "0",
    interpreters: interpreters ? "yes" : "no",
    "your-subject": "Demo Request",
    "your-message": "We will contact you ASAP.",
  });

  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = () => {
    if (Object.values(formData).some((value) => value === "")) {
      setAlertMessage("Please Fill All The Blank Fields");
    } else {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      formDataToSend.set("hours", String(data[0].value));
      formDataToSend.set("competitors", String(data[1].value));
      formDataToSend.set("languages", String(data[2].value));
      axios
        .post(
          "https://manuelm83.sg-host.com/wp-json/contact-form-7/v1/contact-forms/22011/feedback",
          formDataToSend
        )
        .then(() => {
          setFormData({
            "your-name": "",
            "your-email": "",
            "company-name": "",
            "phone-number": "",
            "event-date": "",
            "event-time": "",
            hours: "",
            competitors: "",
            languages: "",
            interpreters: "",
            "your-subject": "",
            "your-message": "",
          });
          setAlertMessage("Data Submitted Successfully");
          router.push(slug);
        })
        .catch((error) => {
          console.error(error);
          setAlertMessage("Failed to submit data");
        });
    }
  
    setTimeout(() => {
      setAlertMessage("");
    }, 3000);
  };
  

  const handleSliderChange = (index: number, newValue: number) => {
    const updatedData = [...data];
    updatedData[index].value = newValue;
    setData(updatedData);
  };
  const formFields = [
    {
      name: "your-name",
      label: t("homeForm_name"),
      type: "text",
    },
    {
      name: "your-email",
      label: t("homeForm_email"),
      type: "email",
    },
    {
      name: "company-name",
      label: t("homeForm_company"),
      type: "text",
    },
    {
      name: "phone-number",
      label: t("homeForm_telephone"),
      type: "text",
    },
    {
      name: "event-date",
      label: t("homeForm_firstevent"),
      type: "date",
    },
    {
      name: "event-time",
      label: t("homeForm_secevent"),
      type: "time",
    },
  ];

  return (
    <div
      className="main-cpmBg mb-20 py-20"
      style={{
        backgroundImage: `url(${BgImage.src})`,
      }}
    >
      <div className="container relative">
        <div className="pb-14">
          <div>
            <h1 className="text-3xl sm:text-6xl md:text-[79px] text-white font-bold mx-auto max-w-[1060px] text-center leading-[1.2em] pb-5 sm:pb-12">
              {t("estimateRates_Heading")}
            </h1>
            <p className="text-base sm:text-[26px] font-medium text-white text-center max-w-[800px] mx-auto leading-10 pb-10">
              {t("estimateRates_para")}
            </p>
          </div>
        </div>

        <div className=" bg-white px-8 py-10 rounded-lg max-w-[1080px] mx-auto  shadow-2xl w-full ">
          {data.map((item, index) => (
            <div
              className="flex flex-col w-full md:flex-row md:items-center gap-5 md:gap-10 py-5"
              key={index}
            >
              <label className="min-w-[200px]">{item.text}</label>

              <div className="w-full">
                <div className="slider-value flex justify-end mb-2 text-base font-medium">
                  {item.value}
                </div>
                <Slider
                  min={item.min}
                  max={item.max}
                  value={item.value}
                  step={1}
                  onChange={(newValue) =>
                    handleSliderChange(index, newValue as any)
                  }
                  railStyle={{
                    height: 8,
                  }}
                  handleStyle={{
                    height: 20,
                    width: 20,
                    marginLeft: -8,
                    marginTop: -6,
                    backgroundColor: "#5412BC",
                    border: 0,
                  }}
                  trackStyle={{
                    background: "#5412BC",
                    height: 8,
                  }}
                />
              </div>
            </div>
          ))}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 py-5">
            <span className="min-w-[200px]">
              {t("estimateRates_BtnHeading")}
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                onChange={() => setInterpreters(!interpreters)}
                className="sr-only peer"
              />
              <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white peer-checked:after:bg-[#5d21d0] after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 "></div>
            </label>
          </div>
          <div className="flex sm:justify-end">
            <button
              onClick={() => setNext(true)}
              className="border-[#5d21d0] text-[#5d21d0] w-full sm:w-auto border-[2px] px-6 py-2 rounded-[50px] font-semibold text-xl"
            >
              {t("estimateRates_Btn")}
            </button>
          </div>
          {next && (
            <div className="bg-white">
              <div className=" py-5">
                <div className="bg-white  p-6 relative mx-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-3">
                    {formFields.map((field) => (
                      <div key={field.name}>
                        <label
                          className="block text-gray-800 mb-1"
                          htmlFor={field.name}
                        >
                          {field.label}
                        </label>
                        <input
                          className="border border-gray-300 py-3 px-4 w-full focus:outline-none rounded-md"
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleInputChange}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center mt-10" onClick={onSubmit}>
                    <Button
                      text={t("newReality_Btn")}
                      color={"white"}
                      backgroundColor={"#5412BC"}
                      minWidth={"230px"}
                    />
                  </div>
                  {alertMessage && (
                    <div
                      className={`ml-2 absolute bottom-24 md:bottom-20 ${
                        alertMessage === "Data Submitted Successfully"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {alertMessage}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
