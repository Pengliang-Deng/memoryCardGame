import { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board/';
import Timer from './components/Timer/';
import GameStatus from './components/GameStatus/';
import {initGameData} from './data/';

function App() {

  const {initScore, initLevel, initTimer} = initGameData[0];
  const [isStart, setIsStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(initScore);
  const [level, setLevel] = useState(initLevel);

  const startGame = () => {
    if (!isStart) {
      setIsStart(true);
    } else {
      endGame()
    }
  }

  const endGame = () => {
    setGameOver(true)
  }

  const incrementScore = () =>{
    setScore((prev)=>(prev + 1))
  }

  return (
    <div className="App">

        <h1 className="game-title">The Classic MeMmmm Game</h1>

        <div className="game-stats">
          <GameStatus score={score} level={level} />
          <button onClick={() => startGame()} className="game-stats__button" type="button">New Game</button>
        </div>

        <Timer isStart={isStart} time={initTimer} isGameOver={gameOver}/>
        <Board isStart={isStart} handleScoreChange={incrementScore} isGameOver={gameOver}/>

    </div>
  );
}

export default App;
