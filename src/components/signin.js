import React from 'react';
import axios from 'axios';
import MenuContainer from '../containers/menuContainer';
import Logotype from './includes/logotype';

class SignUpPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      login: '',
      password: '',
      openLoader: false,
      error: false
    }
    this.submit = this.submit.bind(this);
  }
  componentDidMount(){
    document.getElementById('page').scrollTo(0, 0);
  }
  submit(){
    this.setState({openLoader: true});
    axios.post(this.props.server+'/session/signin', {data: this.state}).then(res => {
      console.log(res.data)
      if(res.data.code === 300){
        this.setState({openLoader: false, error: true});
      }else{
        window.location = "/";
      }
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
            {(this.state.openLoader)?<div className="signInLoader">Перевірка користувача...</div>:null}
            <div className="auth_logo">
              {(this.props.config !== null && this.props.config !== undefined)?<Logotype domId="Logotype" logotype={this.props.server + "/images/" +this.props.config.logo} logoColor={this.props.config.logoColor}/>:null}
            </div>
            <div className="signInLine">
              <input type="text" name="solister_login" className="signInInput" value={this.state.login} onChange={this.changeLogin.bind(this)}/>
            </div>
            <div className="signInLine">
              <input type="password" name="solister_pass" className="signInInput" value={this.state.password} onChange={this.changePassword.bind(this)}/>
            </div>
            {(this.state.error)?<div className="error">Невірний логін або пароль!</div>:null}
            <div className="signInLine">
              <input type="button" className="signInButton" value="Вхід" onClick={this.submit}/>
            </div>
        </div>
      </div>
    </div>
  }
}

export default SignUpPage;
