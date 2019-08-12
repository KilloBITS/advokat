import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FooterComponent extends React.Component {
  render() {
    return <div className="block footer" id="Footer" style={{backgroundColor: this.props.design.footerBackgroundColor}}>

    </div>
  }
}

export default FooterComponent;
