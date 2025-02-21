import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import x from "../assets/images/icons/icon-x-grey.svg";
import o from "../assets/images/icons/icon-o-grey.svg";
import xGreen from "../assets/images/icons/icon-x-black.svg";
import oGreen from "../assets/images/icons/icon-o-black.svg";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import {motion } from "framer-motion";
const GameMenu = () => {
  
  const navigate = useNavigate();
  const [ playerChoice, setPlayerChoice ] = useState("x");
  const handlePlayCPU = () => {
    console.log("to go agaist cpu")
    sessionStorage.setItem("playerChoice", playerChoice);
    navigate("/game");

  }
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center px-4">
      <img src={logo} alt="SVG Logo" className="w-[80px] md:w-[100px]" />

      <div className="w-full max-w-[400px] bg-[#253B48] shadow-[inset_0px_-8px_0px_#10212A] rounded-[15px] p-6 mt-6 text-center">
        <h1 className="text-base md:text-lg font-bold text-[#A8BFC9] mb-4">
          PICK PLAYER 1’S MARK
        </h1>

        <div className="flex items-center justify-center bg-[#1F3641] rounded-[10px] p-1">
          <div
            className={`flex items-center justify-center m-1 w-[50%] h-[50px] rounded-[10px] cursor-pointer transition-all duration-200 ${
              playerChoice === "x" ? "bg-[#DBE8ED]" : "bg-transparent"
            }`}
            onClick={() => setPlayerChoice("x")}
          >
            <img src={playerChoice === "x" ? xGreen : x} alt="X Mark" className="w-[28px] md:w-[32px]" />
          </div>

          <div
            className={`flex items-center justify-center m-1 w-[50%] h-[50px] rounded-[10px] cursor-pointer transition-all duration-200 ${
              playerChoice === "o" ? "bg-[#DBE8ED]" : "bg-transparent"
            }`}
            onClick={() => setPlayerChoice("o")}
          >
            <img src={playerChoice === "o" ? oGreen : o} alt="O Mark" className="w-[28px] md:w-[32px]" />
          </div>
        </div>

        <label className="block text-sm md:text-base font-bold text-[#A8BFC9] mt-4">
          REMEMBER: X GOES FIRST
        </label>
      </div>

      <div className="grid gap-4 mt-6 w-full max-w-[400px]">
        <Button variant="orange" size="large" onClick={() => handlePlayCPU()}>NEW GAME (VS CPU)</Button>
        <Button variant="green" size="large">NEW GAME (VS PLAYER)</Button>
      </div>
    </div>
  );
};

export default GameMenu;
