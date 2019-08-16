import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

import Title from '../includes/title.js';
import Menu from '../includes/menu.js';
import Preloader from '../includes/preloader.js';
import Footer from '../footer.js';
import Buttons from '../includes/buttons.js';

let parseNumbers = (numbers) => {
  return numbers.map((number, key) => <a key={key} href={"tel:"+number} className="numbers_a">{number}</a>)
}

class ContactsPage extends React.Component {
  _isMounted = false;
  constructor(props){
    super(props);
    this.state = {
      name: '',
      surname: '',
      number: '',
      email: '',
      massage: '',
      width: document.body.offsetWidth,
      openedMenu: false,
      scrolltop: 0,
      preloader: true,
      menuColor: false,
      server: (window.location.hostname === 'localhost')? (window.location.port === "3000")? window.location.origin.split('3000')[0]+'80':window.location.origin:window.location.origin,
    }
    this.handleScrollNews = this.handleScrollNews.bind(this);
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

  handleInputChange(el){
      switch(el.target.name){
        case "name": this.setState({name: el.target.value}); break;
        case "surname": this.setState({surname: el.target.value}); break;
        case "number": this.setState({number: el.target.value}); break;
        case "email": this.setState({email: el.target.value}); break;
        case "massage": this.setState({massage: el.target.value}); break;
        default: return false;
      }
  }

  handleFormSubmit(){
    axios.post(this.props.server+'/send-message', {text: this.state}).then(res => {
      setTimeout(() => {
        this.setState({
          name: "",
          surname: "",
          number: "",
          email: "",
          message: ""
        })
      },2000)
      return false
    });
  }

  render() {
    return <div className="page contacts">
      {(this.state.preloader)?<Preloader/>:null}
      {(!this.state.preloader)?<Buttons scrollTop={this.state.scrolltop} open={this.state.openedMenu} openclose={this.openCloseMenu.bind(this)}/>:null}
      {(!this.state.preloader)?<Menu config={this.state.config} data={this.state.menu} menuColor={(this.state.width > 800)?(this.state.menuColor)?"#262626":"#262626":"white"} open={this.state.openedMenu}/>:null}
      {(!this.state.preloader)?<div className="pageContent">
        <div className="pageContactsContainer">
          <Title data={this.state.contacts}/>
          <div className="pageContactsContainer">
            <div className="blockDataInlinePage">
              <div className="contactsLine">
                <div className="contactsLineTitle">Адреса</div>
                <a href={"#"}>{this.state.contacts.addres}</a>
              </div>
              <div className="contactsLine">
                <div className="contactsLineTitle">Номер телефону</div>
                {parseNumbers(this.state.contacts.numbers)}
              </div>
              <div className="contactsLine">
                <div className="contactsLineTitle">Електронна пошта</div>
                <a href={"#"}>{this.state.contacts.email}</a>
              </div>
              <div className="contactsLine">
                <div className="contactsLineTitle">Ми в соц. мережах</div>
                {(this.state.socials.instagram !== "#")?<a className="socialContact" href={this.state.socials.instagram}><FontAwesomeIcon icon={['fab', 'instagram']}/></a>:null}
                {(this.state.socials.facebook !== "#")?<a className="socialContact" href={this.state.socials.facebook}><FontAwesomeIcon icon={['fab', 'facebook-square']}/></a>:null}
                {(this.state.socials.linkedin !== "#")?<a className="socialContact" href={this.state.socials.linkedin}><FontAwesomeIcon icon={['fab', 'linkedin']}/></a>:null}
                {(this.state.socials.vkontacte !== "#")?<a className="socialContact" href={this.state.socials.vkontacte}><FontAwesomeIcon icon={['fab', 'vk']}/></a>:null}
                {(this.state.socials.reddit !== "#")?<a className="socialContact" href={this.state.socials.reddit}><FontAwesomeIcon icon={['fab', 'reddit-square']}/></a>:null}
              </div>

            </div>
            <div className="blockDataInlinePage">
              <div className="messageLine">
                <div className="messageLineTitle">Ім'я</div>
                <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange.bind(this)} className="inputForm"/>
              </div>
              <div className="messageLine">
                <div className="messageLineTitle">Прізвище</div>
                <input type="text" name="surname" value={this.state.surname} onChange={this.handleInputChange.bind(this)} className="inputForm"/>
              </div>
              <div className="messageLine">
                <div className="messageLineTitle">Номер телефону</div>
                <input type="text" name="number" value={this.state.number} onChange={this.handleInputChange.bind(this)} className="inputForm"/>
              </div>
              <div className="messageLine">
                <div className="messageLineTitle">Електронна пошта</div>
                <input type="text" name="email" value={this.state.email} onChange={this.handleInputChange.bind(this)} className="inputForm"/>
              </div>
              <div className="messageLine">
                <div className="messageLineTitle">Ваше повідомлення</div>
                <textarea name="massage" value={this.state.message} onChange={this.handleInputChange.bind(this)} className="inputForm areaText">{this.state.message}</textarea>
              </div>
              <div className="messageLine">
                <input type="button" name="submit" value="Відправити" onClick={this.handleFormSubmit.bind(this)} className="submitButton"/>
              </div>
            </div>
          </div>

        </div>
      </div>:null}
      {(!this.state.preloader)?<Footer server={this.state.server} config={this.state.config} design={this.state.design} socials={this.state.socials} menu={this.state.menu} contacts={this.state.contacts} socials={this.state.socials}/>:null}
    </div>
  }
}

export default ContactsPage;
