import {CHAT_MESSAGES, DARK_MODE, USER_NAME} from '../types';

const setDarkMode = (payload) => ({
  type: DARK_MODE,
  payload,
});
const setUserName = (payload) => ({
  type: USER_NAME,
  payload,
});
const setChatMessages = (payload) => ({
  type: CHAT_MESSAGES,
  payload,
});



export default {
  setDarkMode,
  setUserName,
  setChatMessages,
};