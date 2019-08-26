import React from 'react';
import { connect } from 'react-redux';
import AboutBlock from '../components/about'

class AboutContainer extends React.Component {
  render() {
    return (!this.props.preloader && this.props.aboutData !== null)?<AboutBlock server={this.props.server} design={this.props.design} socials={this.props.socials} about={this.props.aboutData}/>:null
  }
}

const mapStateToProps = state => {
  return {
    preloader: state.global.preloader,
    server: state.global.serverURL,
    design: state.global.design,
    aboutData: state.about.aboutData,
    socials: state.contacts.socials
  };
}

export default connect(mapStateToProps)(AboutContainer);
