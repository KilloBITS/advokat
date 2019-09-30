import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { setTopPosition, setParrentComponent, setDisplayWidth } from './store/global/actions';
import { setOpenClose } from './store/global/menu/actions';

import MainPage from './pages/main';
import ServicePage from './pages/services';
import BlogPage from './pages/blog';
import DivorcePage from './pages/divorce';
import ContactsPage from './pages/contacts';
import NewsPage from './pages/news';
import ReturnPage from './pages/return';
import OpenBlog from './pages/openBlog';
//global components
import Buttons from './components/includes/buttons.js';
import PreloaderContainer from './containers/preloaderContainer';
import FooterContainer from './containers/footerContainer';
import AuthorContainer from './containers/authorContainer';
//session pages
import SignInPage from './containers/signInContainer';
import SignUpPage from './pages/signup';
//panel pages
import PanelPage from './pages/panel';

class Application extends React.Component{
  constructor(props){
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.open_close_menu = this.open_close_menu.bind(this);
  }
  handleScroll(ev){
    let scrollTopValue = ReactDOM.findDOMNode(ev.target).scrollTop;
    this.props.setTopPosition(scrollTopValue)
  }
  componentDidMount() {
    this.props.setParrentComponent(this.instance);
    this.props.setDisplayWidth(this.instance.offsetWidth);
    this.instance.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    this.instance.removeEventListener('scroll', this.handleScroll);
  }
  open_close_menu(){
    this.props.setOpenClose( (this.props.menuOpenClose)?false:true )
  }


  render(){
    return <div className="page" id="page" ref={(el) => this.instance = el}>
      <PreloaderContainer/>
      <Buttons openclose={this.open_close_menu} open={this.props.menuOpenClose} topPosition={this.props.topPosition}/>
      <Router>
        <Route path="/" exact component={MainPage}/>
        <Route path="/service" exact component={ServicePage}/>
        <Route path="/blog" exact component={BlogPage}/>
        <Route path="/divorce" component={DivorcePage}/>
        <Route path="/contacts" exact component={ContactsPage}/>
        <Route path="/news" exact component={NewsPage}/>
        <Route path="/return" exact component={ReturnPage}/>
        <Route path="/blog/open*" component={OpenBlog}/>

        <Route path="/session/signin" exact component={SignInPage}/>
        <Route path="/panel" exact component={(this.props.isAdmin && this.props.user !== null)?PanelPage:SignInPage}/>
      </Router>
      <FooterContainer/>
      <AuthorContainer/>
    </div>
  }
}

class MainPageContainer extends React.Component {
  render() {
    return <Application
      setTopPosition={this.props.setTopPosition}
      setParrentComponent={this.props.setParrentComponent}
      setOpenClose={this.props.setOpenClose}
      setDisplayWidth={this.props.setDisplayWidth}
      menuOpenClose={this.props.menuOpenClose}
      topPosition={this.props.topPosition}
      isAdmin={this.props.isAdmin}
    />
  }
}

const mapStateToProps = state => {
  return {
    menuOpenClose: state.menu.menuOpen,
    topPosition: state.global.topPosition,
    user: state.global.user,
    isAdmin: state.session.admin
  };
}

const mapDispatchProps = {
  setTopPosition,
  setParrentComponent,
  setDisplayWidth,
  setOpenClose
}

export default connect(mapStateToProps, mapDispatchProps)(MainPageContainer);
