import {DARK_MODE, USER_NAME} from '../types';

const initialstate = {
  darkMode: true,
  userName: ''
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case DARK_MODE:
      return Object.assign({}, state, {
        darkMode: action.payload,
      });
      case USER_NAME:
      return Object.assign({}, state, {
        userName: action.payload,
      });

    default:
      return state;
  }
};