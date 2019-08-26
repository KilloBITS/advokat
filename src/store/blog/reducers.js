import { ACTION_CHANGE_BLOG } from './actions';

const defaultState = {
  blogData: null
}

export const blog_Reducer = (state = defaultState, action) => {
  switch(action.type){
    case ACTION_CHANGE_BLOG:
      return {
        ...state,
        blogData:action.payload
      };
    default: return state
  }
}
