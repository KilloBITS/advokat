import React from 'react';
import axios from 'axios';

class PreloaderIncludes extends React.Component {
  componentDidMount(){
    axios.get(
      this.props.server+'/data/all'
    ).then(result => {
      console.log(result.data.data)
      this.props.setAdmin(result.data.data.isAdmin);
      this.props.setSession(result.data.data.user);
      this.props.setConfig(result.data.data.config);
      this.props.setDesign(result.data.data.design);
      this.props.setMenu(result.data.data.menu);
      this.props.setHeadData(result.data.data.head);
      this.props.setAbout(result.data.data.about);
      this.props.setBlog(result.data.data.blog);
      this.props.setContacts(result.data.data.contacts);
      this.props.setSocials(result.data.data.socials);
      this.props.setNews(result.data.data.news);
      this.props.setServices(result.data.data.services);
      this.props.setStatistic(result.data.data.statistic);
      this.props.setDivorce(result.data.data.divorce);
      this.props.setPreloader(false);
    });
  }
  render() {
    return <div className={(this.props.preloader)?"preloader":"preloader fadeout"} id="Preloader">
      <div className="LoaderBalls">
      	<div className="LoaderBalls__item"></div>
      	<div className="LoaderBalls__item"></div>
      	<div className="LoaderBalls__item"></div>
      </div>
    </div>
  }
}

export default PreloaderIncludes;