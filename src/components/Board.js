import React from 'react';
import Square from './Square';
const Board = ({ board, handleSquareClick }) => {
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
