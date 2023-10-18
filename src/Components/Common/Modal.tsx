import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
type ModalProps = {
    setIsOpen: (isOpen: boolean) => void;
    modalHeading: string;
    modalText: string;
};
const Modal: React.FC<ModalProps> = ({
    setIsOpen,
    modalHeading,
    modalText,
}) => {
    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
            <div className="fixed inset-0 bg-black opacity-40"></div>
            <div className="relative bg-white p-8">
                <button
                    className="absolute -top-2.5 -right-1.5 m-4 text-2xl"
                    onClick={closeModal}
                >
                    X
                </button>
                <div>
                    <h3 className="text-sm font-semibold my-2.5">{modalHeading}</h3>
                    <p className="text-sm max-w-lg max-h-64 overflow-auto">{modalText}</p>
                    <div className="text-xs mt-5 ">
                        <span className="font-bold">Was this review helpful?</span>
                        &nbsp;&nbsp;
                        <span className="underline font-semibold cursor-pointer">Yes</span>
                        &nbsp;&nbsp;
                        <span className="underline font-semibold cursor-pointer">No</span>
                    </div>
                    <div className="divder mt-5"></div>
                    <div className="flex justify-center items-center mt-5">
                        <FontAwesomeIcon
                            icon={faTwitter}
                            className="mr-5 w-3.5 cursor-pointer"
                        />
                        <FontAwesomeIcon
                            icon={faFacebookF}
                            className="mr-5 h-3.5 cursor-pointer"
                        />
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            className="mr-5 w-3.5 cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Modal;