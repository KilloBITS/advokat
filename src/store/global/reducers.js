import {
    ACTION_CHANGE_PRELOADER,
    ACTION_CHANGE_CONFIG,
    ACTION_CHANGE_DESIGN,
    ACTION_CHANGE_TOP_POSITION,
    ACTION_CHANGE_PARRENT_COMPONENT,
    ACTION_CHANGE_DISPLAY_WIDTH
  } from './actions';

const defaultState = {
  serverURL: (window.location.hostname === 'localhost')? (window.location.port === "3000")? window.location.origin.split('3000')[0]+'80':window.location.origin:window.location.origin,
  preloader: true,
  config: null,
  design: null,
  topPosition: 0,
  parentComponent: null,
  displayWidth: null
}

export const global_Reducer = (state = defaultState, action) => {
  switch(action.type){
    case ACTION_CHANGE_PRELOADER:
      return {
        ...state,
        preloader: action.payload
      };

    case ACTION_CHANGE_CONFIG:
      return {
        ...state,
        config: action.payload
      };

    case ACTION_CHANGE_DESIGN:
      return {
        ...state,
        design: action.payload
      };

    case ACTION_CHANGE_TOP_POSITION:
      return {
        ...state,
        topPosition: action.payload
      };

    case ACTION_CHANGE_PARRENT_COMPONENT:
      return {
        ...state,
        parentComponent: action.payload
      };

    case ACTION_CHANGE_DISPLAY_WIDTH:
      return {
        ...state,
        displayWidth: action.payload
      };

    default: return state
  }
}
