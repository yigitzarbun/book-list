import React from "react";
import Book from "./Book";
import { useParams } from "react-router-dom";
export default function BookDetailed(params) {
  const { id } = useParams();
  const { books } = params;
  const selectedBook = books.filter((book) => book.id === id)[0];
  return <Book detailedView={true} book={selectedBook}></Book>;
}
