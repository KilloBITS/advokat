import React from 'react';
import MenuContainer from '../containers/menuContainer';

class SignUpPage extends React.Component {
  componentDidMount(){
    document.getElementById('page').scrollTo(0, 0);
  }
  render() {
    return <div className="page signup">
      <MenuContainer transparent={false}/>
      <div className="pageContent">
        <div className="pageSignUpContainer">

        </div>
      </div>
    </div>
  }
}

export default SignUpPage;
