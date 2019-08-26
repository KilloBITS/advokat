import React from 'react';
import NewsContainer from '../containers/newsContainer';
import MenuContainer from '../containers/menuContainer';

class NewsPage extends React.Component {
  componentDidMount(){
    document.getElementById('page').scrollTo(0, 0);
  }
  render() {
    return <div className="page news">
      <MenuContainer transparent={false}/>
      <div className="pageContent">
        <div className="pageDivorceContainer">
          <NewsContainer/>
        </div>
      </div>
    </div>
  }
}

export default NewsPage;
