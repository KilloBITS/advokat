import React from 'react';
import { connect } from 'react-redux';
import BlogBlock from '../components/blog'

class BlogContainer extends React.Component {
  render() {
    return (!this.props.preloader && this.props.blogData !== null)?
      <BlogBlock
        server={this.props.server}
        design={this.props.design}
        blog={this.props.blogData}
        admin={this.props.admin}
      />:null
  }
}

const mapStateToProps = state => {
  return {
    preloader: state.global.preloader,
    server: state.global.serverURL,
    design: state.global.design,
    parent: state.global.parentComponent,
    blogData: state.blog.blogData,
    admin: state.session.admin
  };
}

export default connect(mapStateToProps)(BlogContainer);
