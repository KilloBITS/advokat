import React from 'react';

let parseMenu = (dataMenu) => {
    const menuBtn = dataMenu.map((btn, key) => <div key={key} className="menu_btn">{btn.title}</div>);
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
