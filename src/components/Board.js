import React, { useState } from 'react';
import Square from './Square';
const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  const handleSquareClick = postion => {
    if (board[postion]) {
      return;
    }

    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === postion) {
          return isXNext ? 'X' : 'O';
        }
        return square;
      });
    });
    setIsXNext(prev => !prev);
  };

  const randerSquare = postion => {
    return (
      <Square
        value={board[postion]}
        onClick={() => handleSquareClick(postion)}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {randerSquare(0)}
        {randerSquare(1)}
        {randerSquare(2)}
      </div>
      <div className="board-row">
        {randerSquare(3)}
        {randerSquare(4)}
        {randerSquare(5)}
      </div>
      <div className="board-row">
        {randerSquare(6)}
        {randerSquare(7)}
        {randerSquare(8)}
      </div>
    </div>
  );
};

export default Board;
