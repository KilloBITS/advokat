import React from 'react';
import axios from 'axios';
import Title from './includes/title';
import Swiper from 'react-id-swiper';
import { Link } from 'react-router-dom';
import Modal from './includes/modal.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/swiper.css';

let parseNews = (data, location, click, adm, removeNews) => {
  const dataBlock = data.map((comp, key) => <div key={key} className="newsBlockContent">
    {(adm)?<div className="remove_news" ai={comp.AI} onClick={removeNews}>Видалити</div>:null}
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

const multipleRowSlidesLayout = (stafData, location, click, adm, removeNews) => {
  const params = {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  }
  return (
    <Swiper {...params}>
      {parseNews(stafData, location, click, adm, removeNews)}
    </Swiper>
  )
};

const multipleRowSlidesLayoutMobile = (data, location, click, adm, removeNews) => {
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
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
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
        {parseNews(data, location, click, adm, removeNews)}
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
      width: document.body.clientWidth,
      openetModal: false,
      isLoaderModal: false,
      loaderStatusL: 0
    }
    this.removeNews = this.removeNews.bind(this);
    this.openCloseAddModal = this.openCloseAddModal.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.closeModal = this.closeModal.bind(this)
  }
  openCloseAddModal(){
    this.setState({openetModal: (this.state.openetModal)?false:true })
  }
  removeNews(event){
    const increment = event.target.getAttribute("ai");
    if(window.confirm('Ви дійсно хочете видалити запис ?')){
      this.setState({modal: true})
      axios.post(
        this.props.server+'/news/remove',
        {AI: increment}
      ).then(result => {
        // this.props.setNews(result.data.news);
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({isLoaderModal: true})
    let data = new FormData()
    data.append("image", event.target.image.files[0]);
    data.append("title", event.target.title.value);
    data.append("text", event.target.text.value);
    axios.post(this.props.server+'/news/add', data).then(res => { // then print response status
      // this.props.setNews(res.data.news);
      this.setState({openetModal: (this.state.openetModal)?false:true }, () => {
        this.setState({isLoaderModal: false});
      })
    })
  }

  handleClick(el){
    this.setState({
      modal: true,
      dataId: el.target.id,
      contentModal: this.props.news.news.find(x => x.AI === parseInt(el.target.id) )
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
      {(this.state.modal)
        ?<Modal open={this.state.modal} name={this.state.contentModal.title} text={this.state.contentModal.text} closeModal={this.closeModal}/>
        :null
      }
      <div className="isPage miniTitle">Останні новини</div>
      <div className="carouselBlock">
      {(this.props.admin)?<div className="add_blog" onClick={this.openCloseAddModal}>{(this.state.openetModal)?"Закрити":"Додати новину"}</div>:null}
      {(this.props.admin && this.state.openetModal)
        ?<div className="addBlocgMOdal">
          <div className={(this.state.isLoaderModal)?"modalLoader show":"modalLoader"}></div>
          <div className="title_addMOdal">Додати новину</div>
          <form encType="multipart/form-data" className="body_addMOadal" onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" name="title" className="add_new_input" placeholder="Введіть заголовок новини"/>
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
      {(this.props.news.news.length > 0)
        ?(this.state.width > 880)?multipleRowSlidesLayout(this.props.news.news, this.props.server, this.handleClick, this.props.admin, this.removeNews):multipleRowSlidesLayoutMobile(this.props.news.news,this.props.server, this.handleClick, this.props.admin, this.removeNews)
        :<div className="notDataFound">Данні відсутні</div>
      }
      </div>
      <div className="isPage fullNews">
        <div className="miniTitle">Всі новини</div>
        {(this.props.news.news.length > 0)?parseNews(this.props.news.news, this.props.server, this.handleClick):<div className="notDataFound">Данні відсутні</div>}
      </div>
      <div className="isPage openFullNewsBTN">Показати більше</div>
    </div>
  }
}

export default NewsComponent;
