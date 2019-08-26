import { ACTION_CHANGE_STATISTIC } from './actions';

const defaultState = {
  statisticData: null
}

export const statistic_Reducer = (state = defaultState, action) => {
  switch(action.type){
    case ACTION_CHANGE_STATISTIC:
      return {
        ...state,
        statisticData:action.payload
      };
    default: return state
  }
}
