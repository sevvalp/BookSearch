import React from "react";
import BookItem from "./BookItem";

const BookList = (props) => {
  const bookList = props.bookList.map((book, index) => {
    return <BookItem book={book} key={index} />;
  });

  return (
    <React.Fragment>
      {bookList.length ? (
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Publication Date</th>
            </tr>
          </thead>
          <tbody>{bookList}</tbody>
        </table>
      ) : (
        <h2>No Result</h2>
      )}
    </React.Fragment>
  );
};

export default BookList;
