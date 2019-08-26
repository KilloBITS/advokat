import { ACTION_SET_MENU, ACTION_SET_OPEN } from './actions';

const defaultState = {
  menuData: null,
  menuOpen: false
}

export const menu_Reducer = (state = defaultState, action) => {
  switch(action.type){
    case ACTION_SET_MENU:
      return {
        ...state,
        menuData: action.payload
      };

    case ACTION_SET_OPEN:
      return {
        ...state,
        menuOpen: action.payload
      };
    default: return state
  }
}
