import React from 'react';
import { Link } from "react-router-dom";

class Auth extends React.Component {
  render() {
    return <div className="rightMenuBlock authBlock">
      <Link to={"/session/signin"}><div className="otherMenuBtn">Авторизація</div></Link>
      <Link to={"/session/signup"}><div className="otherMenuBtn">Реєстрація</div></Link>
    </div>
  }
}

export default Auth;
