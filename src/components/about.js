import React from 'react';
import Title from './includes/title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AboutComponent extends React.Component {
  render() {
    return <div className="block about" id="About">
      <Title data={this.props.about}/>
      <div className="aboutText">
        {this.props.about.text}
      </div>
    </div>
  }
}

export default AboutComponent;
