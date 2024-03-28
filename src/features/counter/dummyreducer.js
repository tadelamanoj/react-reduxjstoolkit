// reducers.js
import { FETCH_ITEMS_REQUEST, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILURE } from "../actions/counterActions";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const dummyreducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_ITEMS_SUCCESS:
      return { ...state, loading: false, items: action.payload, error: null };
    case FETCH_ITEMS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default dummyreducer;
