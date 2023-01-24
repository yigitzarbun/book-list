import React from "react";
import { Link } from "react-router-dom";
export default function Book({ book, detailedView }) {
  const { title, author, status, id, description, year, pages } = book;
  return (
    <div key={id}>
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{status}</p>
      {detailedView && (
        <div>
          <p>{description}</p>
          <p>{year}</p>
          <p>{pages}</p>
        </div>
      )}
      {!detailedView && <Link to={`/books/${id}`}>Detailed View</Link>}
    </div>
  );
}
