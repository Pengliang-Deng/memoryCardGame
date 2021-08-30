import './App.css';
import Board from './components/Board/';

function App() {

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
          <button className="game-stats__button" type="button">New Game</button>
        </div>

        <div className="game-timer"><div className="game-timer__bar">60s</div></div>

        {/* <div class="game-board">
          <div class="game-instruction">
            <h3 class="game-instruction__header">Instruction</h3>
            <p class="game-instruction__content">
              - Click on the card to view the back face of the card. <br />
              - Get two exact same card to score.<br />- Score are based on the time
              and level. <br />- You only have 60s for each level. <br />- There are
              three levels, '2x2', '4x4' and '6x6'. <br />- Press 'Start Game'
              button when you are ready.
            </p>
          </div>
        </div> */}

        <Board />
        {/*  <div class="game-board" style={{"grid-template-columns" : "1fr 1fr"}}> */}

        {/* </div> */}

    </div>
  );
}

export default App;
