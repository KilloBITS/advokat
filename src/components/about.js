import React from 'react';
import Title from './includes/title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AboutComponent extends React.Component {
  render() {
    return <div className="block about" id="About" style={{backgroundColor: this.props.design.aboutBackgroundColor}}>
      <Title data={this.props.about}/>
      <div className="aboutText">
        {this.props.about.text}
        <div className="socialsBlock">
          {(this.props.socials.instagram !== "#")?<a href={this.props.socials.instagram}><FontAwesomeIcon icon={['fab', 'instagram']}/></a>:null}
          {(this.props.socials.facebook !== "#")?<a href={this.props.socials.facebook}><FontAwesomeIcon icon={['fab', 'facebook-square']}/></a>:null}
          {(this.props.socials.linkedin !== "#")?<a href={this.props.socials.linkedin}><FontAwesomeIcon icon={['fab', 'linkedin']}/></a>:null}
          {(this.props.socials.vkontacte !== "#")?<a href={this.props.socials.vkontacte}><FontAwesomeIcon icon={['fab', 'vk']}/></a>:null}
          {(this.props.socials.reddit !== "#")?<a href={this.props.socials.reddit}><FontAwesomeIcon icon={['fab', 'reddit-square']}/></a>:null}
        </div>
        <div className="stamp">
          <img className="absoluteImage" id="stamp" src={this.props.server + "/images/" + this.props.about.stamp} alt=""/>
          <img className="absoluteImage" id="signature" src={this.props.server + "/images/" + this.props.about.signature} alt=""/>
        </div>
      </div>
    </div>
  }
}

export default AboutComponent;
