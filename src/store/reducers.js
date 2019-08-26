import { combineReducers } from 'redux';

import { head_Reducer } from './head/reducers';

import { global_Reducer } from './global/reducers';
import { session_Reducer } from './session/reducers';
import { menu_Reducer } from './global/menu/reducers';

import { about_Reducer } from './about/reducers';
import { blog_Reducer } from './blog/reducers';
import { contacts_Reducer } from './contacts/reducers';
import { news_Reducer } from './news/reducers';
import { services_Reducer } from './services/reducers';
import { statistic_Reducer } from './statistic/reducers';
import { author_Reducer } from './author/reducers';
import { divorce_Reducer } from './divorce/reducers';

export default combineReducers({
  global: global_Reducer,
  menu: menu_Reducer,
  head: head_Reducer,
  about: about_Reducer,
  blog: blog_Reducer,
  contacts: contacts_Reducer,
  news: news_Reducer,
  services: services_Reducer,
  statistic: statistic_Reducer,
  author: author_Reducer,
  divorce: divorce_Reducer,
  session: session_Reducer
});
