import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadingArt from './heading'

class Modal extends React.Component {
  render() {
    return (this.props.open)?<div className="modalBackground">
      <div className="modalContent">
        <div className="closeModal" onClick={this.props.closeModal.bind(this)}><FontAwesomeIcon icon={['fas', 'times']}/></div>
        <div className="modalTitle">
          {this.props.name}
          <div className="bdt-heading-style"><HeadingArt fill={'#164b49'}/></div>
        </div>
        <div className="modalBody">{this.props.text}</div>
        <div className="modalFooter"></div>
      </div>
    </div>:null;
  }
}

export default Modal;
