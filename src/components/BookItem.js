import React from "react";

const BookItem = ({ book }) => {
  return (
    <tr>
      <td data-label="Title">
        <a href={book.volumeInfo.infoLink}>{book.volumeInfo.title}</a>
      </td>
      <td data-label="Author">
        {book.volumeInfo.authors
          ? book.volumeInfo.authors.join(", ")
          : "Unknown"}
      </td>
      <td data-label="Publication Date">{book.volumeInfo.publishedDate}</td>
    </tr>
  );
};

export default BookItem;
