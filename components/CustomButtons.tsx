
"use client";
import { CustomButtonsProps } from "@/types";
import Image from "next/image";
const CustomButtons = ({title, containerStyles, handleClick, btnType, textStyles, rightIcon}: CustomButtonsProps) => {
  return (
    <button
    disabled={false}
    type={ btnType|| "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>
            {title}
        </span>
        {rightIcon && (
          <div className="relative w-6 h-6">
            <Image
            src={rightIcon}
            alt='right icon'
            fill
            className="object-contain"
            
              />
          </div>
        )}
    </button>
    
  )
}

export default CustomButtons