import React from 'react';
import ReactQuill from 'react-quill'; // ES6
import '../../styles/panel/quill.snow.css'; // ES6

class ModalNews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text1: '' ,
      text2: ''
    } // You can also pass a Quill Delta here
    this.handleChange1 = this.handleChange1.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
  }

  handleChange1(value) {
    this.setState({ text1: value })
  }

  handleChange2(value) {
    this.setState({ text2: value })
  }

  render() {
    return (this.props.opened)?<div className="modalBackground">
      <div className="modalContent">
        <div className="panelModalTitle">Додати новину</div>
        <div className="panelModalContent">
          <label><div className="selectModalImage">Вибрати зображення</div></label>
          <input type="text" className="modalInput" placeholder="Введіть заголовок новини" value={(this.props.modalData !== null)?this.props.modalData.title:""}/>
          <ReactQuill value={this.state.text1} onChange={this.handleChange1} style={{  height: "150px", marginBottom: "10px"}}/>
          <ReactQuill value={this.state.text2} onChange={this.handleChange2} style={{  height: "150px", marginBottom: "10px"}}/>
        </div>
        <div className="panelModalFooter">
          <div className="modalBtn save">Зберегти</div>
          <div className="modalBtn cancel">Відміна</div>
        </div>
      </div>
    </div>:null;
  }
}

export default ModalNews;
