import { ACTION_CHANGE_SESSION, ACTION_CHANGE_ADMIN } from './actions';

const defaultState = {
  admin: false
}

export const session_Reducer = (state = defaultState, action) => {
  switch(action.type){
    case ACTION_CHANGE_ADMIN:
      return {
        ...state,
        admin: action.payload
      };
    default: return state
  }
}
