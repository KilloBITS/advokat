import React from 'react';
import ReactDOM from 'react-dom';
import PageContainer from './pageContent';
//using redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//using fontavesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
//using styles
import './styles/index.css';
import './styles/index.min.css';
//page

//add store redux
import rootReducer from './store/reducers';
//add library fontawesome
library.add(fab,fas);
//create store reduc
const store = createStore(rootReducer);


//DOM render
ReactDOM.render(<Provider store={store}>
  <PageContainer/>
</Provider>, document.getElementById('root'));
