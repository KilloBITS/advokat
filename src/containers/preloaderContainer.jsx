import React from 'react';
import { connect } from 'react-redux';

import PreloaderBlock from '../components/preloader'

import { setPreloader, setConfig, setDesign } from '../store/global/actions';
import { setSession, setAdmin } from '../store/session/actions';
import { setMenu } from '../store/global/menu/actions';
import { setBlog } from '../store/blog/actions';
import { setHeadData } from '../store/head/actions';
import { setAbout } from '../store/about/actions';
import { setContacts, setSocials } from '../store/contacts/actions';
import { setNews } from '../store/news/actions';
import { setServices } from '../store/services/actions';
import { setStatistic } from '../store/statistic/actions';
import { setDivorce } from '../store/divorce/actions';
import { setReturn } from '../store/return/actions';

class PreloaderContainer extends React.Component {
  render() {
    return <PreloaderBlock
      preloader={this.props.preloader}
      server={this.props.server}
      setConfig={this.props.setConfig}
      setDesign={this.props.setDesign}
      setPreloader={this.props.setPreloader}
      setAdmin={this.props.setAdmin}
      setSession={this.props.setSession}
      setMenu={this.props.setMenu}
      setHeadData={this.props.setHeadData}
      setAbout={this.props.setAbout}
      setBlog={this.props.setBlog}
      setContacts={this.props.setContacts}
      setSocials={this.props.setSocials}
      setNews={this.props.setNews}
      setServices={this.props.setServices}
      setStatistic={this.props.setStatistic}
      setDivorce={this.props.setDivorce}
      setReturn={this.props.setReturn}
    />
  }
}

const mapStateToProps = state => {
  return {
    server: state.global.serverURL,
    preloader: state.global.preloader
  };
}

const mapDispatchProps = {
  setPreloader,
  setConfig,
  setDesign,
  setMenu,
  setHeadData,
  setAbout,
  setBlog,
  setContacts,
  setSocials,
  setNews,
  setServices,
  setStatistic,
  setDivorce,
  setReturn,
  setAdmin,
  setSession
}

export default connect(mapStateToProps, mapDispatchProps)(PreloaderContainer);
