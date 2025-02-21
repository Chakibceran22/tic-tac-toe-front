import { useState } from "react";

function GameScores({ playerMark, playerScore, opponentScore, tieScore }) {
    return (
        <>
            <div className={`flex-1 h-18 rounded-xl flex flex-col justify-center text-center p-5 w-full  ${playerMark === "o" ? "bg-[#F2B137]" : "bg-teal-400"}`}>
                <label className="text-lg font-medium text-gray-900 uppercase">{playerMark} (YOU)</label>
                <b className="text-2xl font-bold text-gray-900">{playerScore}</b>
            </div>
            <div className="flex-1 h-18 rounded-xl flex flex-col justify-center text-center p-5 w-full bg-[#A8BFC9] ">
                <label className="text-lg font-medium text-gray-900 uppercase">TIES</label>
                <b className="text-2xl font-bold text-gray-900">{tieScore}</b>
            </div>
            <div className={`flex-1 h-18 rounded-xl flex flex-col justify-center text-center p-5 w-full ${playerMark === "o" ? "bg-teal-400" : "bg-[#F2B137]"}`}>
                <label className="text-lg font-medium text-gray-900 uppercase">{playerMark === "x" ? "o" : "x"} (CPU)</label>
                <b className="text-2xl font-bold text-gray-900">{opponentScore}</b>
            </div>
            </>
    );
}

export default GameScores;