import React from 'react';
import { connect } from 'react-redux';
import ContactsBlock from '../components/contacts'

class ContactsContainer extends React.Component {
  render() {
    return (!this.props.preloader && this.props.contactsData !== null)?<ContactsBlock server={this.props.server} design={this.props.design} socials={this.props.socials} contacts={this.props.contactsData}/>:null
  }
}

const mapStateToProps = state => {
  return {
    preloader: state.global.preloader,
    server: state.global.serverURL,
    design: state.global.design,
    contactsData: state.contacts.contactsData,
    socials: state.contacts.socials
  };
}

export default connect(mapStateToProps)(ContactsContainer);
