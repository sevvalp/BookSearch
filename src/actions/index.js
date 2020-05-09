import books from "../apis/books.js";

export const searchBooks = (term) => async (dispatch) => {
  const response = await books.get("/v1/volumes", {
    params: {
      q: term,
    },
  });
  dispatch({ type: "SEARCH_BOOKS", payload: response.data.items });
};
