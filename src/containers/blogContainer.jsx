import React from 'react';
import { connect } from 'react-redux';
import BlogBlock from '../components/blog'
import { setBlog } from '../store/blog/actions';

class BlogContainer extends React.Component {
  render() {
    return (!this.props.preloader && this.props.blogData !== null)?
      <BlogBlock
        server={this.props.server}
        design={this.props.design}
        blog={this.props.blogData}
        admin={this.props.admin}
        setBlog={this.props.setBlog}
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

const mapDispatchProps = {
  setBlog
}

export default connect(mapStateToProps, mapDispatchProps)(BlogContainer);
