import React from 'react';
import Vivus from "vivus";

class LogotypeIncludes extends React.Component {
  componentDidMount() {
    new Vivus(this.props.domId, {file: this.props.logotype });
  };

  render() {
    return <div className="logoBlock">
      <div className="Logotype" id={this.props.domId}></div>
    </div>

  }
}

export default LogotypeIncludes;
