import React from 'react';
import xGrey from "../assets/images/icons/icon-x-grey.svg";
import oGrey from "../assets/images/icons/icon-o-grey.svg";
import Button  from "./Button";
import xo from "../assets/images/logo.svg";
import { RefreshCcw } from 'lucide-react';

const ResetButton = ({children,onClick}) => {
  const baseStyles = "border-none text-black cursor-pointer transition-all ease-out duration-200 flex items-center justify-center";

const sizeVariants = " px-7 pb-2 text-[1.2rem] leading-[25.2px] font-bold rounded-[15px]"

const colorVariants =  "bg-[#A8BFC9] shadow-[inset_0px_-8px_0px_#7A8F99] hover:bg-[#D1E3EE] active:translate-y-1 active:shadow-[inset_0px_-6px_0px_#7A8F99]"

  return (
    <button
      className={`${baseStyles} ${colorVariants} ${sizeVariants}  h-16 w-16 m-2`}
      onClick={onClick}
    >
      {children}
    </button>
  );

}

const GameHeader = ({ playerMarkTurn, reset }) => {
    const handleReset = () => {
      reset();
    }
  return (
    <div className="w-full ml-auto flex items-center justify-between ">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <img src={xo} alt="SVG image" />
      </div>

      {/* Turn Indicator */}
      <div className="flex items-center justify-center gap-3 bg-[#1F3641] shadow-[inset_0px_-4px_0px_#10212A] rounded-[10px] h-[52px] w-[140px] px-2.5 pb-1.5">
      <img 
          src={playerMarkTurn === "x" ? xGrey : oGrey} 
          alt={`${playerMarkTurn} mark`} 
          className="w-5 md:w-4"
        />
        <span className="text-[#A8BFC9] font-bold text-base leading-none tracking-[1px] md:text-sm md:leading-[16.64px] md:tracking-[0.88px]">
          TURN
        </span>
      </div>

      <ResetButton variant='grey' size='large' onClick={handleReset} ><RefreshCcw /></ResetButton>
    </div>
  );
};

export default GameHeader;