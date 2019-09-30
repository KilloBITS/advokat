import React from 'react';
import { connect } from 'react-redux';
import NewsBlock from '../components/news'

class NewsContainer extends React.Component {
  render() {
    return (!this.props.preloader && this.props.newsData !== null)
    ?<NewsBlock
      server={this.props.server}
      design={this.props.design}
      news={this.props.newsData}
      admin={this.props.admin}
      />
    :null
  }
}

const mapStateToProps = state => {
  return {
    preloader: state.global.preloader,
    server: state.global.serverURL,
    design: state.global.design,
    newsData: state.news.newsData,
    admin: state.session.admin
  };
}

export default connect(mapStateToProps)(NewsContainer);
