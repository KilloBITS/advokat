import React from 'react';
import { Link } from "react-router-dom";

class User extends React.Component {
  render() {
    return <div className="rightMenuBlock authBlock">
      <Link to={"/panel"}><div className="otherMenuBtn">Панель керування</div></Link>
      <div className="otherMenuBtn signOut">Вихід</div>
    </div>
  }
}

export default User;
