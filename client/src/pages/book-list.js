import React, { useState, useEffect } from "react";
import Book from "../components/book";
import axios from "axios";

export default function bookList() {
  const [books, setBooks] = useState([]);

  axios.get("/api/books").then(booksDB => {
    setBooks({ books: booksDB.data });
    console.log(books);
  });

  return (
    <div>
      <div className="container">
        <div className="row"></div>
      </div>
    </div>
  );
}
