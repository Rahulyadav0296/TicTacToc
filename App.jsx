import "./App.css";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        {/* PLAYERS */}
        <ol id="players">
          {/* we need tow player details here to play the game   */}
          {/* <li>
            <span className="player">
              <span className="player-name">Player 1</span>
              <span className="player-symbol">X</span>
              <button>Edit</button>
            </span>
          </li>
          <li>
            <span className="player">
              <span className="player-name">Player 1</span>
              <span className="player-symbol">O</span>
              <button>Edit</button>
            </span>
          </li> */}
          <Player initialName="Player - 1" symbol="X" />
          <Player initialName="Player - 2" symbol="O" />
        </ol>
        {/* GAME BOARD  */}
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
