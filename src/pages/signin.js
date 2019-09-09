import React from 'react';
import MenuContainer from '../containers/menuContainer';

class SignUpPage extends React.Component {
  componentDidMount(){
    document.getElementById('page').scrollTo(0, 0);
  }
  render() {
    return <div className="page signin">
      <MenuContainer transparent={false}/>
      <div className="pageContent">
        <div className="pageSignInContainer">
          <div className="signInLine">
            <input type="text" name="solister_login" className="signInInput"/>
          </div>
          <div className="signInLine">
            <input type="password" name="solister_pass" className="signInInput"/>
          </div>
          <div className="signInLine">
            <input type="button" className="signInButton" value="Вхід"/>
          </div>
        </div>
      </div>
    </div>
  }
}

export default SignUpPage;
