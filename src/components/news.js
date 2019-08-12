import React from 'react';
import Title from './includes/title';
import Swiper from 'react-id-swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/swiper.css';

let parseNews = (data, location) => {
  const dataBlock = data.map((comp, key) => <div key={key} className="newsBlockContent">
    <div className="newsLine image">
      <img src={location + '/images/news/' + comp.image} alt=""/>
    </div>
    <div className="newsLine title">{comp.title}</div>
    <div className="newsLine text">{comp.text}</div>
    <div className="newsLine buttons">
      <a href={"#"+comp.AI}>Читати повністю</a>
    </div>
  </div>);
  return dataBlock
}

const multipleRowSlidesLayout = (stafData, location) => {
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
      {parseNews(stafData, location)}
    </Swiper>
  )
};

const multipleRowSlidesLayoutMobile = (data, location) => {
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
        {parseNews(data, location)}
    </Swiper>
  )
};

class NewsComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      width: document.body.clientWidth
    }
    this.updateDimensions = this.updateDimensions.bind(this);
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
      <div className="carouselBlock">
        {(this.state.width > 880)?multipleRowSlidesLayout(this.props.news.news,this.props.server):multipleRowSlidesLayoutMobile(this.props.news.news,this.props.server)}
      </div>
    </div>
  }
}

export default NewsComponent;
