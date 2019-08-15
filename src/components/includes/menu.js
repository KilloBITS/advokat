import React from 'react';
import { Link } from 'react-router-dom';

let parseMenu = (dataMenu) => {
    const menuBtn = dataMenu.map((btn, key) =>
        <Link key={key} to={btn.link}>
          <div className="menu_btn">{btn.title}</div>
        </Link>
    );
    return menuBtn
}

class MenuIncludes extends React.Component {
  render() {
    return <div className="menu" id="Menu" style={{backgroundColor: this.props.menuColor}}>
      <div className="menuBlock">
        {parseMenu(this.props.data)}
      </div>
    </div>
  }
}

export default MenuIncludes;
