import React from 'react';

class LogotypeIncludes extends React.Component {


  render() {
    return <div className="logoBlock">
      <div className="Logotype" id={this.props.domId}>
        <img src={this.props.logotype} alt=""/>
      </div>
    </div>

  }
}

export default LogotypeIncludes;
