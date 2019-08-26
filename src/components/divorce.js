import React from 'react';
import Title from './includes/title.js';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';


class Divorce extends React.Component {
  render() {
    return <div className="page divorce">
      <div className="pageDivorceContainer">
        <Title data={this.props.divorce}/>
        <div className="contentBlockDivorce">
          <div className="bigRedButton">Залишити заявку</div>
          <div className="divorceIneInfo mTop30">
            ВИ ВИРІШИЛИ <b>РОЗІРВАТИ ШЛЮБ</b>, АЛЕ...
          </div>
          <div className="allDivorceBlock">
            <div className="miniDivorceContainer">
              <div className="divContLogo">
                <img src={this.props.server + '/images/divorce/contract.png'} alt=""/>
              </div>
              <div className="divContText">Відсутні необхідні документи</div>
            </div>
            <div className="miniDivorceContainer">
              <div className="divContLogo">
                <img src={this.props.server + '/images/divorce/passport.png'} alt=""/>
              </div>
              <div className="divContText">Чоловік/дружина за кордоном</div>
            </div>
            <div className="miniDivorceContainer">
              <div className="divContLogo">
                <img src={this.props.server + '/images/divorce/landmark.png'} alt=""/>
              </div>
              <div className="divContText">Один з подружжя іноземець</div>
            </div>
            <div className="miniDivorceContainer">
              <div className="divContLogo">
                <img src={this.props.server + '/images/divorce/surname.png'} alt=""/>
              </div>
              <div className="divContText">Потребуєте зміни прізвища після розлучення</div>
            </div>
            <div className="miniDivorceContainer">
              <div className="divContLogo">
                <img src={this.props.server + '/images/divorce/racing.png'} alt=""/>
              </div>
              <div className="divContText">Немає часу займатись процесом</div>
            </div>
            <div className="miniDivorceContainer">
              <div className="divContLogo">
                <img src={this.props.server + '/images/divorce/case.png'} alt=""/>
              </div>
              <div className="divContText">Існують юридичні труднощі</div>
            </div>
          </div>
        </div>
      </div>
      <div className="pageDivorceContainer dark">
        <div className="contentBlockDivorce">
          <div className="divorceIneInfo">
            <b>ЯК МИ ПРАЦЮЄМО</b>
          </div>
          <div className="allDivorceBlock">
            <div className="allDivorceBlockInline">
              <div className="blockInlineTitle">Ваші 3 прості кроки</div>
              <div className="allDivorceLine blue"><FontAwesomeIcon icon={['fas', 'info-circle']}/> Ознайомитись з інформацією на нашому веб-сайті.</div>
              <div className="allDivorceLine blue"><FontAwesomeIcon icon={['fas', 'comments']}/> Отримати безкоштовну консультацію щодо можливості розірвати шлюб без присутності в суді</div>
              <div className="allDivorceLine blue"><FontAwesomeIcon icon={['fas', 'hand-holding-usd']}/> Укласти угоду та оплатити послуги.</div>
              <div className="allDivorceLine blue"><FontAwesomeIcon icon={['fas', 'clock']}/> Очікувати рішення суду про розірвання шлюбу</div>
            </div>
            <div className="allDivorceBlockInline">
              <div className="blockInlineTitle">Дії "Розлучення Онлайн":</div>
              <div className="allDivorceLine green"><FontAwesomeIcon icon={['fas', 'check']}/> ЗДІЙСНЮЄМО юридичний аналіз Вашої ситуації та уточнюємо обставини</div>
              <div className="allDivorceLine green"><FontAwesomeIcon icon={['fas', 'check']}/> ПРОВОДИМО збір необхідних документів</div>
              <div className="allDivorceLine green"><FontAwesomeIcon icon={['fas', 'check']}/> ВИЗНАЧАЄМО підсудність та реквізити судового збору</div>
              <div className="allDivorceLine green"><FontAwesomeIcon icon={['fas', 'check']}/> ГОТУЄМО ТА ПОДАЄМО позовну заяву</div>
              <div className="allDivorceLine green"><FontAwesomeIcon icon={['fas', 'check']}/> ВСТАНОВЛЮЄМО дату та час засідання у справі</div>
              <div className="allDivorceLine green"><FontAwesomeIcon icon={['fas', 'check']}/> ПРЕДСТАВЛЯЄМО Ваші інтереси в суді</div>
              <div className="allDivorceLine green"><FontAwesomeIcon icon={['fas', 'check']}/> ОТРИМУЄМО рішення суду щодо розлучення</div>
              <div className="allDivorceLine green"><FontAwesomeIcon icon={['fas', 'check']}/> НАПРАВЛЯЄМО рішення суду на Вашу адресу</div>
              <div className="allDivorceLine green"><FontAwesomeIcon icon={['fas', 'check']}/> ІНФОРМУЄМО про хід розгляду Вашої справи будь-яким зручним для Вас способом.</div>
            </div>
          </div>
          <div className="bigRedButton">Залишити заявку</div>
        </div>
      </div>
      <div className="pageDivorceContainer">
        <div className="contentBlockDivorce">
          <div className="divorceIneInfo mTop30">
            <b>РОЗЛУЧЕННЯ</b> ОНЛАЙН ЦЕ ШВИДКО ТА <b>ЛЕГКО</b>
          </div>
          <div className="allDivorceBlock">
            <div className="woodLine">
              <div className="WL50 WL_Left"><img src={this.props.server + '/images/divorce/1.png'} alt=""/></div>
              <div className="WL50 WL_Right" style={{paddingTop: "40px"}}>Розлучення Онлайн - надійний сервіс з розірвання шлюбу без присутності в суді</div>
            </div>
            <div className="woodLine">
              <div className="WL50 WL_Left" style={{paddingTop: "36px"}}>Процесом з розірвання шлюбу займаються професійні юристи та адвокати, для наших клієнтів усі консультації - безкоштовні</div>
              <div className="WL50 WL_Right"><img src={this.props.server + '/images/divorce/2.png'} alt=""/></div>
            </div>
            <div className="woodLine">
              <div className="WL50 WL_Left"><img src={this.props.server + '/images/divorce/3.png'} alt=""/></div>
              <div className="WL50 WL_Right" style={{paddingTop: "24px"}}>Увесь процес з розірвання шлюбу, як правило, триває від 1-го до 3-ох місяців, без Вашої присутності в суді</div>
            </div>
            <div className="woodLine">
              <div className="WL50 WL_Left" style={{paddingTop: "40px"}}>Розірвання шлюбу через наш сервіс не можливе під час вагітності та при наявності дітей до 1-го року</div>
              <div className="WL50 WL_Right"><img src={this.props.server + '/images/divorce/4.png'} alt=""/></div>
            </div>
            <div className="woodLine">
              <div className="WL50 WL_Left"><img src={this.props.server + '/images/divorce/5.png'} alt=""/></div>
              <div className="WL50 WL_Right" style={{paddingTop: "24px"}}>Можемо отримати для Вас дублікат свідоцтва про шлюб та інші документи необхідні розлучення</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default Divorce;
