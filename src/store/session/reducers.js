import { ACTION_CHANGE_SESSION, ACTION_CHANGE_ADMIN } from './actions';

const defaultState = {
  session: null,
  admin: false
}

export const session_Reducer = (state = defaultState, action) => {
  switch(action.type){
    case ACTION_CHANGE_SESSION:
      return {
        ...state,
        session: action.payload
      };

    case ACTION_CHANGE_ADMIN:
      return {
        ...state,
        admin: action.payload
      };
    default: return state
  }
}
