import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Welcome from '../app/screens/Welcome';
import {Provider} from 'react-redux';
import {persistor, store} from '../app/redux';
import {PersistGate} from 'redux-persist/integration/react';

test('renders a component where user can input their name', () => {
  const {getByPlaceholderText, getByText, getAllByText} = render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Welcome />
      </PersistGate>
    </Provider>,
  );

  // fireEvent.changeText(getByPlaceholderText('username'), 'tobi');
  // fireEvent.press(getByText('Continue'));
  //   const textElement = getByText('Welcome to Rocket.Chat Test App');

  // const bananaElements = getAllByText('tobi');
  //   expect(textElement).toHaveLength(1); // expect 'banana' to be on the list
});
