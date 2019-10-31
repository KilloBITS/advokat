import React from 'react';
import axios from 'axios';
import MenuContainer from '../containers/menuContainer';

class OpenBlogPage extends React.Component {
  componentDidMount(){
    document.getElementById('page').scrollTo(0, 0);
  }
  render() {
    return <div className="page blog">
      <MenuContainer transparent={false}/>
      <div className="pageContent">
        <div className="pageServiceContainer">
          123
        </div>
      </div>
    </div>
  }
}

export default OpenBlogPage;
