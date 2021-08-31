import { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board/';
import Timer from './components/Timer/';
import GameStatus from './components/GameStatus/';
import {uniqueCardsArray, initGameData, levelInfo} from './data/';

function App() {

  const {initScore, initLevel, initTimer} = initGameData[0];
  const [isStart, setIsStart] = useState(false);
  const [score, setScore] = useState(initScore);
  const [level, setLevel] = useState(initLevel);
  const [leftTime, setLeftTime] = useState(initTimer);
  const [cards, setCards] = useState([])
  const [boardReset, setBoardReset] = useState(false);
  
  const [layout, setLayout] = useState(levelInfo[level - 1].layout);

  const startGame = () => {
    if (!isStart) {
      initStatus();
      initCards();
      setIsStart(true);
    } else {
      handleGameOver()
    }
  }

  const handleGameOver = () => {
    setIsStart(false);
    setBoardReset((prev) => (!prev))
    alert(`Your Score is ${score}`);
  }

  const calculateScore = () => {
    setScore((prev) => (prev + (level**2)*leftTime))
  }

  const handleTimeChange = () => {
    setLeftTime((prev) => (prev -1))
  }

  const handleGameComplete = () => {
    setLevel((prev) => (prev+1))
    setLeftTime(initTimer)
  }

  // function swap(array, i, j) {
  //   const temp = array[i];
  //   array[i] = array[j];
  //   array[j] = temp;
  // }

  // function shuffleCards(array) {
  //   const length = array.length;
  //   for (let i = length; i > 0; i--) {
  //     const randomIndex = Math.floor(Math.random() * i);
  //     const currentIndex = i - 1;
  //     swap(array, currentIndex, randomIndex);
  //   }
  //   return array;
  // }

  const initCards = () => {
    let cardsIndex = levelInfo[level-1].cards;
    const deck = cardsIndex.map((cardIndex, index) => ({
        id: index,
        type: uniqueCardsArray[cardIndex].type,
        img: uniqueCardsArray[cardIndex].img
    }));
    setCards(deck);
  }

  const initStatus = () => {
    setLeftTime(initTimer);
    setScore(initScore);
    setLevel(initLevel);
  }

  useEffect(() => {
    if (level > 3) {
      handleGameOver();
    } else {
      setLayout(levelInfo[level - 1].layout);
      initCards();
    }
  }, [level])

  return (
    <div className="App">

        <h1 className="game-title">The Classic MeMmmm Game</h1>

        <div className="game-stats">
          <GameStatus score={score} level={level} />
          <button onClick={() => startGame()} className="game-stats__button" type="button">
              {`${isStart? "End Game" : "Start Game"}`}
          </button>
        </div>

        <Timer isStart={isStart} 
               handleTimeChange={handleTimeChange}
               handleGameOver={handleGameOver}
               leftTime={leftTime} 
        />
        <Board currentLevel={level} 
              cards={cards}
              shouldBoardReset={boardReset}
              layout={layout} isStart={isStart} 
              handleGameComplete={handleGameComplete}
              handleScoreChange={calculateScore}
        />

    </div>
  );
}

export default App;
