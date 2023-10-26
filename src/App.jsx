import { useState } from "react";
import Gameboard from "./components/Gameboard";
import Player from "./components/Player";
import Logs from "./components/Logs";
import { WINNING_COMBINATIONS } from "./components/winning-combinations";
import GameOver from './components/GameOver';
let gboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gboard[row][col] = player;
  }
  let winner=null;
  for (const combination of WINNING_COMBINATIONS) {
      let firstSymbol = gboard[combination[0].row][combination[0].column];
      let secondSymbol = gboard[combination[1].row][combination[1].column];
      let thirdSymbol = gboard[combination[2].row][combination[2].column];
      if(firstSymbol && firstSymbol===secondSymbol && firstSymbol===thirdSymbol)
      {
        winner=firstSymbol;
      }
    }
    const hasDrawn = gameTurns.length===9 && !winner
  const squareHandler = (rowIndex, colIndex) => {
    setActivePlayer((curPlayer) => (curPlayer === "X" ? "O" : "X"));
    setGameTurns((prevGameTurns) => {
      let currentPlayer = "X";
      if (prevGameTurns.length > 0 && prevGameTurns[0].player === "X") {
        currentPlayer = "O";
      }
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevGameTurns,
      ];
      return updatedTurns;
    });
    
  };
  const handleRestart=()=>{
    setGameTurns([]);
    gboard = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];

  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player isActive={activePlayer === "X"} name="Player 1" symbol="X" />
          <Player isActive={activePlayer === "O"} name="Player 2" symbol="O" />
        </ol>
        {(winner || hasDrawn) && <GameOver winner={winner} onRematch={handleRestart} />}
        <Gameboard onSquareChange={squareHandler} board={gboard} />
      </div>
      <Logs turns={gameTurns} />
    </main>
  );
}

export default App;
