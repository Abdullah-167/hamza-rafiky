import React, { useState } from 'react';

interface DropDownProps {
    showDropDown: boolean;
}

const DropDown: React.FC<DropDownProps> = ({ showDropDown }) => {
    const [isDropDownShown, setIsDropDownShown] = useState(showDropDown);

    const handleDropDownClick = () => {
        setIsDropDownShown(!isDropDownShown);
    };

    return (
        <div>
            <div
                className={`thomas-bg max-w-[230px] mx-auto absolute bottom-4 flex justify-between items-center w-full gap-2 py-2 px-3 cursor-pointer  text-[#445C6D] ${showDropDown ? "rounded-b-2xl" : "rounded-2xl"
                    }`}
                onClick={() => handleDropDownClick()}
            >
                {/* <div>
                    <Image loading="lazy" src="thomas.svg" alt="thomas" width={40} height={0} />
                </div> */}
                <div>
                    <h6 className="text-[16px] leading-3 pt-2 pb-1">Thomas M.</h6>
                    <span className="text-sm">@ thomas</span>
                </div>
                <span className="text-4xl">
                    <span
                        className={`${showDropDown ? "rotate" : "rotate2"}`}
                    />
                </span>
            </div>
            <div >
                {showDropDown && (
                    <div className="bg-bgprimary absolute bottom-[81px] left-1/2 transform -translate-x-1/2  w-[230px] rounded-t-2xl transition-all duration-1000">
                        <ul className="py-2">
                            <li
                                className={`px-4 py-2 hover:bg-gray-100 ${showDropDown ? "text-[#445C6D]" : ""
                                    }`}
                            >
                                <a className="block" href="#">
                                    Profile
                                </a>
                            </li>
                            <li
                                className={`px-4 py-2 hover:bg-gray-100 ${showDropDown ? "text-[#445C6D]" : ""
                                    }`}
                            >
                                <a className="block" href="#">
                                    Log In
                                </a>
                            </li>{" "}
                            <li
                                className={`px-4 py-2 hover:bg-gray-100 ${showDropDown ? "text-[#445C6D]" : ""
                                    }`}
                            >
                                <a className="block" href="#">
                                    Sign Up
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default DropDown

// const data = [
//     {
//         heading: 'Piattaforma compatibile con tutti i dispositivi',
//         para: 'Compatibilità con i dispositivi (smartphone / tablet) più diffusi',
//         img: '/tick.png'
//     }
// ]