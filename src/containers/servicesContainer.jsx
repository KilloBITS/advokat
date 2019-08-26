import React from 'react';
import { connect } from 'react-redux';
import ServicesBlock from '../components/services'

class ServicesContainer extends React.Component {
  render() {
    return (!this.props.preloader && this.props.servicesData !== null)?<ServicesBlock server={this.props.server} design={this.props.design} services={this.props.servicesData}/>:null
  }
}

const mapStateToProps = state => {
  return {
    preloader: state.global.preloader,
    server: state.global.serverURL,
    design: state.global.design,
    servicesData: state.services.servicesData
  };
}

export default connect(mapStateToProps)(ServicesContainer);
