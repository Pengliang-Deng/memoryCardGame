import { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board/';
import Timer from './components/Timer/';
import {initGameData} from './data/';

function App() {

  const {score, level, timer} = initGameData[0];
  const [isStart, setIsStart] = useState(false);

  const startGame = () => {
    if (!isStart) {
      setIsStart(true);
    } else {
      // End Game and Show score
      // setIsStart(false);
    }
  }

  return (
    <div className="App">

        <h1 className="game-title">The Classic MeMmmm Game</h1>

        <div className="game-stats">
          <div className="game-stats__level">
            <div className="game-stats__level--label">Current Level:</div>
            <div className="game-stats__level--value">1</div>
          </div>
          <div className="game-stats__score">
            <div className="game-stats__score--label">Score:</div>
            <div className="game-stats__score--value">0</div>
          </div>
          <button onClick={() => startGame()} className="game-stats__button" type="button">New Game</button>
        </div>

        <Timer isStart={isStart} time={timer}/>
        <Board isStart={isStart}/>

    </div>
  );
}

export default App;
