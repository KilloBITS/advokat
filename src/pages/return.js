import React from 'react';
import ReturnContainer from '../containers/returnContainer';
import MenuContainer from '../containers/menuContainer';

class BlogPage extends React.Component {
  componentDidMount(){
    document.getElementById('page').scrollTo(0, 0);
  }
  render() {
    return <div className="page return">
      <MenuContainer transparent={false}/>
      <div className="pageContent">
        <div className="pageReturnContainer">
          <ReturnContainer/>
        </div>
      </div>
    </div>
  }
}

export default BlogPage;
