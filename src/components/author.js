import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AuthorBlock extends React.Component {
  render() {
    return <div className="block author" id="AuthorBlock">
      <div className="authorContent">
        <FontAwesomeIcon icon={['fas', 'crown']}/>
        Site created by <a href={'http://kaleniuk.top'} target="_blank">Ihor Kaleniuk</a>
        <FontAwesomeIcon icon={['fas', 'crown']} />
      </div>
    </div>
  }
}

export default AuthorBlock;
