import React from 'react';
import { connect } from 'react-redux';
import FooterBlock from '../components/footer'

class FooterContainer extends React.Component {
  render() {
    return (!this.props.preloader && this.props.contactsData !== null)?<FooterBlock server={this.props.server} design={this.props.design} socials={this.props.socials} menu={this.props.menuData} contacts={this.props.contactsData} config={this.props.config}/>:null
  }
}

const mapStateToProps = state => {
  return {
    preloader: state.global.preloader,
    server: state.global.serverURL,
    contactsData: state.contacts.contactsData,
    menuData: state.menu.menuData,
    design: state.global.design,
    config: state.global.config,
    socials: state.contacts.socials
  };
}

export default connect(mapStateToProps)(FooterContainer);
