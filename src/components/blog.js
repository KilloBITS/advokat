import React from 'react';
import Title from './includes/title';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let parseTags = (tags) => {
  const dataBlock = tags.map((tag, key) => <div key={key} className="tag">
    {tag}
  </div>);
  return dataBlock
}


let parseBlog = (data, location, adm, removeBlog) => {
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
    {(adm)?<div className="remove_blog" ai={comp.AI} onClick={removeBlog}>X</div>:null}
  </div>);
  return dataBlock
}

function getBase64(file) {
   var reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = function () {
     console.log(reader.result);
   };
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
}

class BlogComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      openetModal: false,
      title: '',
      tag: '',
      text: '',
      image: ''
    }
    this.removeBlog = this.removeBlog.bind(this);
    this.addBlog = this.addBlog.bind(this);
    this.openCloseAddModal = this.openCloseAddModal.bind(this);

    this.changeTitle = this.changeTitle.bind(this);
    this.changeTag = this.changeTag.bind(this);
    this.changeText = this.changeText.bind(this);
    this.changeImage = this.changeImage.bind(this);
  }
  openCloseAddModal(){
    this.setState({openetModal: (this.state.openetModal)?false:true })
  }
  removeBlog(event){
    const increment = event.target.getAttribute("ai");
    axios.post(
      this.props.server+'/blog/remove',
      {AI: increment}
    ).then(result => {
      console.log(result.data)
    });
  }
  addBlog(event){
    axios.post(
      this.props.server+'/blog/add',
      this.state
    ).then(result => {
      console.log(result.data)
    });
  }

  changeTitle(event){
    this.setState({title: event.target.value});
  }
  changeTag(event){
    this.setState({tag: event.target.value});
  }
  changeText(event){
    this.setState({text: event.target.value});
  }
  changeImage(event){
    const file = event.target.files[0];
    getBase64(file)
    console.log()
    // this.setState({image: event.target.value});
  }
  render() {
    return <div className={(this.props.blog.blog !== undefined && this.props.blog.blog.length > 0)?"block blog":"block blog none"} id="Blog" style={{backgroundColor: this.props.design.blogBackgroundColor}}>
      <Title data={this.props.blog}/>
      <div className="blogBlockContentData">
        {(this.props.admin)?<div className="add_blog" onClick={this.openCloseAddModal}>{(this.state.openetModal)?"Закрити":"Додати новий запис"}</div>:null}
        {(this.props.admin && this.state.openetModal)
          ?<div className="addBlocgMOdal">
            <div className="title_addMOdal">Додати запис у блог</div>
            <div className="body_addMOadal">
              <input type="text" className="add_new_input" value={this.state.title} onChange={this.changeTitle} placeholder="Введіть заголовок"/>
              <input type="text" className="add_new_input" value={this.state.tag} onChange={this.changeTag} placeholder="Введіть Теги через кому (,)"/>
              <textarea className="add_new_input textares_blog" value={this.state.text} onChange={this.changeText} placeholder="Введіть текст"></textarea>
              <input type="file" id="newBlogIMage" onChange={this.changeImage}/>
            </div>
            <div className="footer_addMOdal">
              <div className="modalFooterButton" onClick={this.addBlog}>Сохранить</div>
              <div className="modalFooterButton" onClick={this.openCloseAddModal}>Отмена</div>
            </div>
          </div>
          :null
        }
        {(this.props.blog.blog !== undefined && this.props.blog.blog.length > 0)?parseBlog(this.props.blog.blog, this.props.server, this.props.admin, this.removeBlog): null}
      </div>
    </div>
  }
}

export default BlogComponent;
