import { useEffect } from "react";
import GetLocale from "@/hooks/getLocale";
import useTranslation from "@/hooks/useTranslation";


const Appointment = () => {
    const { t } = useTranslation();
    const locale = GetLocale();
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <h2 className="text-center pt-20 pb-5 text-black text-4xl font-semibold">
        {t("appointment_title")}
      </h2>
    
      <div
        className="meetings-iframe-container"
        data-src="https://meetings-eu1.hubspot.com/chiara-moschitta?embed=true">
        </div>
    </>
  );
};

export default Appointment;
