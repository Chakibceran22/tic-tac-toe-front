import React, { useEffect, useState } from 'react';
import x from "../assets/images/icons/icon-x-outline.svg";
import o from "../assets/images/icons/icon-o-outline.svg";
import xGreen from "../assets/images/icons/icon-x.svg";
import oYellow from "../assets/images/icons/icon-o.svg";
import GameWin from './GameWin';
import GameScores from './GameScore';
import GameHeader from './GameHeader';



const GameBoard = ({ }) => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState('x');
  const [cells, setCells] = useState(Array(9).fill(null));
  const [playerScore, setPlayerScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [tieScore, setTieScore] = useState(0);
  const [isWin, setIsWin] = useState(false);
  const [winner, setWinner] = useState(null);

  const handleCellClick = (index) => {

    if (cells[index] !== null) return; 
    if (currentPlayer !== playerChoice) return; 

    const newCells = [...cells];
    newCells[index] = playerChoice; 
    setCells(newCells);
    setCurrentPlayer(playerChoice === "x" ? "o" : "x"); 

    setTimeout(() => {
      const aiMove = getSmartMove(newCells, playerChoice === "x" ? "o" : "x");
      if (aiMove !== null) {
        newCells[aiMove] = playerChoice === "x" ? "o" : "x"; 
        setCells(newCells);
        setCurrentPlayer(playerChoice); 
      }
      const opponentChoice = playerChoice === "x" ? "o" : "x";
      const winner = checkWinner(newCells); 

    if (winner === playerChoice) {
      console.log("Player wins");
      setPlayerScore(playerScore + 1);
      setIsWin(true);
      setCells(newCells.map((cell, idx) => (cell === null ? 10 : cell)))
      setWinner(playerChoice);
    } else if (winner === opponentChoice) {
      console.log("Opponent wins");
      setOpponentScore(opponentScore + 1);
      setIsWin(true);
      setCells(newCells.map((cell, idx) => (cell === null ? 10 : cell)))
      setWinner(opponentChoice);

    } else if (winner === "tie") {
      console.log("It's a tie");
      setTieScore(tieScore + 1);
      setIsWin(true);
      setCells(newCells.map((cell, idx) => (cell === null ? 10 : cell)))
      setWinner("tie");
    }
    
    }, 500);
    
  };
  const endGame = (newCells) => {
    setIsWin(true);
    setCells(newCells.map((cell, idx) => (cell === null ? 10 : cell)))
    setCurrentPlayer(playerChoice);
  }

  const getSmartMove = (board, aiSymbol) => {
    const playerSymbol = aiSymbol === "x" ? "o" : "x"; 


    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]             
    ];

    for (const combo of winningCombinations) {
      const [a, b, c] = combo;
      const values = [board[a], board[b], board[c]];
      if (values.filter(v => v === aiSymbol).length === 2 && values.includes(null)) {
        return combo[values.indexOf(null)]; 
      }
    }


    for (const combo of winningCombinations) {
      const [a, b, c] = combo;
      const values = [board[a], board[b], board[c]];
      if (values.filter(v => v === playerSymbol).length === 2 && values.includes(null)) {
        return combo[values.indexOf(null)]; 
      }
    }


    const randomNumber = Math.random();
    if (randomNumber < 0.5 && randomNumber > 0.3) {
      if (board[4] === null) return 4;

    }


    const corners = [0, 2, 6, 8].filter(i => board[i] === null);
    if (corners.length > 0) return corners[Math.floor(Math.random() * corners.length)];


    const availableMoves = board.map((val, idx) => (val === null ? idx : null)).filter(i => i !== null);
    return availableMoves.length > 0 ? availableMoves[Math.floor(Math.random() * availableMoves.length)] : null;

  };
  const checkWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6]             
    ];

    for (const combo of winningCombinations) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; 
      }
    }

    return board.includes(null) ? null : "tie"; 
  };



  const handleReset = () => {
    setCells(Array(9).fill(null));
    setCurrentPlayer(playerChoice);
  };
  useEffect(() => {
    const playerChoice = sessionStorage.getItem("playerChoice");
    setPlayerChoice(playerChoice);
    setCurrentPlayer(playerChoice);
    document.title = "Tic Tac Toe";
  }, [])

  return (
    <div className="min-h-screen w-full bg-[#1A2A33] px-4 py-6">
      <div className="w-full max-w-[450px] mx-auto flex flex-col items-center">
        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 place-items-center 
                      w-full my-4">

          <GameHeader currentPlayer={currentPlayer} handleReset={handleReset} />
          {/* Game grid */}
          {cells.map((_, index) => (
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
                className="w-full h-full flex items-center justify-center cursor-pointer"
                onClick={() => handleCellClick(index)}
              >
                {cells[index] === 'x' ? (
                  <img
                    src={xGreen}
                    alt={`${cells[index]} mark`}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
                  />
                ) : cells[index] === 'o' ? (
                  <img
                    src={oYellow}
                    alt={`${cells[index]} mark`}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
                  />
                ) : (
                  
                  <img
                    src={playerChoice === "x" ? x : o}
                    alt="Hover mark"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 
                              opacity-0 transition-opacity duration-200 
                              group-hover:opacity-100"
                  />
                  
                )}
              </button>
            </div>
          ))}
          
          <GameScores playerMark={playerChoice} tieScore={tieScore} opponentScore={opponentScore} playerScore={playerScore} />
        </div>
        {isWin && <GameWin playerChoice={playerChoice}   player={winner}  setIsWin={setIsWin} setCells={setCells} setCurrentPlayer={setCurrentPlayer} />}
        
      </div>
      
    </div>
  );
};

export default GameBoard;