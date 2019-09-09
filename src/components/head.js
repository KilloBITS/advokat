import React from 'react';
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
      </div>
      <div id="scroll-d"><FontAwesomeIcon icon={['fas', 'arrow-down']} /></div>
    </div>
  }
}

export default HeadComponent;
