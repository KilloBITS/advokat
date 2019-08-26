import React from 'react';
import { connect } from 'react-redux';
import MenuBlock from '../components/menu'
import { setOpenClose } from '../store/global/menu/actions';

class MenuContainer extends React.Component {
  render() {
    return (!this.props.preloader && this.props.menuData !== null)?
    <MenuBlock
      menu={this.props.menuData}
      top={this.props.topPosition}
      transparent={this.props.transparent}
      menuOpenClose={this.props.menuOpenClose}
      width={this.props.pageWidth}
      session={this.props.session}
      admin={this.props.admin}
      setOpenClose={this.props.setOpenClose}
    />:null
  }
}

const mapStateToProps = state => {
  return {
    preloader: state.global.preloader,
    server: state.global.serverURL,
    topPosition: state.global.topPosition,
    pageWidth: state.global.displayWidth,
    menuData: state.menu.menuData,
    menuOpenClose: state.menu.menuOpen,
    session: state.session.session,
    admin: state.session.admin
  };
}

const mapDispatchProps = {
  setOpenClose
}

export default connect(mapStateToProps, mapDispatchProps)(MenuContainer);
