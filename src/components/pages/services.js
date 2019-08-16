import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

import Title from '../includes/title.js';
import Menu from '../includes/menu.js';
import Preloader from '../includes/preloader.js';
import Footer from '../footer.js';
import Buttons from '../includes/buttons.js';

let parseServices = (services, onclick) => {
  return services.services.map((service, key) => <div key={key} className="pageServiceBlock">
    <div className="openCloseThisBlock" onClick={onclick.bind(this)} this-id={"block"+key}>+</div>
    <div className="page_serviceTitle">{service.name}</div>
    <div className="page_serviceText" id={"block"+key}>{service.fullText}</div>
  </div>);
}

class ServicesPage extends React.Component {
  _isMounted = false;
  constructor(props){
    super(props);
    this.state = {
      width: document.body.offsetWidth,
      openedMenu: false,
      scrolltop: 0,
      menuColor: false,
      preloader: true,
      server: (window.location.hostname === 'localhost')? (window.location.port === "3000")? window.location.origin.split('3000')[0]+'5004':window.location.origin:window.location.origin,
    }
    this.handleScrollServices = this.handleScrollServices.bind(this);
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
            services: data.data.data.services,
            contacts: data.data.data.contacts,
            socials: data.data.data.socials
          });
        }
      }
    });
    document.getElementById('root').addEventListener('scroll', this.handleScrollServices);
  }

  openCloseMenu(){
    this.setState({
      openedMenu: (this.state.openedMenu)?false:true
    });
  }

  handleScrollServices(){
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
  openTextBlock(el){
    let documentBlock = document.getElementById(el.target.getAttribute('this-id'));
    if(documentBlock.className === "page_serviceText"){
      documentBlock.className = "page_serviceText open"
    }else{
      documentBlock.className = "page_serviceText"
    }
  }
  componentWillUnmount(){
    this._isMounted = false;
    console.log('Деструкция страницы')
  }
  render() {
    return <div className="page services">
      {(this.state.preloader)?<Preloader/>:null}
      {(!this.state.preloader)?<Buttons scrollTop={this.state.scrolltop} open={this.state.openedMenu} openclose={this.openCloseMenu.bind(this)}/>:null}
      {(!this.state.preloader)?<Menu config={this.state.config} data={this.state.menu} menuColor={(this.state.width > 800)?(this.state.menuColor)?"#262626":"#262626":"white"} open={this.state.openedMenu}/>:null}
      {(!this.state.preloader)?<div className="pageContent">
        <div className="pageServiceContainer">
          <Title data={this.state.services}/>
          {parseServices(this.state.services, this.openTextBlock)}
        </div>
      </div>:null}
      {(!this.state.preloader)?<Footer server={this.state.server} config={this.state.config} design={this.state.design} socials={this.state.socials} menu={this.state.menu} contacts={this.state.contacts} socials={this.state.socials}/>:null}
    </div>
  }
}

export default ServicesPage;
