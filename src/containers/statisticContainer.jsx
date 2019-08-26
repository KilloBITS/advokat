import React from 'react';
import { connect } from 'react-redux';
import StatisticBlock from '../components/statistic'

class StatisticContainer extends React.Component {
  render() {
    return (!this.props.preloader && this.props.statisticData !== null)?<StatisticBlock server={this.props.server} top={this.props.topPosition} statistic={this.props.statisticData}/>:null
  }
}

const mapStateToProps = state => {
  return {
    preloader: state.global.preloader,
    server: state.global.serverURL,
    topPosition: state.global.topPosition,
    statisticData: state.statistic.statisticData
  };
}

export default connect(mapStateToProps)(StatisticContainer);
