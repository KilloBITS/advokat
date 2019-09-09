import React from 'react';
import { connect } from 'react-redux';
import SignInBlock from '../components/signin'
import { setAdmin } from '../store/session/actions';

class SignInContainer extends React.Component {
  render() {
    return (!this.props.preloader && this.props.returnData !== null)?
      <SignInBlock
        server={this.props.server}
        setAdmin={this.props.setAdmin}
        config={this.props.config}
      />:null
  }
}

const mapStateToProps = state => {
  return {
    preloader: state.global.preloader,
    server: state.global.serverURL,
    config: state.global.config
  };
}

const mapDispatchProps = {
  setAdmin
}

export default connect(mapStateToProps, mapDispatchProps)(SignInContainer);
