import React from 'react';
import { Link } from 'react-router-dom';

import MenuContainer from '../containers/menuContainer';
import HeadContainer from '../containers/headContainer';
import AboutContainer from '../containers/aboutContainer';
import StatisticContainer from '../containers/statisticContainer';
import ServicesContainer from '../containers/servicesContainer';
import NewsContainer from '../containers/newsContainer';
import BlogContainer from '../containers/blogContainer';
import ContactsContainer from '../containers/contactsContainer';
import MapContainer from '../containers/mapContainer';

class MainPage extends React.Component {
  render() {
    return <div className="staticContent">
      <MenuContainer transparent={true}/>
      <HeadContainer/>
      <AboutContainer/>
      <StatisticContainer/>
      <ServicesContainer/>
      <NewsContainer/>
      <Link to={"/news"}>
        <div className="openFullNewsBTN">Більше новин</div>
      </Link>
      <BlogContainer/>
      <Link to={"/blog"}>
        <div className="openFullNewsBTN">Читати блог</div>
      </Link>
      <ContactsContainer/>
      <MapContainer/>
    </div>
  }
}

export default MainPage;
