import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ButtonsIncludes extends React.Component {
  toTop(){
    document.getElementById('root').scrollTo({top: 0, behavior: 'smooth'});
  }
  render() {
    return <div className="buttons" id="Buttons">
      <div className={(this.props.scrollTop > 1000)?"fixedButton toTop":"fixedButton toTop hiden"} onClick={this.toTop.bind(this)}>
        <FontAwesomeIcon icon={['fas', 'arrow-up']} />
      </div>
    </div>
  }
}

export default ButtonsIncludes;
