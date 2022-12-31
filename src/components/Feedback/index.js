// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {feedbackStatus: true}

  onClickEmoji = () => {
    this.setState({feedbackStatus: false})
  }

  render() {
    const {feedbackStatus} = this.state
    const {resources} = this.props

    return (
      <div className="bgContainer">
        {feedbackStatus ? (
          <div className="feedbackCard">
            <h1 className="feedbackHeading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emojiContainer">
              {resources.emojis.map(eachItem => (
                <li key={eachItem.id} className="emojiItem">
                  <img
                    alt={eachItem.name}
                    className="emoji"
                    onClick={this.onClickEmoji}
                    src={eachItem.imageUrl}
                  />
                  <p className="emojiText">{eachItem.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="feedbackResponseCard">
            <img
              alt="love emoji"
              className="responseEmoji"
              src={resources.loveEmojiUrl}
            />
            <h1 className="responseGreeting">Thank You!</h1>
            <p className="responseDescription">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
