import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import './styles/index.css';
import './styles/index.min.css';

import Preloader from './components/includes/preloader.js';
import Buttons from './components/includes/buttons.js';
import Menu from './components/includes/menu.js';

import Head from './components/head.js';
import About from './components/about.js';
import Services from './components/services.js';
import News from './components/news.js';
import Contacts from './components/contacts.js';
import Footer from './components/footer.js';

library.add(fab,fas);

class Application extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      preloader: true,
      menuColor: false,
      server: (window.location.hostname === 'localhost')? (window.location.port === "3000")? window.location.origin.split('3000')[0]+'5004':window.location.origin:window.location.origin,
    }

    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount(){
    console.log('%c Стоп! ', 'font-family: sans-serif; color: #149690; font-size: 40px; text-transform: uppercase; text-align: center');
    console.log('%c Эта функция браузера предназначена для разработчиков! ', 'font-family: sans-serif; color: #149690; font-size: 24px; text-transform: uppercase; text-align: center');
    console.log('%c Служба поддержки сайта: kaleniuk.developer@gmail.com ', 'font-family: sans-serif; color: #149690; font-size: 16px; text-transform: uppercase; text-align: center');
    axios.post(this.state.server+'/getData').then(data => {
      console.log(data);
      if(data.data.code === 200){
        this.setState({
          preloader: false,
          config: data.data.data.config,
          menu: data.data.data.menu,
          head: data.data.data.head,
          about: data.data.data.about
        });
      }
    });
    document.getElementById('root').addEventListener('scroll', this.handleScroll);
  }

  handleScroll(){
    let scrolltop = document.getElementById('root').scrollTop;
    if(scrolltop >= 50){
      this.setState({
        menuColor: true
      });
    }else{
      this.setState({
        menuColor: false
      });
    }
  }

  render(){
    return <div className="page" id="page">
      {(this.state.preloader)?<Preloader/>:null}
      {(!this.state.preloader)?<Buttons/>:null}
      {(!this.state.preloader)?<Menu config={this.state.config} data={this.state.menu} menuColor={(this.state.menuColor)?"#262626":"rgba(38, 38, 38, 0)"}/>:null}
      {(!this.state.preloader)?<Head server={this.state.server} config={this.state.config} head={this.state.head}/>:null}
      {(!this.state.preloader)?<About config={this.state.config} about={this.state.about}/>:null}
      {(!this.state.preloader)?<Services config={this.state.config}/>:null}
      {(!this.state.preloader)?<News config={this.state.config}/>:null}
      {(!this.state.preloader)?<Contacts config={this.state.config}/>:null}
      {(!this.state.preloader)?<Footer config={this.state.config}/>:null}
    </div>
  }
}
ReactDOM.render(<Application />, document.getElementById('root'));
