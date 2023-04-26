import { Component } from "react";

import "../../style/components/app-popup.scss";

class AppPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
  }

  render() {

    return (
      <div className="popup__container">
        <div className="popup__body">
          <div className="popup__logo">
            <div className="logo__img">
              <img src="./img/logo-red.svg" alt="logo" />
            </div>
            <span className="logo__text">Todo Daily</span>
          </div>
          <input className="popup__title" readOnly value="Cooking a salmon sushi" />
          <textarea className="popup__text" readOnly value="">Salmon and tuna i think is good for </textarea>
          <span className="popup__line"></span>
          <div className="popup__question-block">
            <p className="question-block__question">Did you completed task? </p>
            <div className="question-block__answer">
              <button className="answer answer__yes">Yes</button>
              <span>/</span>
              <button className="answer answer__no">No</button>
            </div>
            <div className="question-block__question">
              <span>Do you want to rewrite the task?</span>
              <button className="answer answer__yes">Yes</button>
            </div>
          </div>
        </div>
      </div>

    )
  }
  
}

export default AppPopup;