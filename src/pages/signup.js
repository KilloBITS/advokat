import React from 'react';
import MenuContainer from '../containers/menuContainer';

class SignInPage extends React.Component {
  componentDidMount(){
    document.getElementById('page').scrollTo(0, 0);
  }
  render() {
    return <div className="page signIn">
      <MenuContainer transparent={false}/>
      <div className="pageContent">
        <div className="pageSignInContainer">

        </div>
      </div>
    </div>
  }
}

export default SignInPage;
