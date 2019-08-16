import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalNews from '../modalNews.js';

let parseNews = (data, location, edite) => {
  const dataBlock = data.map((comp, key) => <div key={key} className="newsBlockContent">
    <div className="buttons_container_tab">
      <div className="tab_block_btn edit" onClick={edite.bind(this)}><FontAwesomeIcon icon={['fas', 'edit']}/></div>
      <div className="tab_block_btn remove"><FontAwesomeIcon icon={['fas', 'times']}/></div>
    </div>
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
      news: null,
      modalData: null,
      openModalData: false
    }
  }
  updateData(){
    this.setState({
      loaderTab: true
    });
    axios.post(this.state.server+'/getData').then(data => {
      if (this._isMounted) {
        if(data.data.code === 200){
          this.setState({
            loaderTab: false,
            news: data.data.data.news
          });
        }
      }
    });
  }
  openCloseModal(){
    this.setState({
      openModalData: (this.state.openModalData)?false:true
    });
  }
  componentDidMount(){
    this._isMounted = true;
    this.updateData();
  }
  componentWillUnmount(){
    this._isMounted = false;
  }
  render() {
    return <div className="tab">
      {(this.state.loaderTab)?<div className="tabLoader"></div>:null}
      <ModalNews modalData={this.state.modalData} opened={this.state.openModalData}/>
      <div className="navBatFromTab">
        <div className="navBatTitle">Навігація</div>
        <div className="navBarTabBtn" onClick={this.openCloseModal.bind(this)}>Додати</div>
        <div className="navBarTabBtn" onClick={this.updateData.bind(this)}>Оновити</div>
        <div className="navBatTitle">Статистика</div>
        <div className="navBarTabBtn">{(this.state.news !== null)?"Кількість: "+this.state.news.news.length:"Данні відсутні"}</div>
      </div>
      {(this.state.news !== null)?<div className="tabContent">
        {parseNews(this.state.news.news, this.state.server, this.openCloseModal.bind(this))}
      </div>:null}
    </div>
  }
}

export default Tab;
