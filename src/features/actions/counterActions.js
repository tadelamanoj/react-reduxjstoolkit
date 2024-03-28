// src/actions/counterActions.js
// import { increment, decrement } from '../counter/counterSlice';
import { fetchItems as fetchItemsFromApi } from '../../api';

export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};


export const fetchItems = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_ITEMS_REQUEST });
    try {
      const data = await fetchItemsFromApi();
      dispatch({ type: FETCH_ITEMS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_ITEMS_FAILURE, payload: error.message });
    }
  };
};