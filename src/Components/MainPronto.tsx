// import React from "react";
// import Button from "./Button";
// import { FaFacebookF } from "react-icons/fa";
// import { AiOutlineTwitter } from "react-icons/ai";
// import { GrLinkedinOption } from "react-icons/gr";
// import { IoLogoInstagram } from "react-icons/io5";
// import { BsYoutube } from "react-icons/bs";
// import useTranslation from "@/hooks/useTranslation";
// import GetLocale from "@/hooks/getLocale";
// import Link from "next-translate-routes/link";
// import { freeQuoteSlug } from "@/utils";

// interface ProntoProps {
//   path: any;
//   heading: string;
//   btnText: string;
//   secHeading: string;
// }

// const MainPronto: React.FC<ProntoProps> = ({
//   path,
//   heading,
//   btnText,
//   secHeading,
// }) => {
//   const { t } = useTranslation();
//   const locale = GetLocale();
//   const slug = `/${locale}/${freeQuoteSlug[locale]}`;

//   const iconData = [
//     { url: "facebook-url", icon: <FaFacebookF /> },
//     { url: "twitter-url", icon: <AiOutlineTwitter /> },
//     { url: "linkedin-url", icon: <GrLinkedinOption /> },
//     { url: "instagram-url", icon: <IoLogoInstagram /> },
//     { url: "youtube-url", icon: <BsYoutube /> },
//   ];

//   return (
//     <div
//       className="main-cpmBg py-10 sm:py-28"
//       style={{
//         backgroundImage: `url(${path.src})`,
//       }}
//     >
//       <div className="container">
//         <div>
//           <div>
//             <h5 className="text-xl sm:text-2xl text-secondary font-bold text-center">
//               {heading}
//               {t("homeReady_Heading")}
//             </h5>
//             <h2 className="text-[30px] sm:text-[50px] text-white font-bold max-w-[780px] text-center mx-auto pb-8 sm:leading-[60px]">
//               {secHeading}
//             </h2>
//           </div>
//           <Link href={slug}>
//             <div className="flex justify-center">
//               <Button
//                 text={btnText}
//                 color={"#6A1ACC"}
//                 backgroundColor={"white"}
//                 minWidth={""}
//               />
//             </div>
//           </Link>
//         </div>
//         <div className="flex justify-center gap-5 items-center">
//           {iconData.map((item, index) => {
//             return (
//               <a
//                 key={index}
//                 href={item.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-[#F3E9FD] text-[#6A1ACC] font-bold text-xl w-12 h-12 rounded-full p-3 flex justify-center items-center cursor-pointer mt-14"
//               >
//                 {item.icon}
//               </a>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainPronto;
