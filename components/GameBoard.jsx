import { useState } from "react";

// create a initial Board
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [clickItem, setClickItem] = useState('X') // initial value is X
  
  function handleSymboChange() {
    setClickItem('O')
  }

  return (
    // <ol id="game-board">
    //   <li>
    //     <ol>
    //       <li></li>
    //       <li></li>
    //       <li></li>
    //     </ol>
    //   </li>
    //   <li>
    //     <ol>
    //       <li></li>
    //       <li></li>
    //       <li></li>
    //     </ol>
    //   </li>
    //   <li>
    //     <ol>
    //       <li></li>
    //       <li></li>
    //       <li></li>
    //     </ol>
    //   </li>
    // </ol>
    // create a gameBoard here which is blank initially called dynamically created grid
    // <ol id="game-board">
    //   {initialGameBoard.map((row, rowÍndex) => (
    //     <li key={rowÍndex}>
    //       <ol>
    //         {row.map((playerSymbol, colIndex) => (
    //           <li key={colIndex}>
    //             <button>{playerSymbol}</button>
    //           </li>
    //         ))}
    //       </ol>
    //     </li>
    //   ))}
    // </ol>
    <ol id="game-board">
      {initialGameBoard.map((row, rowÍndex) => (
        <li key={rowÍndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={handleSymboChange}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
