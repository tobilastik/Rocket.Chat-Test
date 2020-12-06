import React from 'react';
import {Provider, useSelector} from 'react-redux';
import store from './app/redux';
import StartUp from './app/Startup';



const App = () => {
  return (
    <Provider store={store}>
      <StartUp />
    </Provider>
  );
};

store.subscribe(() => {
  console.log('Store Changed, ', store.getState());
});

export default App;