// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, emojiClicked} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const clickEmoji = () => {
    emojiClicked(id)
  }

  return (
    <li className="each-emoji">
      <button type="button" className="emoji-box" onClick={clickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-size" />
      </button>
    </li>
  )
}

export default EmojiCard
