import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ButtonsIncludes extends React.Component {
  constructor(){
    super()
    this.state = {
      width: document.body.offsetWidth
    }
  }

  toTop(){
    document.getElementById('page').scrollTo({top: 0, behavior: 'smooth'});
  }
  render() {
    return <div className="buttons" id="Buttons">
      {(this.state.width < 800)?<div className={(this.props.open)?"openMenuButton open":"openMenuButton"} onClick={this.props.openclose}>
        <div className="menuButtonLine line1"></div>
        <div className="menuButtonLine line2"></div>
        <div className="menuButtonLine line3"></div>
      </div>:null}
      <div className={(this.props.topPosition > 1000)?"fixedButton toTop":"fixedButton toTop hiden"} onClick={this.toTop.bind(this)}>
        <FontAwesomeIcon icon={['fas', 'arrow-up']} />
      </div>
    </div>
  }
}

export default ButtonsIncludes;
