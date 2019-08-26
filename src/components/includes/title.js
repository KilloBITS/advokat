import React from 'react';
import HeadingArt from './heading'

class Title extends React.Component {
  render() {
    return <div className="title_block">
      <div className="thisTitle" style={{color: this.props.data.titleColor}}>{this.props.data.title}</div>
      <div className="thisSubTitle" style={{color: this.props.data.titleSubColor}}>{this.props.data.subtitle}</div>
      <div className="bdt-heading-style"><HeadingArt fill={this.props.data.titleColor}/></div>
    </div>
  }
}

export default Title;
