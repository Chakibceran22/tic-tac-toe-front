import React, { useState } from 'react';
import x from "../assets/images/icons/icon-x-outline.svg";
import o from "../assets/images/icons/icon-o-outline.svg";
import xGreen from "../assets/images/icons/icon-x.svg";
import oYellow from "../assets/images/icons/icon-o.svg";
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

const GameBoard = () => {
  const [currentPlayer, setCurrentPlayer] = useState("x");
  const [cells, setCells] = useState(Array(9).fill(null));

  const handleCellClick = (index) => {
    if (cells[index] !== null) return;
    
    const newCells = [...cells];
    newCells[index] = currentPlayer;
    setCells(newCells);
    setCurrentPlayer(currentPlayer === "x" ? "o" : "x");
  };

  const handleReset = () => {
    setCells(Array(9).fill(null));
    setCurrentPlayer("x");
  };

  return (
    <div className="min-h-screen w-full bg-[#1A2A33] px-4 py-6">
      <div className="w-full max-w-[450px] mx-auto flex flex-col items-center">
        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 place-items-center 
                      w-full my-4">
          {/* Header section */}
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

          <ResetButton onClick={handleReset} />

          {/* Game grid */}
          {Array(9).fill(null).map((_, index) => (
            <div
              key={index}
              className="bg-[#1F3641] rounded-[15px] 
                        shadow-[inset_0px_-8px_0px_#10212A]
                        cursor-pointer relative overflow-hidden
                        transition-all duration-100 ease-out 
                        group w-full aspect-square
                        min-h-[80px] sm:min-h-[100px] md:min-h-[120px]"
            >
              <button 
                className="w-full h-full flex items-center justify-center"
                onClick={() => handleCellClick(index)}
              >
                {cells[index] ? (
                  <img
                    src={cells[index] === "x" ? xGreen : oYellow}
                    alt={`${cells[index]} mark`}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
                  />
                ) : (
                  <img
                    src={currentPlayer === "x" ? x : o}
                    alt="Hover mark"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 
                              opacity-0 transition-opacity duration-200 
                              group-hover:opacity-100"
                  />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameBoard;