import React from 'react';
import xGrey from "../assets/images/icons/icon-x-grey.svg";
import oGrey from "../assets/images/icons/icon-o-grey.svg";
import xo from "../assets/images/logo.svg";
import { RefreshCcw } from 'lucide-react';

const ResetButton = ({ onClick }) => (
  <button
    className="border-none text-black cursor-pointer transition-all ease-out duration-200 
               grid place-items-center translate-y-1 bg-[#A8BFC9] 
               shadow-[inset_0px_-8px_0px_#7A8F99] hover:bg-[#D1E3EE] 
               active:translate-y-1 active:shadow-[inset_0px_-6px_0px_#7A8F99] 
               text-[1.2rem] leading-[25.2px] font-bold rounded-[15px] 
               h-12 w-12 sm:h-14 sm:w-14 m-2 p-0"
    onClick={onClick}
  >
    <RefreshCcw className="h-6 w-6" />
  </button>
);

const GameHeader = ({ currentPlayer, handleReset}) => {
  
  return (
    <>
      <div className="flex items-center">
        <img src={xo} alt="Game logo" className="h-6 sm:h-8 w-auto" />
      </div>

      {/* Turn indicator */}
      <div className="flex items-center justify-center gap-2 
                           bg-[#1F3641] shadow-[inset_0px_-4px_0px_#10212A] 
                           rounded-[10px] h-10 sm:h-12
                           w-28 sm:w-32 px-2">
        <img
          src={currentPlayer === "x" ? xGrey : oGrey}
          alt={`${currentPlayer} mark`}
          className="w-4 sm:w-5"
        />
        <span className="text-[#A8BFC9] font-bold text-sm tracking-[1px]">
          TURN
        </span>
      </div>

      <ResetButton onClick={handleReset} /></>
  );
};

export default GameHeader;