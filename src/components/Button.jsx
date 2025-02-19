import React from "react";

const Button = ({ children, variant = "orange", size = "medium", onClick }) => {
    const baseStyles =
    "border-none text-black cursor-pointer transition-all ease-out duration-200  w-auto min-w-[30%] flex items-center  justify-center";
  
  const sizeVariants = {
    large:
      "  h-[67px] px-7 pb-2 rounded-[15px] text-[1.2rem] leading-[25.2px] m-3  font-bold ",
    
  };
  const colorVariants = {
    orange:
      "bg-[#F2B137] shadow-[inset_0px_-8px_0px_#CC8B13] hover:bg-[#FFC860] hover:bg-[#FFC860] active:translate-y-1 active:shadow-[inset_0px_-6px_0px_#CC8B13]",
    green:
"bg-[#31C3BD] shadow-[inset_0px_-8px_0px_#118C87] hover:bg-[#65E9E4] active:translate-y-1 active:shadow-[inset_0px_-6px_0px_#118C87]"
  };



  return (
    <button
      className={`${baseStyles} ${colorVariants[variant]} ${sizeVariants[size]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
