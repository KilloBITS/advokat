import { ACTION_CHANGE_ABOUT } from './actions';

const defaultState = {
  aboutData: null
}

export const about_Reducer = (state = defaultState, action) => {
  switch(action.type){
    case ACTION_CHANGE_ABOUT:
      return {
        ...state,
        aboutData: action.payload
      }
    default: return state
  }
}
