import React from 'react';
import Title from './includes/title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class BlogComponent extends React.Component {
  render() {
    return <div className="block blog" id="Blog" style={{backgroundColor: this.props.design.blogBackgroundColor}}>
      <Title data={this.props.blog}/>
    </div>
  }
}

export default BlogComponent;
