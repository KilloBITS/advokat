import React from 'react';

class PreloaderIncludes extends React.Component {
  render() {
    return <div className="preloader" id="Preloader">
      <div className="LoaderBalls">
      	<div className="LoaderBalls__item"></div>
      	<div className="LoaderBalls__item"></div>
      	<div className="LoaderBalls__item"></div>
      </div>
    </div>
  }
}

export default PreloaderIncludes;
