import { ACTION_CHANGE_SERVICES } from './actions';

const defaultState = {
  servicesData: null
}

export const services_Reducer = (state = defaultState, action) => {
  switch(action.type){
    case ACTION_CHANGE_SERVICES:
      return {
        ...state,
        servicesData:action.payload
      };
    default: return state
  }
}
