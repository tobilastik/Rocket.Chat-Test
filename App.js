import React from 'react';
import {Provider, useSelector} from 'react-redux';
import {store, persistor} from './app/redux';
import StartUp from './app/Startup';
import {PersistGate} from 'redux-persist/integration/react';



const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
      <StartUp />

        </PersistGate>
    </Provider>
  );
};

store.subscribe(() => {
  console.log('Store Changed, ', store.getState());
});

export default App;