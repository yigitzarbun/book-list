import React from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
export default function Mainpage(props) {
  const { books } = props;
  return (
    <div>
      <p>This is the mainpage</p>
      {books.map((book) => (
        <Book book={book} key={book.id} detailedView={false} />
      ))}
    </div>
  );
}
