import React from 'react';
import Length from './includes/length_animation.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class StatisticComponent extends React.Component {
  render() {
    return <div className="block statistic" id="Statistic">
      <div className="background">
        <div className="statisticTexture"></div>
        <video autoPlay muted loop>
          <source src={this.props.server + "/video/" + this.props.statistic.video} type="video/mp4" />
        </video>
      </div>
      <div className="statisticData">
        <div className="statisticBlockData">
          <div className="statisticImage">
            <FontAwesomeIcon icon={['fas', 'gavel']} />
          </div>
          <div className="statisticTitle">Завершених</div>
          <div className="statisticTitle2">справ</div>
          <div className="statisticLength">
            <Length number={76} speed={27} symbol="+" id="num0" scrollTop={this.props.scrollTop}/>
          </div>
        </div>

        <div className="statisticBlockData">
          <div className="statisticImage">
            <FontAwesomeIcon icon={['fas', 'users']} />
          </div>
          <div className="statisticTitle">Наших</div>
          <div className="statisticTitle2">клієнтів</div>
          <div className="statisticLength">
            <Length number={113} speed={20} symbol="+" id="num1" scrollTop={this.props.scrollTop}/>
          </div>
        </div>

        <div className="statisticBlockData">
          <div className="statisticImage">
            <FontAwesomeIcon icon={['fas', 'shield-alt']} />
          </div>
          <div className="statisticTitle">Років</div>
          <div className="statisticTitle2">Досвіду</div>
          <div className="statisticLength">
            <Length number={6} speed={70} symbol="+" id="num2" scrollTop={this.props.scrollTop}/>
          </div>
        </div>

        <div className="statisticBlockData">
          <div className="statisticImage">
            <FontAwesomeIcon icon={['fas', 'thumbs-up']} />
          </div>
          <div className="statisticTitle">Позитивних</div>
          <div className="statisticTitle2">відгуки</div>
          <div className="statisticLength">
            <Length number={102} speed={100} symbol="+" id="num3" scrollTop={this.props.scrollTop}/>
          </div>
        </div>

      </div>
    </div>
  }
}

export default StatisticComponent;
