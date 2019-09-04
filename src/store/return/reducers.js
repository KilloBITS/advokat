import { ACTION_CHANGE_RETURN } from './actions';

const defaultState = {
  returnData: null
}

export const return_Reducer = (state = defaultState, action) => {
  switch(action.type){
    case ACTION_CHANGE_RETURN:
      return {
        ...state,
        returnData: action.payload
      };
    default: return state
  }
}
