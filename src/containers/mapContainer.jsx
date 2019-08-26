import React from 'react';
import { connect } from 'react-redux';
import MapBlock from '../components/map'

class MapContainer extends React.Component {
  render() {
    return (!this.props.preloader && this.props.contactsData !== null)?<MapBlock contacts={this.props.contactsData}/>:null
  }
}

const mapStateToProps = state => {
  return {
    preloader: state.global.preloader,
    server: state.global.serverURL,
    contactsData: state.contacts.contactsData
  };
}

export default connect(mapStateToProps)(MapContainer);
