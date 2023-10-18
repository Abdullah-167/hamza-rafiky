import Link from "next-translate-routes/link";
import { useRouter } from "next-translate-routes/router";
import Image from "next/image";
import { useState } from "react";

const FlagSelect = () => {
  const router = useRouter();
  const { pathname, locale } = router;
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownClose = () => {
    setIsOpen(false);
  };
  function removeLocalePrefix(path: any) {
    const prefix = `/${locale}`;
    return path.startsWith(prefix) ? path.substr(prefix.length) : path;
  }

  return (
    <div className="relative">
      <button
        className="flex min-w-[82px] items-center bg-white border border-[#C9C9C9] rounded-sm px-4 py-2 hover:bg-[#C9C9C9] focus:outline-none"
        onClick={handleDropdownToggle}
      >
        {flags.map((item, index) => {
          if (item.name.toLocaleLowerCase() === locale) {
            return (
              <Image
                loading="lazy"
                alt={locale || ""}
                src={item?.icon}
                width={20}
                height={20}
                key={index}
              />
            );
          }
        })}

        <span className="ml-2 text-[#6f6f6f] font-medium uppercase">
          {locale}
        </span>
      </button>
      {isOpen && (
        <ul className="absolute z-[1000] top-full left-0 bg-white border border-[#C9C9C9] rounded-sm mt-1">
          {flags?.map((item) => {
            const localeCode = item.name.toLowerCase();
            const newPathname = `/${localeCode}${removeLocalePrefix(pathname)}`;

            return (
              <li
                key={localeCode}
                onClick={handleDropdownClose}
                className="cursor-pointer hover:bg-[#C9C9C9]"
              >
                <Link href={newPathname} locale={localeCode} passHref>
                  <div className="flex items-center px-4 py-2">
                    <Image
                      loading="lazy"
                      alt={item.title}
                      src={item.icon}
                      width={20}
                      height={20}
                    />
                    <span className="ml-2 text-[#6f6f6f] font-medium">
                      {item.name}
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default FlagSelect;

const flags = [
  {
    title: "United Kingdom",
    name: "EN",
    icon: "/flag-icons/gb.svg",
  },
  {
    title: "French",
    name: "FR",
    icon: "/flag-icons/fr.svg",
  },
  {
    title: "Germany",
    name: "DE",
    icon: "/flag-icons/de.svg",
  },
  {
    title: "Italian",
    name: "IT",
    icon: "/flag-icons/it.svg",
  },
];
