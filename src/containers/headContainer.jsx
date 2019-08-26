import React from 'react';
import { connect } from 'react-redux';
import HeadBlock from '../components/head'

class HeadContainer extends React.Component {
  render() {
    return (!this.props.preloader || this.props.headData !== null)?<HeadBlock server={this.props.server} config={this.props.config} head={this.props.headData}/>:null
  }
}

const mapStateToProps = state => {
  return {
    preloader: state.global.preloader,
    server: state.global.serverURL,
    config: state.global.config,
    headData: state.head.headData
  };
}

export default connect(mapStateToProps)(HeadContainer);
