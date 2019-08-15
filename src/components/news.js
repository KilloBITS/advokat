import React from 'react';
import Title from './includes/title';
import Swiper from 'react-id-swiper';
import { Link } from 'react-router-dom';
import Modal from './includes/modal.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/swiper.css';

let parseNews = (data, location, click) => {
  const dataBlock = data.map((comp, key) => <div key={key} className="newsBlockContent">
    <div className="newsLine image">
      <img src={location + '/images/news/' + comp.image} alt=""/>
    </div>
    <div className="newsLine title">{comp.title}</div>
    <div className="newsLine text">{comp.text}</div>
    <div className="newsLine buttons">
      <div id={comp.AI} onClick={click.bind(this)}>Детальніше</div>
    </div>
  </div>);
  return dataBlock
}

const multipleRowSlidesLayout = (stafData, location, click) => {
  const params = {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  }
  return (
    <Swiper {...params}>
      {parseNews(stafData, location, click)}
    </Swiper>
  )
};

const multipleRowSlidesLayoutMobile = (data, location, click) => {
  const params = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  }
  return (
    <Swiper {...params}>
        {parseNews(data, location, click)}
    </Swiper>
  )
};

class NewsComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false,
      dataId: null,
      contentModal: null,
      width: document.body.clientWidth
    }
    this.updateDimensions = this.updateDimensions.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.closeModal = this.closeModal.bind(this)
  }

  handleClick(el){
    this.setState({
      modal: true,
      dataId: el.target.id,
      contentModal: this.props.news.news[parseInt(el.target.id)]
    });
  }

  closeModal(){
    this.setState({
      modal: false,
      dataId: null,
      contentModal: null
    })
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  updateDimensions() {
    this.setState({
      width: document.body.clientWidth
    });
  }
  render() {
    return <div className="block news" id="News" style={{backgroundColor: this.props.design.newsBackgroundColor}}>
      <Title data={this.props.news}/>
      {(this.state.modal)?<Modal open={this.state.modal} name={this.state.contentModal.title} text={this.state.contentModal.text} closeModal={this.closeModal}/>:null}
      <div className="carouselBlock">
        {(this.state.width > 880)?multipleRowSlidesLayout(this.props.news.news,this.props.server, this.handleClick):multipleRowSlidesLayoutMobile(this.props.news.news,this.props.server, this.handleClick)}
      </div>
      <Link to={"/news"}>
        <div className="openFullNewsBTN">Більше новин</div>
      </Link>
    </div>
  }
}

export default NewsComponent;
