import React from 'react';
import { Link } from "react-router-dom";
import Logotype from './includes/logotype';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class HeadComponent extends React.Component {
  render() {
    return <div className="block head" id="Head">
      <div className="background_block">
        <div className="background_filter"></div>
        <img src={this.props.server + "/images/" +this.props.head.backgroundImage} alt=""/>
      </div>
      <div className="big_logotype">
        {(this.props.config !== null && this.props.config !== undefined)?<Logotype domId="Logotype" logotype={this.props.server + "/images/" +this.props.config.logo} logoColor={this.props.config.logoColor}/>:null}
        <Link to={'/return'}>
          <div className="gold_button">
            Повернення 1% пенсійного збору сплаченого при купівлі квартири:
          </div>
        </Link>
      </div>
      <div id="scroll-d"><FontAwesomeIcon icon={['fas', 'arrow-down']} /></div>
    </div>
  }
}

export default HeadComponent;
