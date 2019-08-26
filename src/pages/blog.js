import React from 'react';
import BlogContainer from '../containers/blogContainer';
import MenuContainer from '../containers/menuContainer';

class BlogPage extends React.Component {
  componentDidMount(){
    document.getElementById('page').scrollTo(0, 0);
  }
  render() {
    return <div className="page blog">
      <MenuContainer transparent={false}/>
      <div className="pageContent">
        <div className="pageServiceContainer">
          <BlogContainer/>
        </div>
      </div>
    </div>
  }
}

export default BlogPage;
