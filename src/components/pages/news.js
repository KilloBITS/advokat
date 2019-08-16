import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import Modal from '../includes/modal.js';
import Title from '../includes/title.js';
import Menu from '../includes/menu.js';
import Preloader from '../includes/preloader.js';
import Footer from '../footer.js';
import Buttons from '../includes/buttons.js';

let parseNews = (data, location, click) => {
  const dataBlock = data.map((comp, key) => <div key={key} className="newsBlockContent">
    <div className="newsLine image">
      <img src={location + '/images/news/' + comp.image} alt=""/>
    </div>
    <div className="newsLine title">{comp.title}</div>
    <div className="newsLine text">{comp.text}</div>
    <div className="newsLine buttons">
      <div id={comp.AI} onClick={click.bind(this)}>Детальніше</div>
    </div>
  </div>);
  return dataBlock
}

class NewsPage extends React.Component {
  _isMounted = false;
  constructor(props){
    super(props);
    this.state = {
      width: document.body.offsetWidth,
      openedMenu: false,
      modal: false,
      dataId: null,
      contentModal: null,
      scrolltop: 0,
      preloader: true,
      menuColor: false,
      server: (window.location.hostname === 'localhost')? (window.location.port === "3000")? window.location.origin.split('3000')[0]+'80':window.location.origin:window.location.origin,
    }
    this.handleClick = this.handleClick.bind(this);
    this.closeModal = this.closeModal.bind(this)
    this.handleScrollNews = this.handleScrollNews.bind(this);
  }

  handleClick(el){
    this.setState({
      modal: true,
      dataId: el.target.id,
      contentModal: this.state.news.news[parseInt(el.target.id)]
    });
  }

  closeModal(){
    this.setState({
      modal: false,
      dataId: null,
      contentModal: null
    })
  }

  componentDidMount(){
    console.clear();
    this._isMounted = true;
    axios.post(this.state.server+'/getData').then(data => {
      if (this._isMounted) {
        if(data.data.code === 200){
          this.setState({
            preloader: false,
            config: data.data.data.config,
            design: data.data.data.design,
            menu: data.data.data.menu,
            news: data.data.data.news,
            contacts: data.data.data.contacts,
            socials: data.data.data.socials
          });
        }
      }
    });
    document.getElementById('root').addEventListener('scroll', this.handleScroll);
  }
  handleScrollNews(){
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
  componentWillUnmount(){
    this._isMounted = false;
    console.log('Деструкция страницы')
  }

  openCloseMenu(){
    this.setState({
      openedMenu: (this.state.openedMenu)?false:true
    });
  }
  render() {
    return <div className="page news">
      {(this.state.preloader)?<Preloader/>:null}
      {(!this.state.preloader)?<Buttons scrollTop={this.state.scrolltop} open={this.state.openedMenu} openclose={this.openCloseMenu.bind(this)}/>:null}
      {(!this.state.preloader)?<Menu config={this.state.config} data={this.state.menu} menuColor={(this.state.width > 800)?(this.state.menuColor)?"#262626":"#262626":"white"} open={this.state.openedMenu}/>:null}
      {(!this.state.preloader)?<div className="pageContent">
        <div className="pageNewsContainer">
          <Title data={this.state.news}/>
          {(this.state.modal)?<Modal open={this.state.modal} name={this.state.contentModal.title} text={this.state.contentModal.text} closeModal={this.closeModal}/>:null}
          {parseNews(this.state.news.news, this.state.server, this.handleClick)}
          <div className="viewAllButton">Показати більше</div>
        </div>
      </div>:null}
      {(!this.state.preloader)?<Footer server={this.state.server} config={this.state.config} design={this.state.design} socials={this.state.socials} menu={this.state.menu} contacts={this.state.contacts} socials={this.state.socials}/>:null}
    </div>
  }
}

export default NewsPage;
