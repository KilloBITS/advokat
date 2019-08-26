import React from 'react';
import DivorceContainer from '../containers/divorceContainer';
import MenuContainer from '../containers/menuContainer';

class DivorcePage extends React.Component {
  componentDidMount(){
    document.getElementById('page').scrollTo(0, 0);
  }
  render() {
    return <div className="page divorce">
      <MenuContainer transparent={false}/>
      <div className="pageContent">
        <div className="pageDivorceContainer">
          <DivorceContainer/>
        </div>
      </div>
    </div>
  }
}

export default DivorcePage;
