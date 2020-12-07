import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {persistor, store} from '../app/redux';
import {PersistGate} from 'redux-persist/integration/react';
import Messages from '../app/screens/Messages';

test('renders a component where user can input their name', () => {
  const {getByPlaceholderText, getByText, getAllByText} = render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Messages />
      </PersistGate>
    </Provider>,
  );
});
