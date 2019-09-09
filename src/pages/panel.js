import React from 'react';
import MenuContainer from '../containers/menuContainer';

class PanelPage extends React.Component {
  componentDidMount(){
    document.getElementById('page').scrollTo(0, 0);
  }
  render() {
    return <div className="page return">
      <MenuContainer transparent={false}/>
      <div className="pageContent">
        <div className="adminPanel">

        </div>
      </div>
    </div>
  }
}

export default PanelPage;
