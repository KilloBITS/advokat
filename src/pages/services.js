import React from 'react';
import MenuContainer from '../containers/menuContainer';
import ServicesContainer from '../containers/servicesContainer';

class ServicesPage extends React.Component {
  componentDidMount(){
    document.getElementById('page').scrollTo(0, 0);
  }
  render() {
    return <div className="page services">
      <MenuContainer transparent={false}/>
      <div className="pageContent">
        <div className="pageServiceContainer">
          <ServicesContainer/>
        </div>
      </div>
    </div>
  }
}

export default ServicesPage;
