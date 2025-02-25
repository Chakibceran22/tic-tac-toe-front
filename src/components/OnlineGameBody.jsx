import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import x from "../assets/images/icons/icon-x-outline.svg";
import o from "../assets/images/icons/icon-o-outline.svg";
import xGreen from "../assets/images/icons/icon-x.svg";
import oYellow from "../assets/images/icons/icon-o.svg";
import GameWin from './GameWin';
import GameScores from './GameScore';
import GameHeader from './GameHeader';

// Create a socket instance (adjust the URL as needed)
const socket = io("http://localhost:5000");

const GameBoard = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState('x');
  const [cells, setCells] = useState(Array(9).fill(null));
  const [playerScore, setPlayerScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [tieScore, setTieScore] = useState(0);
  const [isWin, setIsWin] = useState(false);
  const [winner, setWinner] = useState(null);
  const [roomId, setRoomId] = useState(null);

  // Listen for socket events
  useEffect(() => {
    socket.on("roomAssigned", (assignedRoom) => {
      setRoomId(assignedRoom);
      console.log("Joined room:", assignedRoom);
    });

    socket.on("startGame", (data) => {
      console.log("Game started:", data);
    });

    socket.on("updateBoard", ({ boardState, currentPlayer: cp }) => {
      setCells(boardState);
      setCurrentPlayer(cp);
    });

    return () => {
      socket.off("roomAssigned");
      socket.off("startGame");
      socket.off("updateBoard");
    };
  }, []);

  // When the component mounts, load playerChoice and join a room
  useEffect(() => {
    console.log("Player choice:", sessionStorage.getItem("playerChoice"));
    const storedChoice = sessionStorage.getItem("playerChoice");
    setPlayerChoice(storedChoice);
    setCurrentPlayer(storedChoice);
    document.title = "Tic Tac Toe";
    socket.emit("joinGame");
  }, []);

  // Check for a winning combination whenever the board changes
  useEffect(() => {
    const win = checkWinner(cells);
    if (win && !isWin) {
      if (win === playerChoice) {
        console.log("Player wins");
        setPlayerScore((prev) => prev + 1);
      } else if (win === "tie") {
        console.log("It's a tie");
        setTieScore((prev) => prev + 1);
      } else {
        console.log("Opponent wins");
        setOpponentScore((prev) => prev + 1);
      }
      setWinner(win);
      setIsWin(true);
      // Block further moves by marking empty cells as unavailable (using a dummy value like 10)
      setCells((prev) => prev.map((cell) => (cell === null ? 10 : cell)));
    }
  }, [cells, isWin, playerChoice]);

  // Handle cell clicks by sending the updated board via socket
  const handleCellClick = (index) => {
    // Prevent moves on an already filled cell or if the game is over
    if (cells[index] !== null || isWin) return;
    // Only allow moves if it is this player's turn
    if (currentPlayer !== playerChoice) return;

    const newCells = [...cells];
    newCells[index] = playerChoice;
    // Determine next turn
    const nextPlayer = playerChoice === "x" ? "o" : "x";

    // Optionally update locally for optimistic UI
    setCells(newCells);
    setCurrentPlayer(nextPlayer);

    // Emit the move to the server so the opponent’s board updates
    socket.emit("makeMove", { roomId, boardState: newCells, currentPlayer: nextPlayer });
  };

  const handleReset = () => {
    setCells(Array(9).fill(null));
    setCurrentPlayer(playerChoice);
    setIsWin(false);
    setWinner(null);
    // Optionally, you could also inform the server about the reset
  };

  // Checks for a winner or tie on the board
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

  return (
    <div className="min-h-screen w-full bg-[#1A2A33] px-4 py-6">
      <div className="w-full max-w-[450px] mx-auto flex flex-col items-center">
        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 place-items-center w-full my-4">
          <GameHeader currentPlayer={currentPlayer} handleReset={handleReset} />
          {/* Game grid */}
          {cells.map((cell, index) => (
            <div
              key={index}
              className="bg-[#1F3641] rounded-[15px] shadow-[inset_0px_-8px_0px_#10212A]
                         cursor-pointer relative overflow-hidden transition-all duration-100 ease-out 
                         group w-full aspect-square min-h-[80px] sm:min-h-[100px] md:min-h-[120px]"
            >
              <button
                className="w-full h-full flex items-center justify-center cursor-pointer"
                onClick={() => handleCellClick(index)}
              >
                {cell === 'x' ? (
                  <img
                    src={xGreen}
                    alt="x mark"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
                  />
                ) : cell === 'o' ? (
                  <img
                    src={oYellow}
                    alt="o mark"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
                  />
                ) : (
                  <img
                    src={playerChoice === "x" ? x : o}
                    alt="hover mark"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  />
                )}
              </button>
            </div>
          ))}
          <GameScores 
            playerMark={playerChoice} 
            tieScore={tieScore} 
            opponentScore={opponentScore} 
            playerScore={playerScore} 
          />
        </div>
        {isWin && (
          <GameWin 
            playerChoice={playerChoice} 
            player={winner} 
            setIsWin={setIsWin} 
            setCells={setCells} 
            setCurrentPlayer={setCurrentPlayer} 
          />
        )}
      </div>
    </div>
  );
};

export default GameBoard;
