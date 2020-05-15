import books from "../apis/books.js";

export const searchBooks = (term) => async (dispatch) => {
  const response = await books.get("/v1/volumes", {
    params: {
      q: term,
    },
  });
  if (response.data.items) {
    dispatch({ type: "SEARCH_BOOKS", payload: response.data.items });
  } else {
    dispatch({ type: "SEARCH_BOOKS", payload: [] });
  }
  dispatch(setLoading(false));
};

export const setLoading = (state) => ({
  type: "SET_LOADING",
  payload: state,
});
