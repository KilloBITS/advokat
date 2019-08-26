import React from 'react';
import { Link } from "react-router-dom";
import User_block from './includes/user_block';
import Auth_block from './includes/auth_block';

let parseMenu = (dataMenu, click) => {
    const menuBtn = dataMenu.map((btn, key) =>
      <Link key={key} to={btn.link} onClick={click}>
        <div className="menu_btn">{btn.title}</div>
      </Link>
    );
    return menuBtn
}

class MenuIncludes extends React.Component {
  constructor(){
    super()
    this.menuClick = this.menuClick.bind(this);
  }
  menuClick(){
    this.props.setOpenClose(false);
    document.getElementById('page').scrollTo(0, 0);
  }
  render() {
    return <div className={(this.props.width > 800)?"menu":(this.props.menuOpenClose)?"menu":"menu hide"} id="Menu" style={{backgroundColor: (this.props.width > 800)?(!this.props.transparent || this.props.top > 10)?"#262626":"rgba(38, 38, 38, 0)":"#f2f2f2"}}>
      <div className="menuBlock">
          {parseMenu(this.props.menu, this.menuClick)}
      </div>
      <div className="sessionBlock">
        {(this.props.session !== null)
          ?<User_block/>
          :<Auth_block/>
        }
      </div>
    </div>
  }
}

export default MenuIncludes;
