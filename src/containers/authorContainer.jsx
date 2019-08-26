import React from 'react';
import { connect } from 'react-redux';
import AuthorBlock from '../components/author'

class AuthorContainer extends React.Component {
  render() {
    return (!this.props.preloader && this.props.authorData !== null)?<AuthorBlock/>:null
  }
}

const mapStateToProps = state => {
  return {
    preloader: state.global.preloader,
    server: state.global.serverURL,
    aboutData: state.author.authorData
  };
}

export default connect(mapStateToProps)(AuthorContainer);
