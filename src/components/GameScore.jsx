
function GameScores({ playerMark, playerScore, opponentScore, tieScore }) {
    return (
        <>
            <div className={`flex-1 rounded-xl flex flex-col justify-center text-center 
                           p-3 sm:p-4 md:p-3 w-full min-h-[60px] sm:min-h-[70px] md:min-h-[70px]
                           ${playerMark === "o" ? "bg-[#F2B137]" : "bg-teal-400"}`}>
                <label className="text-sm sm:text-base md:text-lg font-medium text-gray-900 uppercase">{playerMark} (YOU)</label>
                <b className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{playerScore}</b>
            </div>
            <div className="flex-1 rounded-xl flex flex-col justify-center text-center 
                          p-3 sm:p-4 md:p-3 w-full min-h-[60px] sm:min-h-[70px] md:min-h-[70px]
                          bg-[#A8BFC9]">
                <label className="text-sm sm:text-base md:text-lg font-medium text-gray-900 uppercase">TIES</label>
                <b className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{tieScore}</b>
            </div>
            <div className={`flex-1 rounded-xl flex flex-col justify-center text-center 
                           p-3 sm:p-4 md:p-3 w-full min-h-[60px] sm:min-h-[70px] md:min-h-[70px]
                           ${playerMark === "o" ? "bg-teal-400" : "bg-[#F2B137]"}`}>
                <label className="text-sm sm:text-base md:text-lg font-medium text-gray-900 uppercase">{playerMark === "x" ? "o" : "x"} (CPU)</label>
                <b className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{opponentScore}</b>
            </div>
        </>
    );
}

export default GameScores;