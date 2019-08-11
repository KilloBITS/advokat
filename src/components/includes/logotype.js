import React from 'react';
import Vivus from "vivus";

class LogotypeIncludes extends React.Component {
  componentDidMount() {
    new Vivus('Logotype', {file: this.props.logotype });
  };

  render() {
    return <div className="logoBlock">
      <div className="Logotype" id="Logotype"></div>
    </div>

  }
}

export default LogotypeIncludes;
