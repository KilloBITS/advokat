import React from 'react';
import Logotype from './includes/logotype';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let parseNavigation = (dataMenu) => {
    const menuBtn = dataMenu.map((btn, key) => <div key={key} className="menu_btn">{btn.title}</div>);
    return menuBtn
}

let parseNumbers = (numbers) => {
  return numbers.map((number, key) => <a key={key} href={"tel:"+number} className="numbers_a">{number}</a>)
}

class FooterComponent extends React.Component {
  render() {
    return <div className="block footer" id="Footer" style={{backgroundColor: this.props.design.footerBackgroundColor}}>
      <div className="footerCenterBlock">
        <div className="footerContent left">
          {parseNavigation(this.props.menu)}
          <div className="menu_btn">Працівникам</div>
        </div>
        <div className="footerContent center">
          <div className="footer_logotype">
            <Logotype domId="footerLogo" logotype={this.props.server + "/images/" +this.props.config.logo} logoColor={this.props.config.logoColor}/>
          </div>
        </div>
        <div className="footerContent right">
          <div className="footerContactsLine">
            <div className="contactsLineTitle">Адреса</div>
            <a onClick={() => {return false;}}>{this.props.contacts.addres}</a>
          </div>
          <div className="footerContactsLine">
            <div className="contactsLineTitle">Номер телефону</div>
            {parseNumbers(this.props.contacts.numbers)}
          </div>
          <div className="footerContactsLine">
            <div className="contactsLineTitle">Електронна пошта</div>
            <a href={"mainto:"+this.props.contacts.email}>{this.props.contacts.email}</a>
          </div>
          <div className="footerContactsLine">
            <div className="contactsLineTitle">Ми в соц. мережах</div>
            {(this.props.socials.instagram !== "#")?<a className="socialContact" href={this.props.socials.instagram}><FontAwesomeIcon icon={['fab', 'instagram']}/></a>:null}
            {(this.props.socials.facebook !== "#")?<a className="socialContact" href={this.props.socials.facebook}><FontAwesomeIcon icon={['fab', 'facebook-square']}/></a>:null}
            {(this.props.socials.linkedin !== "#")?<a className="socialContact" href={this.props.socials.linkedin}><FontAwesomeIcon icon={['fab', 'linkedin']}/></a>:null}
            {(this.props.socials.vkontacte !== "#")?<a className="socialContact" href={this.props.socials.vkontacte}><FontAwesomeIcon icon={['fab', 'vk']}/></a>:null}
            {(this.props.socials.reddit !== "#")?<a className="socialContact" href={this.props.socials.reddit}><FontAwesomeIcon icon={['fab', 'reddit-square']}/></a>:null}
          </div>
        </div>
      </div>
    </div>
  }
}

export default FooterComponent;
