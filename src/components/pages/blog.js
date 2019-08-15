import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

import Title from '../includes/title.js';
import Menu from '../includes/menu.js';
import Preloader from '../includes/preloader.js';
import Footer from '../footer.js';

let parseTags = (tags) => {
  const dataBlock = tags.map((tag, key) => <div key={key} className="tag">
    {tag}
  </div>);
  return dataBlock
}

let parseBlog = (data, location, click) => {
  data.reverse();
  const dataBlock = data.map((comp, key) => <div key={key} id={"blog_"+key} className="blogBlockContent">
    <div className="blogLine image">
      <img src={location + '/images/blog/' + comp.image} alt=""/>
    </div>
    <div className="blogLine title">{comp.title}</div>
    <div className="blogLine text">{comp.text}</div>
    <div className="blogLine date">{comp.date}</div>
    <div className="blogLine tags">
      {parseTags(comp.tags.split(","))}
    </div>
    <div className="blogLine buttons">
      <div this-id={"blog_"+key} onClick={click.bind(this)}>Детальніше</div>
    </div>
  </div>);
  return dataBlock
}

class BlogPage extends React.Component {
  _isMounted = false;
  constructor(props){
    super(props);
    this.state = {
      scrolltop: 0,
      preloader: true,
      menuColor: false,
      server: (window.location.hostname === 'localhost')? (window.location.port === "3000")? window.location.origin.split('3000')[0]+'5004':window.location.origin:window.location.origin,
    }
    this.handleScrollBlog = this.handleScrollBlog.bind(this);
    this.openBlogBlock = this.openBlogBlock.bind(this);
  }

  openBlogBlock(el){
    let documentBlock = document.getElementById(el.target.getAttribute('this-id'));
    if(documentBlock.className === "blogBlockContent"){
      documentBlock.className = "blogBlockContent open"
    }else{
      documentBlock.className = "blogBlockContent"
    }
  }

  componentDidMount(){
    console.clear();
    this._isMounted = true;
    axios.post(this.state.server+'/getData').then(data => {
      if (this._isMounted) {
        if(data.data.code === 200){
          this.setState({
            preloader: false,
            config: data.data.data.config,
            design: data.data.data.design,
            menu: data.data.data.menu,
            blog: data.data.data.blog,
            contacts: data.data.data.contacts,
            socials: data.data.data.socials
          });
        }
      }
    });
    document.getElementById('root').addEventListener('scroll', this.handleScroll);
  }
  handleScrollBlog(){
    let scrolltop = document.getElementById('root').scrollTop;
    if(scrolltop >= 50){
      this.setState({
        menuColor: true,
        scrolltop: scrolltop
      });
    }else{
      this.setState({
        menuColor: false,
        scrolltop: scrolltop
      });
    }
  }
  componentWillUnmount(){
    this._isMounted = false;
    console.log('Деструкция страницы')
  }
  render() {
    return <div className="page blog">
      {(this.state.preloader)?<Preloader/>:null}
      {(!this.state.preloader)?<Menu config={this.state.config} data={this.state.menu} menuColor={(this.state.menuColor)?"#262626":"#262626"}/>:null}
      {(!this.state.preloader)?<div className="pageContent">
        <div className="pageServiceContainer">
          <Title data={this.state.blog}/>
          {(this.state.blog.blog !== undefined && this.state.blog.blog.length > 0)?parseBlog(this.state.blog.blog, this.state.server, this.openBlogBlock): null}
          <div className="viewAllButton">Показати більше</div>
        </div>
      </div>:null}
      {(!this.state.preloader)?<Footer server={this.state.server} config={this.state.config} design={this.state.design} socials={this.state.socials} menu={this.state.menu} contacts={this.state.contacts} socials={this.state.socials}/>:null}
    </div>
  }
}

export default BlogPage;
