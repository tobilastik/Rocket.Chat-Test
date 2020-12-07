import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Welcome from '../app/screens/Welcome';

test('should render Welcome', async () => {
  const {getByText, getByTestId, getAllByTestId, queryByText} = render(
    <Welcome />,
  );
  const input = getByTestId('adder-input');
  const button = getByText('Continue');
  fireEvent.changeText(input, 'item0');
  fireEvent.press(button);
  fireEvent.changeText(input, 'item1');
  fireEvent.press(button);
  const item0 = getByText('item0');
  const item1 = getByText('item1');

  expect(item0).toBeDefined();
  expect(item1).toBeDefined();
  fireEvent.press(getAllByTestId('continue')[0]);
  expect(queryByText('item0')).toBeNull();
  // const list = getByTestId('list');
  // expect(list).toContainElement(item1);
});
