import { ACTION_CHANGE_CONTACTS, ACTION_CHANGE_SOCIALS } from './actions';

const defaultState = {
  contactsData: null,
  socials: null
}

export const contacts_Reducer = (state = defaultState, action) => {
  switch(action.type){
    case ACTION_CHANGE_CONTACTS:
      return {
        ...state,
        contactsData: action.payload
      };

    case ACTION_CHANGE_SOCIALS:
      return {
        ...state,
        socials: action.payload
      };
    default: return state
  }
}
