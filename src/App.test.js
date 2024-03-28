// src/App.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

test('renders counter with initial value', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText('Counter: 0')).toBeInTheDocument();
});

test('increments and decrements counter', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const incrementButton = getByText('Increment');
  const decrementButton = getByText('Decrement');

  fireEvent.click(incrementButton);
  expect(getByText('Counter: 1')).toBeInTheDocument();

  fireEvent.click(decrementButton);
  expect(getByText('Counter: 0')).toBeInTheDocument();
});

test('renders Home component when navigating to "/" route', () => {
  const { getByText } = render(
    <Provider store={store}>
        <App />
    </Provider>
  );

  expect(getByText('Welcome to Home')).toBeInTheDocument();
});
