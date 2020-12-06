import {createStore, applyMiddleware} from 'redux';
import appReducer from './reducers';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);