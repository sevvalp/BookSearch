import React from "react";
import BookItem from "./BookItem";

const BookList = (props) => {
  const bookList = props.books.map((book) => {
    return <BookItem book={book} />;
  });
  return (
    <table class="ui celled table">
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
