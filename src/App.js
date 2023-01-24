import React, { useState } from "react";
import { booksData } from "./data";
import { Routes, Route, Link } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import Lists from "./components/Lists";
import BookDetailed from "./components/BookDetailed";
import Book from "./components/Book";

function App() {
  const [books, setBooks] = useState(booksData);
  function handleState(id, status) {
    const booksCopy = [...books];
    const clickedBook = booksCopy.filter((book) => book.id === id)[0];
    clickedBook.status = status;
    setBooks(booksCopy);
  }
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/lists">Lists</Link>
      <Routes>
        <Route exact path="/" element={<Mainpage books={books} />}>
          Main Page
        </Route>
        <Route
          path="/books/:id"
          element={<BookDetailed books={books} />}
        ></Route>
        <Route
          path="/lists"
          element={<Lists books={books} handleState={handleState} />}
        >
          Book Lists
        </Route>
      </Routes>
    </div>
  );
}

export default App;
