import Button from "../Button";
import useTranslation from "@/hooks/useTranslation";
import { freeQuoteSlug } from "@/utils";
import GetLocale from "@/hooks/getLocale";
import Link from "next-translate-routes/link";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

const HeroMob = () => {
  const { t } = useTranslation();
  const locale = GetLocale();
  //@ts-ignore
  const slug = `/${locale}/${freeQuoteSlug[locale]}`;
  return (
    <div className="container">
      <div className="flex justify-between flex-col-reverse lg:flex-row  flex-wrap lg:flex-nowrap gap-10 sm:gap-20 items-center py-12 sm:py-24 px-5">
        <div className="max-w-[434px] sm:pr-10">
          <h2 className="text-3xl sm:text-5xl text-[#333333] font-semibold pb-5">
            {t("whatRafiky_Headign")}
          </h2>
          <div>
            <p className="text-base sm:text-lg text-[#666666] font-medium py-3 sm:py-4">
              {" "}
              {t("whatRafiky_para")}
            </p>
          </div>
          <div className="my-7">
            <Link href={slug}>
              <Button
                text={t("whatRafiky_Btn")}
                color={"white"}
                backgroundColor={"#8624E1"}
                minWidth={undefined}
              />
            </Link>
          </div>
        </div>
        <div className="w-full">
          <LiteYouTubeEmbed
            id="K1xWE4MdmTY"
            title='rafiky'
          />
        </div>
      </div>
    </div>
  );
};

export default HeroMob;
