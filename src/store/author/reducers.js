import { ACTION_CHANGE_AUTHOR } from './actions';

const defaultState = {
  authorData: null
}

export const author_Reducer = (state = defaultState, action) => {
  switch(action.type){
    case ACTION_CHANGE_AUTHOR:
      return {
        ...state,
        authorData:action.payload
      };
    default: return state
  }
}
