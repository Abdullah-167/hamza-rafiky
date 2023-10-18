import React, { FC } from 'react';

interface ButtonProps {
  text: string;
  color: string;
  backgroundColor: string;
  minWidth: any;
}

const Button: FC<ButtonProps> = ({ text, color, backgroundColor, minWidth }) => {
  return (
    <div>
      <div className='justify-center'>
        <button
          style={{
            color: color,
            backgroundColor: backgroundColor,
            minWidth: minWidth,
          }}
          className={`minWidth-btn flex gap-3 justify-center items-center text-sm font-semibold rounded-full py-5 px-6 sm:px-10 tracking-[1px] uppercase transform hover:shadow-lg transition-shadow duration-300` }
        >
          {text}
        </button>
      </div>
    </div>
  )
}

export default Button;
