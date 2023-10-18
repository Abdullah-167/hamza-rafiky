import useTranslation from "@/hooks/useTranslation";
import elipses from "@/utils/elipses";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewLogo from "../../../public/reviewsio-logo.svg";
import { data } from "./CustomerReviewStatic";
import Modal from "./Modal";

const CustomerReview = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();
    const openModal = () => {
        setIsOpen(true);
    };
    return (
        <div className=" bg-gray-50 py-20">
            <div className="pt-10 container">
                <h2 className=" sm:text-[45px] text-[#333333]  font-bold text-center pb-8  client-heading">
                    <span>{t("weLove")}</span>&nbsp;
                    <span className="text-[#5518BB]">{t("ourClient")}</span>
                </h2>
                <div className="flex justify-center items-center ">
                    <div className="flex items-center ">
                        <b>Excellent</b>&nbsp;
                        <FontAwesomeIcon icon={faStar} className="review-icon-width" />
                        <FontAwesomeIcon icon={faStar} className="review-icon-width" />
                        <FontAwesomeIcon icon={faStar} className="review-icon-width" />
                        <FontAwesomeIcon icon={faStar} className="review-icon-width" />
                        &nbsp;<b>4.66</b> &nbsp;based on &nbsp;<b>254</b>&nbsp; reviews
                    </div>
                </div>
                <Swiper
                    modules={[Autoplay, Navigation]}
                    slidesPerView={3}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2000,
                    }}
                    navigation
                    rewind={true}
                    breakpoints={{
                        767: {
                            slidesPerView: 3,
                        },
                        540: {
                            slidesPerView: 2,
                        },
                        280: {
                            slidesPerView: 1,
                        },
                    }}
                    className="w-full"
                >
                    {data?.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className="container slide-container">
                                
                                <div className="cursor-pointer" onClick={openModal}>
                                    <div className="py-2.5 flex items-center ">
                                        <div className="authorName text-sm">
                                            {item.authorName}&nbsp;
                                        </div>
                                        <div>{item.star}</div>
                                        <div>{item.star}</div>
                                        <div>{item.star}</div>
                                        <div>{item.star}</div>
                                        <div>{item.star}</div>
                                    </div>
                                    <div className="text-sm w-64">
                                        {elipses(item.reviewText, 50)}
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
            <div className="container flex justify-end">
                <a
                    href="https://www.reviews.io/company-reviews/store/www.lingoyou.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src={ReviewLogo}
                        alt="REVIEWS.io Logo"
                        width="120"
                        height="19"
                    />
                </a>
            </div>
            {isOpen && (
                <Modal
                    modalHeading="Review"
                    modalText="Lavorare con questa azienda è stata veramente un’esperienza fantastica. Precisi, puntuali, efficienti! Cosa volere di più?"
                    setIsOpen={setIsOpen}
                />
            )}
        </div>
    );
};
export default CustomerReview;
