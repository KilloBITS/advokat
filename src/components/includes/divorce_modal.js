import React from 'react';
import HeadingArt from './heading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

class DivorceModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loader: false,
      divorce_1: null,
      divorce_2: null,
      divorce_3: null,
      divorce_4: null,
      divorce_5: null,
      divorce_6: null
    }
    this.send = this.send.bind(this);
  }
  changeDicorve(event){
    switch(event.target.name){
      case "divorce_1": this.setState({divorce_1: (event.target.value === "yes")?true:false}); break;
      case "divorce_2": this.setState({divorce_2: (event.target.value === "yes")?true:false}); break;
      case "divorce_3": this.setState({divorce_3: (event.target.value === "yes")?true:false}); break;
      case "divorce_4": this.setState({divorce_4: event.target.value}); break;
      case "divorce_5": this.setState({divorce_5: event.target.value}); break;
      case "divorce_6": this.setState({divorce_6: event.target.value}); break;
      default: window.alert("not properties found!")
    }
  }
  send(){
    this.setState({loader: true});
    axios.post(
      this.props.server+'/set/divorce',
      this.state
    ).then(result => {
      this.setState({loader: false});
      this.props.openClose();
      console.log(result)
    });
  }
  render() {
    return <div className="modalBackground">
      <div className="modalContent">
        <div className="closeModal" onClick={this.props.openClose}><FontAwesomeIcon icon={['fas', 'times']}/></div>
        <div className={(this.state.loader)?"modalLoader show":"modalLoader"}></div>
        <div className="modalTitle">
          Отримайте консультацію щодо розірвання шлюбу!
          <div className="bdt-heading-style"><HeadingArt fill={'#164b49'}/></div>
        </div>
        <div className="modalBody">
          <div className="modalSubTitle">**Надана Вами інформація є конфіденційною, та не підлягає розголошенню!</div>
          <div className="modalLine">
            <div className="modalLineTitle">Наявність у шлюбі дитини, що не досягла одного року? Або дружина вагітна?</div>
            <div className="selectors">
              <input type="radio" name="divorce_1" value="yes" className="hiden" id="divorce_1_1" onChange={this.changeDicorve.bind(this)}/>
              <input type="radio" name="divorce_1" value="no" className="hiden" id="divorce_1_2" onChange={this.changeDicorve.bind(this)}/>
              <label htmlFor="divorce_1_1">
                <div className={(this.state.divorce_1 !== null && this.state.divorce_1)?"rectRadio activeRadio":"rectRadio"}></div>
                <div className="radioText">Так</div>
              </label>
              <label htmlFor="divorce_1_2">
                <div className={(this.state.divorce_1 !== null && !this.state.divorce_1)?"rectRadio activeRadio":"rectRadio"}></div>
                <div className="radioText">Ні</div>
              </label>
            </div>
          </div>
          <div className="modalLine">
            <div className="modalLineTitle">Наявність у шлюбі спільних з чоловіком/дружиною дітей, що не досягли повноліття ?</div>
            <div className="selectors">
              <input type="radio" name="divorce_2" value="yes" className="hiden" id="divorce_2_1" onChange={this.changeDicorve.bind(this)}/>
              <input type="radio" name="divorce_2" value="no" className="hiden" id="divorce_2_2" onChange={this.changeDicorve.bind(this)}/>
              <label htmlFor="divorce_2_1">
                <div className={(this.state.divorce_2 !== null && this.state.divorce_2)?"rectRadio activeRadio":"rectRadio"}></div>
                <div className="radioText">Так</div>
              </label>
              <label htmlFor="divorce_2_2">
                <div className={(this.state.divorce_2 !== null && !this.state.divorce_2)?"rectRadio activeRadio":"rectRadio"}></div>
                <div className="radioText">Ні</div>
              </label>
            </div>
          </div>
          <div className="modalLine">
            <div className="modalLineTitle">Хтось з подружжя проти розірвання шлюбу?</div>
            <div className="selectors">
              <input type="radio" name="divorce_3" value="yes" className="hiden" id="divorce_3_1" onChange={this.changeDicorve.bind(this)}/>
              <input type="radio" name="divorce_3" value="no" className="hiden" id="divorce_3_2" onChange={this.changeDicorve.bind(this)}/>
              <label htmlFor="divorce_3_1">
                <div className={(this.state.divorce_3 !== null && this.state.divorce_3)?"rectRadio activeRadio":"rectRadio"}></div>
                <div className="radioText">Так</div>
              </label>
              <label htmlFor="divorce_3_2">
                <div className={(this.state.divorce_3 !== null && !this.state.divorce_3)?"rectRadio activeRadio":"rectRadio"}></div>
                <div className="radioText">Ні</div>
              </label>
            </div>
          </div>
          <div className="modalLine">
            <div className="modalLineTitle">Ваше ім'я?</div>
            <input type="text" name="divorce_4" placeholder="Введіть ваше імя..." onChange={this.changeDicorve.bind(this)}/>
          </div>
          <div className="modalLine">
            <div className="modalLineTitle">Населений пункт в якому Ви проживаєте?</div>
            <input type="text" name="divorce_5" placeholder="Введіть ваш населений пункт..." onChange={this.changeDicorve.bind(this)}/>
          </div>
          <div className="modalLine">
            <div className="modalLineTitle">Ваш контактний номер телефону?</div>
            <input type="text" name="divorce_6" placeholder="Введіть ваш номер телефону..." onChange={this.changeDicorve.bind(this)}/>
          </div>
        </div>
        <div className="modalFooter">
          <div className="bigRedButton" onClick={this.send}>Відправити</div>
        </div>
      </div>
    </div>
  }
}

export default DivorceModal;
