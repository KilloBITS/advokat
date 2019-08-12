import React from 'react';
import Title from './includes/title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let parseService = (services, server) => {
    const serviceData = services.map((res, key) =>
      <div key={key} className="service_block">
        <div className="setrviceLine image">
          <img src={server + "/images/services/" +res.icon} alt=""/>
        </div>
        <div className="setrviceLine title">{res.name}</div>
        <div className="setrviceLine text">{res.miniText}</div>
        <div className="setrviceLine buttons">
          <a href={"#"+res.AI}>Детальніше</a>
        </div>
      </div>
    );
    return serviceData
}

class ServicesComponent extends React.Component {
  render() {
    return <div className="block services" id="Services" style={{backgroundColor: this.props.design.servicesBackgroundColor}}>
      <Title data={this.props.services}/>
      <div className="servicesBlockData">
        {parseService(this.props.services.services, this.props.server)}
      </div>
    </div>
  }
}

export default ServicesComponent;
