import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let parseNews = (data, location) => {
  const dataBlock = data.map((comp, key) => <div key={key} className="newsBlockContent">
    <div className="newsLine image">
      <img src={location + '/images/news/' + comp.image} alt=""/>
    </div>
    <div className="newsLine title">{comp.title}</div>
    <div className="newsLine text">{comp.text}</div>
  </div>);
  return dataBlock
}

class Tab extends React.Component {
  _isMounted = false;
  constructor(props){
    super(props);
    this.state = {
      server: (window.location.hostname === 'localhost')? (window.location.port === "3000")? window.location.origin.split('3000')[0]+'80':window.location.origin:window.location.origin,
      loaderTab: true,
      news: null
    }
  }

  componentDidMount(){
    this._isMounted = true;
    axios.post(this.state.server+'/getData').then(data => {
      if (this._isMounted) {
        if(data.data.code === 200){
          this.setState({
            news: data.data.data.news
          });
          setTimeout(() => {
            this.setState({
              loaderTab: false
            });
          }, 1000);
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
      <div className="navBatFromTab">
        <div className="navBarTabBtn">Додати</div>
        <div className="navBarTabBtn">Оновити</div>
      </div>
      {(this.state.news !== null)?<div className="tabContent">
        {parseNews(this.state.news.news, this.state.server)}
      </div>:null}
    </div>
  }
}

export default Tab;
