import React from 'react';
import '../../styles/panel/panel.css';

import Main from './tabs/main.js';
import News from './tabs/news.js';
import Services from './tabs/services.js';
import Design from './tabs/design.js';
import Statistic from './tabs/statistic.js';
import Users from './tabs/users.js';
import Blog from './tabs/blog.js';

class Panel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      clickTab: 0
    }
  }

  clickTab(el){
    document.getElementsByClassName("panel_head_btn active")[0].className = "panel_head_btn";
    el.target.className = "panel_head_btn active"
    this.setState({clickTab: parseInt(el.target.getAttribute("tab"))});
  }
  render() {
    return <div className="support_panel" id="panel">
      <div className="panel_head_block">
        <div className="panel_head_btn active" tab="0" onClick={this.clickTab.bind(this)}>Головна</div>
        <div className="panel_head_btn" tab="1" onClick={this.clickTab.bind(this)}>Новини</div>
        <div className="panel_head_btn" tab="2" onClick={this.clickTab.bind(this)}>Послуги</div>
        <div className="panel_head_btn" tab="3" onClick={this.clickTab.bind(this)}>Дизайн</div>
        <div className="panel_head_btn" tab="4" onClick={this.clickTab.bind(this)}>Статистика</div>
        <div className="panel_head_btn" tab="5" onClick={this.clickTab.bind(this)}>Користувачі</div>
        <div className="panel_head_btn" tab="6" onClick={this.clickTab.bind(this)}>Блог</div>
        <div className="panel_head_btn isRight" onClick={this.clickTab.bind(this)}>Вийти</div>
      </div>

      <div className="panel_tab_blocks">
        {(this.state.clickTab === 0)?<Main/>:null}
        {(this.state.clickTab === 1)?<News/>:null}
        {(this.state.clickTab === 2)?<Services/>:null}
        {(this.state.clickTab === 3)?<Design/>:null}
        {(this.state.clickTab === 4)?<Statistic/>:null}
        {(this.state.clickTab === 5)?<Users/>:null}
        {(this.state.clickTab === 6)?<Blog/>:null}
      </div>

      <div className="closePanel">Закрити панель адміністратора</div>
    </div>
  }
}

export default Panel;
