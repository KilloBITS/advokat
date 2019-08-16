import React from 'react';
import Title from './includes/title';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let parseTags = (tags) => {
  const dataBlock = tags.map((tag, key) => <div key={key} className="tag">
    {tag}
  </div>);
  return dataBlock
}

let parseBlog = (data, location) => {
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
  </div>);
  return dataBlock
}

class BlogComponent extends React.Component {
  render() {
    return <div className={(this.props.blog.blog !== undefined && this.props.blog.blog.length > 0)?"block blog":"block blog none"} id="Blog" style={{backgroundColor: this.props.design.blogBackgroundColor}}>
      <Title data={this.props.blog}/>
      <div className="blogBlockContentData">
        {(this.props.blog.blog !== undefined && this.props.blog.blog.length > 0)?parseBlog(this.props.blog.blog, this.props.server): null}
      </div>
      <Link to={"/blog"}>
        <div className="openFullNewsBTN">Читати блог</div>
      </Link>
    </div>
  }
}

export default BlogComponent;
