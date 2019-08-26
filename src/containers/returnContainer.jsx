import React from 'react';
import { connect } from 'react-redux';
import ReturnBlock from '../components/return'

class DivorceContainer extends React.Component {
  render() {
    return (!this.props.preloader && this.props.returnData !== null)?
      <ReturnBlock
        server={this.props.server}
        return={this.props.returnData}
      />:null
  }
}

const mapStateToProps = state => {
  return {
    preloader: state.global.preloader,
    server: state.global.serverURL,
    returnData: state.divorce.returnData
  };
}

export default connect(mapStateToProps)(DivorceContainer);
