import {DARK_MODE, USER_NAME, CHAT_MESSAGES} from '../types';

const initialstate = {
  darkMode: true,
  userName: '',
  chatMessages: [
    {
      id: null,
      message: null,

      timeStamp: Date.now(),
    },
  ],
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
    case CHAT_MESSAGES:
      return Object.assign({}, state, {
        chatMessages: action.payload,
      });

    default:
      return state;
  }
};