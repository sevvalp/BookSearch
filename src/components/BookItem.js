import React from "react";
import books from "../apis/books";

const BookItem = ({ book }) => {
  return (
    <tr>
      <td data-label="Title">{book.volumeInfo.title}</td>
      <td data-label="Author">{book.volumeInfo.authors[0]}</td>
      <td data-label="Published Date">{book.volumeInfo.publishedDate}</td>
    </tr>
  );
};

export default BookItem;
