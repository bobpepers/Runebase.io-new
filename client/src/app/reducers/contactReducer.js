import {
  CONTACT_SEND,
} from '../actions/types/index';

export default function(state = {}, action) {
  switch(action.type) {
    case CONTACT_SEND:
      return { list: action.payload, ...state };
  }

  return state;
}