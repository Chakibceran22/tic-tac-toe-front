import React from "react";
import xGreen from '../assets/images/icons/icon-x.svg'
import oYellow from '../assets/images/icons/icon-o.svg'
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { LockIcon } from "lucide-react";

const GameWin = ({ playerChoice, player, setCells, setCurrentPlayer, setIsWin }) => {
    const navigate = useNavigate();
    const endGame = () => {
        setIsWin(false);
        setCells(Array(9).fill(null));
        setCurrentPlayer(playerChoice);
      }
      const handleQuit = () => {
        navigate('/');
      }
    return (
        <div className="min-h-screen w-screen flex justify-center items-center absolute px-4 py-6">
            <div className="w-full max-w-2xl bg-[#1F3641] rounded-lg shadow-lg p-8">
                <div className="flex flex-col items-center justify-center space-y-6 w-full">
                    <h2 className="text-lg md:text-xl font-bold text-[#A8BFC9]">
                        {player.toUpperCase()} TAKES THE ROUND
                    </h2>
                    
                    <div className="flex items-center justify-center space-x-4">
                        {player === 'x' || player ==='o'  ? (
                            <img 
                            src={player === 'x' ? xGreen : player === 'o' ? oYellow : ''}
                            alt={`Player ${player}`}
                            className="w-12 h-12 md:w-16 md:h-16"
                            />
                        ):(
                            <LockIcon size={64} className="w-12 h-12 md:w-16 md:h-16 text-[#A8BFC9]"/>
                        )}
                        <h1 className={`text-2xl md:text-4xl font-bold  ${player === 'x' ? 'text-[#31C3BD]' : player === 'o' ? 'text-[#FFD700]' : 'text-[#A8BFC9]'}`}>
                            {player === 'x' || player === 'o' ? "WON THE GAME" : 'TIE'}
                        </h1>
                    </div>

                    <div className="flex space-x-4 mt-4">
                        <Button variant="grey" size="large" onClick={handleQuit}>
                            QUIT
                        </Button>
                        <Button variant="orange" size="large" onClick={endGame}>
                            NEXT ROUND
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameWin;