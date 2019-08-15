import React from 'react';

class Modal extends React.Component {
  render() {
    return (this.props.open)?<div className="modalBackground">
      <div className="modalContent">
        <div className="closeModal" onClick={this.props.closeModal.bind(this)}>Закрити</div>
        <div className="modalTitle">{this.props.name}</div>
        <div className="modalBody">{this.props.text}</div>
        <div className="modalFooter"></div>
      </div>
    </div>:null;
  }
}

export default Modal;
