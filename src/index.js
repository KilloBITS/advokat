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
import Statistic from './components/statistic.js';
import Services from './components/services.js';
import News from './components/news.js';
import Blog from './components/blog.js';
import Contacts from './components/contacts.js';
import Map from './components/map.js';
import Footer from './components/footer.js';

library.add(fab,fas);

class Application extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      scrolltop: 0,
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
          design: data.data.data.design,
          menu: data.data.data.menu,
          head: data.data.data.head,
          about: data.data.data.about,
          statistic: data.data.data.statistic,
          services: data.data.data.services,
          news: data.data.data.news,
          blog: data.data.data.blog,
          contacts: data.data.data.contacts,
          socials: data.data.data.socials
        });
      }
    });
    document.getElementById('root').addEventListener('scroll', this.handleScroll);
  }

  handleScroll(){
    let scrolltop = document.getElementById('root').scrollTop;
    if(scrolltop >= 50){
      this.setState({
        menuColor: true,
        scrolltop: scrolltop
      });
    }else{
      this.setState({
        menuColor: false,
        scrolltop: scrolltop
      });
    }
  }

  render(){
    return <div className="page" id="page">
      {(this.state.preloader)?<Preloader/>:null}
      {(!this.state.preloader)?<Buttons scrollTop={this.state.scrolltop}/>:null}
      {(!this.state.preloader)?<Menu config={this.state.config} data={this.state.menu} menuColor={(this.state.menuColor)?"#262626":"rgba(38, 38, 38, 0)"}/>:null}
      {(!this.state.preloader)?<Head server={this.state.server} config={this.state.config} head={this.state.head}/>:null}
      {(!this.state.preloader)?<About server={this.state.server} config={this.state.config} design={this.state.design} about={this.state.about} socials={this.state.socials}/>:null}
      {(!this.state.preloader)?<Statistic server={this.state.server} config={this.state.config} design={this.state.design} statistic={this.state.statistic} scrollTop={this.state.scrolltop}/>:null}
      {(!this.state.preloader)?<Services server={this.state.server} config={this.state.config} design={this.state.design} services={this.state.services}/>:null}
      {(!this.state.preloader)?<News server={this.state.server} config={this.state.config} design={this.state.design} news={this.state.news}/>:null}
      {(!this.state.preloader)?<Blog server={this.state.server} config={this.state.config} design={this.state.design} blog={this.state.blog}/>:null}
      {(!this.state.preloader)?<Contacts server={this.state.server} config={this.state.config} design={this.state.design} contacts={this.state.contacts} socials={this.state.socials}/>:null}
      {(!this.state.preloader)?<Map/>:null}
      {(!this.state.preloader)?<Footer server={this.state.server} config={this.state.config} design={this.state.design} socials={this.state.socials}/>:null}
    </div>
  }
}
ReactDOM.render(<Application />, document.getElementById('root'));
