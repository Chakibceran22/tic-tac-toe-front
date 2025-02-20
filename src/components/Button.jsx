import React from "react";

const Button = ({ children, variant = "orange", size = "medium", onClick }) => {
  const baseStyles =
    "border-none text-black cursor-pointer transition-all ease-out duration-200 flex items-center justify-center";

  const sizeVariants = {
    small: "h-[40px] px-4 text-sm rounded-[10px]",
    medium: "h-[50px] px-5 text-base rounded-[12px]",
    large: "h-[67px] px-7 pb-2 text-[1.2rem] leading-[25.2px] font-bold rounded-[15px]",
  };

  const colorVariants = {
    orange: "bg-[#F2B137] shadow-[inset_0px_-8px_0px_#CC8B13] hover:bg-[#FFC860] active:translate-y-1 active:shadow-[inset_0px_-6px_0px_#CC8B13]",
    green: "bg-[#31C3BD] shadow-[inset_0px_-8px_0px_#118C87] hover:bg-[#65E9E4] active:translate-y-1 active:shadow-[inset_0px_-6px_0px_#118C87]",
    grey: "bg-[#A8BFC9] shadow-[inset_0px_-8px_0px_#7A8F99] hover:bg-[#D1E3EE] active:translate-y-1 active:shadow-[inset_0px_-6px_0px_#7A8F99]",
  };

  return (
    <button
      className={`${baseStyles} ${colorVariants[variant]} ${sizeVariants[size]}  w-auto min-w-[30%] m-2`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
