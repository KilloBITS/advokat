import React from 'react';
import axios from 'axios';
import MenuContainer from '../containers/menuContainer';

class SignUpPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      login: '',
      password: ''
    }
    this.submit = this.submit.bind(this);
  }
  componentDidMount(){
    document.getElementById('page').scrollTo(0, 0);
  }
  submit(){
    axios.post(this.props.server+'/session/signin', {data: this.state}).then(res => {
      console.log(res);
      this.props.setAdmin(true)
      return false
    });
  }

  changeLogin(event){
    this.setState({login: event.target.value });
  }
  changePassword(event){
    this.setState({password: event.target.value });
  }
  render() {
    return <div className="page signin">
      <MenuContainer transparent={false}/>
      <div className="pageContent">
        <div className="pageSignInContainer">
            <div className="signInLine">
              <input type="text" name="solister_login" className="signInInput" value={this.state.login} onChange={this.changeLogin.bind(this)}/>
            </div>
            <div className="signInLine">
              <input type="password" name="solister_pass" className="signInInput" value={this.state.password} onChange={this.changePassword.bind(this)}/>
            </div>
            <div className="signInLine">
              <input type="button" className="signInButton" value="Вхід" onClick={this.submit}/>
            </div>
        </div>
      </div>
    </div>
  }
}

export default SignUpPage;
