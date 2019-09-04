import React from 'react';
import Title from './includes/title.js';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';


class Return extends React.Component {
  render() {
    return <div className="block return">
      <Title data={this.props.return}/>
      <div className="returnBlockData">
        <div className="miniTextReturn">**{this.props.return.return.miniText}</div>
        <div className="returnIneInfo">ЧОМУ ВАРТО <b>ПОВЕРНУТИ</b> 1%</div>
        <div className="returnSubIneInfo">Основні причини скористатись нашими послугами</div>
        <div className="allReturnBlock">
          <div className="miniReturnContainer">
            <div className="divContLogo">
              <img src={this.props.server + '/images/return/5c41e61ba891e5a2f26d6b5e_1889200-p-500.png'} alt=""/>
            </div>
            <div className="divContText">ЗБІЛЬШЕННЯ СІМЕЙНОГО БЮДЖЕТУ </div>
          </div>
          <div className="miniReturnContainer">
            <div className="divContLogo">
              <img src={this.props.server + '/images/return/5c41e72c8a209f639e1c2a38_Icons8_flat_alarm_clock.svg-p-500.png'} alt=""/>
            </div>
            <div className="divContText">МІНІМАЛЬНІ ЗАТРАТИ ЧАСУ </div>
          </div>
        </div>
        <div className="textReturn">{this.props.return.return.text}</div>
      </div>
    </div>
  }
}

export default Return;
