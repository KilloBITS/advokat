import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Tab extends React.Component {
  _isMounted = false;
  constructor(props){
    super(props);
    this.state = {
      server: (window.location.hostname === 'localhost')? (window.location.port === "3000")? window.location.origin.split('3000')[0]+'80':window.location.origin:window.location.origin,
      loaderTab: true
    }
  }

  componentDidMount(){
    this._isMounted = true;
    axios.post(this.state.server+'/getData').then(data => {
      if (this._isMounted) {
        if(data.data.code === 200){
          this.setState({
            loaderTab: false,
            services: data.data.data.services
          });
        }
      }
    });
  }

  componentWillUnmount(){
    this._isMounted = false;
  }
  render() {
    return <div className="tab">
      {(this.state.loaderTab)?<div className="tabLoader"></div>:null}
      <div className="tabTitle">Послуги</div>
      <div className="navBatFromTab">
        <div className="navBarTabBtn">Додати</div>
        <div className="navBarTabBtn">Оновити</div>
      </div>
    </div>
  }
}

export default Tab;
