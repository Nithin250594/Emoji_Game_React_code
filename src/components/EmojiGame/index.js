/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import './index.css'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {clickedEmojisListIds: [], count: 0, winOrLose: '', topScore: 0}

  emojiClicked = id => {
    const {clickedEmojisListIds} = this.state
    const check = clickedEmojisListIds.find(num => num === id)

    if (check !== id) {
      const {emojisList} = this.props
      this.setState(prevStat => ({
        clickedEmojisListIds: [...prevStat.clickedEmojisListIds, id],
        count: prevStat.count + 1,
        topScore:
          prevStat.count + 1 > prevStat.topScore
            ? prevStat.count + 1
            : prevStat.topScore,
        winOrLose:
          clickedEmojisListIds.length === emojisList.length - 1 ? 'Win' : '',
      }))
      emojisList.sort(() => Math.random() - 0.5)
    } else {
      this.setState({winOrLose: 'Lose'})
    }
  }

  clickedPlayAgain = () => {
    this.setState({
      clickedEmojisListIds: [],
      winOrLose: '',
      count: 0,
    })
  }

  render() {
    const {count, winOrLose, topScore} = this.state
    const {emojisList} = this.props

    return (
      <div className="emoji-game-bg">
        <NavBar count={count} winOrLose={winOrLose} topScore={topScore} />
        <div>
          <ul className="emoji-cards-list">
            {winOrLose === '' &&
              emojisList.map(eachEmojiItem => (
                <EmojiCard
                  key={eachEmojiItem.id}
                  emojiDetails={eachEmojiItem}
                  emojiClicked={this.emojiClicked}
                />
              ))}
            {(winOrLose === 'Win' || winOrLose === 'Lose') && (
              <WinOrLoseCard
                winOrLose={winOrLose}
                score={count}
                clickedPlayAgain={this.clickedPlayAgain}
              />
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default EmojiGame
