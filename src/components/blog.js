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
    {(adm)?<div className="remove_blog" ai={comp.AI} onClick={removeBlog}>Видалити</div>:null}
  </div>);
  return dataBlock
}

class BlogComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      openetModal: false
    }
    this.removeBlog = this.removeBlog.bind(this);
    this.openCloseAddModal = this.openCloseAddModal.bind(this);
  }
  openCloseAddModal(){
    this.setState({openetModal: (this.state.openetModal)?false:true })
  }
  removeBlog(event){
    const increment = event.target.getAttribute("ai");
    if(window.confirm('Ви дійсно хочете видалити запис ?')){
      axios.post(
        this.props.server+'/blog/remove',
        {AI: increment}
      ).then(result => {
        console.log(result.data);
        this.props.setBlog(result.data.data.blog);
      });
    }
  }
  addBlog(event){
    axios.post(
      this.props.server+'/blog/add',
      this.state
    ).then(result => {
      console.log(result.data)
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData() 
    data.append("image", event.target.image.files[0]);
    data.append("title", event.target.title.value);
    data.append("tags", event.target.tags.value);
    data.append("text", event.target.text.value);

    axios.post(this.props.server+'/blog/add', data).then(res => { // then print response status
        console.log(res.data)
      })
  }
  render() {
    return <div className={(this.props.blog.blog !== undefined && this.props.blog.blog.length > 0)?"block blog":"block blog none"} id="Blog" style={{backgroundColor: this.props.design.blogBackgroundColor}}>
      <Title data={this.props.blog}/>
      <div className="blogBlockContentData">
        {(this.props.admin)?<div className="add_blog" onClick={this.openCloseAddModal}>{(this.state.openetModal)?"Закрити":"Додати новий запис"}</div>:null}
        {(this.props.admin && this.state.openetModal)
          ?<div className="addBlocgMOdal">
            <div className="title_addMOdal">Додати запис у блог</div>
            <form encType="multipart/form-data" className="body_addMOadal" onSubmit={this.handleSubmit.bind(this)}>
              <input type="text" name="title" className="add_new_input" placeholder="Введіть заголовок"/>
              <input type="text" name="tags" className="add_new_input" placeholder="Введіть Теги через кому (,)"/>
              <textarea name="text" className="add_new_input textares_blog" placeholder="Введіть текст"></textarea>
              <input type="file" name="image" id="newBlogIMage"/>
              <div className="footer_addMOdal">
                <input type="submit" className="modalFooterButton" value="Сохранить"/>
                <div className="modalFooterButton" onClick={this.openCloseAddModal}>Отмена</div>
              </div>
            </form>
          </div>
          :null
        }
        {(this.props.blog.blog !== undefined && this.props.blog.blog.length > 0)?parseBlog(this.props.blog.blog, this.props.server, this.props.admin, this.removeBlog): null}
      </div>
    </div>
  }
}

export default BlogComponent;
