import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Title from './includes/title';
import Modal from './includes/modal.js';

let parseService = (services, server, click) => {
    const serviceData = services.map((res, key) =>
      <div key={key} className="service_block">
        <div className="setrviceLine image">
          <img src={server + "/images/services/" +res.icon} alt=""/>
        </div>
        <div className="setrviceLine title">{res.name}</div>
        <div className="setrviceLine text">{res.miniText}</div>
        <div className="setrviceLine buttons">
          <div id={res.AI} onClick={click.bind(this)}>Детальніше</div>
        </div>
      </div>
    );
    return serviceData
}

class ServicesComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false,
      dataId: null,
      contentModal: null
    }
    this.handleClick = this.handleClick.bind(this);
    this.closeModal = this.closeModal.bind(this)
  }

  handleClick(el){
    this.setState({
      modal: true,
      dataId: el.target.id,
      contentModal: this.props.services.services[parseInt(el.target.id)]
    });
  }

  closeModal(){
    this.setState({
      modal: false,
      dataId: null,
      contentModal: null
    })
  }

  render() {
    return <div className="block services" id="Services" style={{backgroundColor: this.props.design.servicesBackgroundColor}}>
      <Title data={this.props.services}/>
      {(this.state.modal)?<Modal open={this.state.modal} name={this.state.contentModal.name} text={this.state.contentModal.fullText} closeModal={this.closeModal}/>:null}
      <div className="servicesBlockData">
        {parseService(this.props.services.services, this.props.server, this.handleClick)}
      </div>
    </div>
  }
}

export default ServicesComponent;
