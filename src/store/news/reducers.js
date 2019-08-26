import { ACTION_CHANGE_NEWS } from './actions';

const defaultState = {
  newsData: null
}

export const news_Reducer = (state = defaultState, action) => {
  switch(action.type){
    case ACTION_CHANGE_NEWS:
      return {
        ...state,
        newsData:action.payload
      };
    default: return state
  }
}
