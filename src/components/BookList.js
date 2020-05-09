import React from "react";
import BookItem from "./BookItem";

const BookList = (props) => {
  const bookList = props.bookList.map((book, index) => {
    return <BookItem book={book} key={index} />;
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
      <tbody>{bookList}</tbody>
    </table>
  );
};

export default BookList;
