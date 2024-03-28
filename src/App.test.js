// src/App.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';
import ArrayComponent from './components/ArrayComp';

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

// ArrayComponent.test.jsx

describe('ArrayComponent', () => {
  test('renders list items correctly', () => {
    const { getByText } = render(<ArrayComponent />);

    // Check if each item in the array is rendered
    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('3')).toBeInTheDocument();
    expect(getByText('4')).toBeInTheDocument();
    expect(getByText('5')).toBeInTheDocument();
    expect(getByText('6')).toBeInTheDocument();
  });

  test('renders correct number of list items', () => {
    const { getAllByRole } = render(<ArrayComponent />);

    // Check if the correct number of list items is rendered
    const listItems = getAllByRole('listitem');
    expect(listItems).toHaveLength(6);
  });

  test('renders list with correct structure', () => {
    const { getByRole } = render(<ArrayComponent />);

    // Check if the list is rendered with correct structure
    const list = getByRole('list');
    expect(list).toBeInTheDocument();
    expect(list.childNodes).toHaveLength(6); // Check if there are 6 list items
  });

  test('renders list with correct heading', () => {
    const { getByText } = render(<ArrayComponent />);

    // Check if the heading is rendered correctly
    const heading = getByText('Items:');
    expect(heading).toBeInTheDocument();
  });
});

