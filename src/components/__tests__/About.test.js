// src/components/__tests__/About.test.js
import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import configureStore from 'redux-mock-store';
import About from '../About';

const mockStore = configureStore([]);

describe('About component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      dummy: {
        items: [{ id: 1, title: 'Item 1' }, { id: 2, title: 'Item 2' }],
      },
    });
  });

  test('renders About page with data from Redux store', async () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router> {/* Wrap with Router */}
          <About />
        </Router>
      </Provider>
    );

    expect(getByText('Item 1')).toBeInTheDocument();
    expect(getByText('Item 2')).toBeInTheDocument();
  });
});
