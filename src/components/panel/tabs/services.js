import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let parseService = (services, server, click) => {
    const serviceData = services.map((res, key) =>
      <div key={key} className="service_block">
        <div className="buttons_container_tab">
          <div className="tab_block_btn edit"><FontAwesomeIcon icon={['fas', 'edit']}/></div>
          <div className="tab_block_btn remove"><FontAwesomeIcon icon={['fas', 'times']}/></div>
        </div>
        <div className="setrviceLine image">
          <img src={server + "/images/services/" +res.icon} alt=""/>
        </div>
        <div className="setrviceLine title">{res.name}</div>
        <div className="setrviceLine text">{res.miniText}</div>

      </div>
    );
    return serviceData
}

class Tab extends React.Component {
  _isMounted = false;
  constructor(props){
    super(props);
    this.state = {
      server: (window.location.hostname === 'localhost')? (window.location.port === "3000")? window.location.origin.split('3000')[0]+'80':window.location.origin:window.location.origin,
      loaderTab: true,
      services: null
    }
  }
  componentDidMount(){
    this._isMounted = true;
    axios.post(this.state.server+'/getData').then(data => {
      if (this._isMounted) {
        if(data.data.code === 200){
          console.log(data.data.data.services)
          this.setState({
            loaderTab: false,
            services: data.data.data.services
          });
        }
      }
    });
  }
  componentWillUnmount(){
    this._isMounted = false;
  }
  render() {
    return <div className="tab">
      {(this.state.loaderTab)?<div className="tabLoader"></div>:null}
      <div className="navBatFromTab">
        <div className="navBatTitle">Навігація</div>
        <div className="navBarTabBtn">Додати</div>
        <div className="navBarTabBtn">Оновити</div>
        <div className="navBatTitle">Статистика</div>
        <div className="navBarTabBtn">{(this.state.services !== null)?"Кількість: "+this.state.services.services.length:"Данні відсутні"}</div>
      </div>
      {(this.state.services !== null)?<div className="tabContent">
        {parseService(this.state.services.services, this.state.server)}
      </div>:null}
    </div>
  }
}

export default Tab;
