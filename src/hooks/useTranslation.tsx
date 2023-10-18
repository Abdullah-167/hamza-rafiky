import { useRouter } from "next/router";
import { en } from "../../public/static/en";
import { de } from "../../public/static/de";
import { it } from "../../public/static/it";
import { fr } from "../../public/static/fr";

type Translation = typeof en;

const TRANSLATIONS: Record<string, Translation> = { en, de, fr, it };

type UseTranslation = {
  t: <T extends keyof Translation>(keyString: T) => Translation[T];
  locale?: string;
  setLocale: (locale: string) => void;
};

export default function useTranslation(): UseTranslation {
  const router = useRouter();
  const { locale = "it", asPath } = router;

  const setLocale = (locale: string) => router.push(asPath, asPath, { locale });

  const t = <T extends keyof Translation>(keyString: T): Translation[T] =>
    TRANSLATIONS[locale][keyString];

  return { t, locale, setLocale };
}
