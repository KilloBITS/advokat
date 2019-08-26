import React from 'react';
import { connect } from 'react-redux';
import DivorceBlock from '../components/divorce'

class DivorceContainer extends React.Component {
  render() {
    return (!this.props.preloader && this.props.blogData !== null)?
      <DivorceBlock
        server={this.props.server}
        divorce={this.props.divorceData}
      />:null
  }
}

const mapStateToProps = state => {
  return {
    preloader: state.global.preloader,
    server: state.global.serverURL,
    divorceData: state.divorce.divorceData
  };
}

export default connect(mapStateToProps)(DivorceContainer);
