// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {winOrLose, score, clickedPlayAgain} = props

  const playAgainBtn = () => {
    clickedPlayAgain()
  }

  if (winOrLose === 'Win') {
    return (
      <div className="WinLose-bg">
        <div className="won-text-container">
          <h1 className="won-title">You Won</h1>
          <p className="best-score">Best Score</p>
          <p className="score">12/12</p>
          <button
            type="button"
            className="playAgain-Btn"
            onClick={playAgainBtn}
          >
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
          className="won-image"
        />
      </div>
    )
  }
  return (
    <div className="WinLose-bg">
      <div className="won-text-container">
        <h1 className="won-title">You Lose</h1>
        <p className="best-score">Score</p>
        <p className="score">{score}/12</p>
        <button type="button" className="playAgain-Btn" onClick={playAgainBtn}>
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
        className="won-image"
      />
    </div>
  )
}

export default WinOrLoseCard
