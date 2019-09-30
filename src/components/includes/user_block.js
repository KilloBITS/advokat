import React from 'react';
import { Link } from "react-router-dom";

class User extends React.Component {
  render() {
    return <div className="rightMenuBlock authBlock">
      <a href={"/signout"}><div className="otherMenuBtn signOut">Вихід</div></a>
    </div>
  }
}

export default User;
