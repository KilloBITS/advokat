import React from 'react';
import Title from './includes/title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ContactsComponent extends React.Component {
  render() {
    return <div className="block contacts" id="Contacts" style={{backgroundColor: this.props.design.contactsBackgroundColor}}>
      <Title data={this.props.contacts}/>
    </div>
  }
}

export default ContactsComponent;
