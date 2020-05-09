import { combineReducers } from "redux";

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case "SEARCH_BOOKS":
      return action.payload;
    default:
      return state;
  }
};

const utilityReducer = (
  state = {
    loading: null,
  },
  action
) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  books: booksReducer,
  utilities: utilityReducer,
});
