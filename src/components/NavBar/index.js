// Write your code here.
import './index.css'

const NavBar = props => {
  const {count, winOrLose, topScore} = props

  return (
    <nav className="emoji-navbar">
      <div className="emoji-logo-title">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="emoji-game-title">Emoji Game</h1>
      </div>
      {winOrLose === '' && (
        <div className="score-section">
          <p className="score-text">Score: {count}</p>
          <p className="score-text">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
