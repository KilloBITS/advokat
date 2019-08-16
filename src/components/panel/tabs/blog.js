import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let parseTags = (tags) => {
  const dataBlock = tags.map((tag, key) => <div key={key} className="tag">
    {tag}
  </div>);
  return dataBlock
}

let parseBlog = (data, location) => {
  const dataBlock = data.map((comp, key) => <div key={key} id={"blog_"+key} className="blogBlockContent">
    <div className="buttons_container_tab">
      <div className="tab_block_btn edit"><FontAwesomeIcon icon={['fas', 'edit']}/></div>
      <div className="tab_block_btn remove"><FontAwesomeIcon icon={['fas', 'times']}/></div>
    </div>
    <div className="blogLine image">
      <img src={location + '/images/blog/' + comp.image} alt=""/>
    </div>
    <div className="blogLine title">{comp.title}</div>
    <div className="blogLine text">{comp.text}</div>
    <div className="blogLine date">{comp.date}</div>
    <div className="blogLine tags">
      {parseTags(comp.tags.split(","))}
    </div>
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
      blog: null
    }
  }
  componentDidMount(){
    this._isMounted = true;
    axios.post(this.state.server+'/getData').then(data => {
      if (this._isMounted) {
        if(data.data.code === 200){
          this.setState({
            loaderTab: false,
            blog: data.data.data.blog
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
      <div className="navBatFromTab">
        <div className="navBatTitle">Навігація</div>
        <div className="navBarTabBtn">Додати</div>
        <div className="navBarTabBtn">Оновити</div>
        <div className="navBatTitle">Статистика</div>
        <div className="navBarTabBtn">{(this.state.blog !== null)?"Кількість: "+this.state.blog.blog.length:"Данні відсутні"}</div>
      </div>
      {(this.state.blog !== null)?<div className="tabContent">
        {parseBlog(this.state.blog.blog, this.state.server)}
      </div>:null}
    </div>
  }
}

export default Tab;
