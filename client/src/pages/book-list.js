import React, { useState } from "react";
import Book from "../components/book";
import axios from "axios";

export default function bookList() {
  const [books, setBooks] = useState([]);
  let booksArray = [];

  axios.get("/api/books").then(booksDB => {
    booksDB.data.forEach(book => {
      booksArray.push(book);
    });
    setBooks(booksArray);
  });

  const renderBooks = () => {
    let bookCards = [];
    if (books.length > 0) {
      books.map(book => {
        bookCards.push( 
          <Book
            key={book._id}
            _id={book._id}
            img={book.image}
            title={book.title}
            description={book.description}
            authors={book.authors}
            publishedDate={book.publishedDate}
            link={book.link}
            button="delete"
          />
        );
      });
    } else {
      bookCards.push(<div key="none">There are no saved books</div>)
    }
    return bookCards
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          {renderBooks()}
        </div>
      </div>
    </div>
  );
}
