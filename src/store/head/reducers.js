import { ACTION_CHANGE_HEAD_DATA } from './actions';

const defaultState = {
  headData: null
}

export const head_Reducer = (state = defaultState, action) => {
  switch(action.type){
    case ACTION_CHANGE_HEAD_DATA:
      return {
        ...state,
        headData: action.payload
      };
    default: return state
  }
}
