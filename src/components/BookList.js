import React from "react";
import BookItem from "./BookItem";

const BookList = (props) => {
  const bookList = props.bookList.map((book) => {
    return <BookItem book={book} />;
  });

  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Publication Date</th>
        </tr>
      </thead>
      {bookList}
    </table>
  );
};

export default BookList;
