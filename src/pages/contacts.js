import React from 'react';
import ContactsContainer from '../containers/contactsContainer';
import MapContainer from '../containers/mapContainer';
import MenuContainer from '../containers/menuContainer';

class ContactsPage extends React.Component {
  componentDidMount(){
    document.getElementById('page').scrollTo(0, 0);
  }
  render() {
    return <div className="page contacts">
      <MenuContainer transparent={false}/>
      <div className="pageContent">
        <div className="pageContactsContainer">
          <ContactsContainer/>
          <MapContainer/>
        </div>
      </div>
    </div>
  }
}

export default ContactsPage;
