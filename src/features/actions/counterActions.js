// src/actions/counterActions.js
import { increment, decrement } from '../counter/counterSlice';


export const incrementCounter = () => {
  return dispatch => {
    dispatch(increment());
  };
};

export const decrementCounter = () => {
  return dispatch => {
    dispatch(decrement());
  };
};
