import { ACTION_CHANGE_DIVORCE } from './actions';

const defaultState = {
  divorceData: null
}

export const divorce_Reducer = (state = defaultState, action) => {
  switch(action.type){
    case ACTION_CHANGE_DIVORCE:
      return {
        ...state,
        divorceData: action.payload
      };

    default: return state
  }
}
