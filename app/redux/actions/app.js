import {DARK_MODE, USER_NAME} from '../types';

const setDarkMode = (payload) => ({
  type: DARK_MODE,
  payload,
});
const setUserName = (payload) => ({
  type: USER_NAME,
  payload,
});

export default {
  setDarkMode,
  setUserName
};