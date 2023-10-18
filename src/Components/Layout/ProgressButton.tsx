import React, { useState, useEffect } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai';


const ProgressButton = () => {

    const [showButton, setSowButton] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 100) {
            setSowButton(true);
        } else {
            setSowButton(false);
        }
    };
    
    const onHandleScroll = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])


    return (
        <div>
            <button
                className={`${showButton ? 'block' : 'hidden'}
                flex fixed bottom-9 right-8 z-50 bg-[#5412BC] text-white rounded-full w-12 h-12  items-center justify-center focus:outline-none text-center p-[16px]
                `}

                onClick={onHandleScroll}
            >
                <AiOutlineArrowUp />
            </button>
        </div>
    )
}

export default ProgressButton