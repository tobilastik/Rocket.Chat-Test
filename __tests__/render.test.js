import React from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from '../app/redux';
import {PersistGate} from 'redux-persist/integration/react';
import StartUp from '../app/Startup';
import {act} from 'react-test-renderer';
import renderer from 'react-test-renderer';

it('renders correctly', async () => {
  await act(async () => {
    renderer.create(
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StartUp />
        </PersistGate>
      </Provider>,
    );
  });
});
