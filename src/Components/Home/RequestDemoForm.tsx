import GetLocale from "@/hooks/getLocale";
import useTranslation from "@/hooks/useTranslation";
import axios from "axios";
import { useRouter } from "next-translate-routes/router";
import React, { useState } from "react";
import PinkBg from "../../../public/pink.png";
import Button from "../Button";
interface FormData {
  [key: string]: string;
}

const RequestDemoForm = () => {
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
      
  const [formData, setFormData] = useState<FormData>({
    "your-name": "",
    "your-email": "",
    "company-name": "",
    "phone-number": "",
    "event-date": "",
    "event-time": "",
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

      axios
        .post(
          "https://manuelm83.sg-host.com/wp-json/contact-form-7/v1/contact-forms/22010/feedback",
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

  const { t } = useTranslation();

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
      className="vedio-bg"
      id={t("reuqest_demo_link")}
      style={{
        backgroundImage: `url(${PinkBg.src})`,
      }}
    >
      <div className="max-w-[800px] mx-auto pb-20">
        <h2 className="text-4xl font-bold mb-12 text-white text-center">
          {t("homeForm_heading")}
        </h2>
        <div className="bg-white shadow-2xl rounded-lg p-6 relative mx-5">
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
              text={t("reuqestDemo")}
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
  );
};

export default RequestDemoForm;
