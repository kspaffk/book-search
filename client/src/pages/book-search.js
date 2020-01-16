import React, { useState } from "react";
import Search from "../components/search";
import Book from "../components/book";
import axios from "axios";

export default function bookSearch() {
  const [books, setBooks] = useState([]);

  const searchBooks = query => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then(googBooks => {
        setBooks(googBooks.data.items);
      });
  };

  const handleSearch = (event, query) => {
    event.preventDefault();
    if (query) {
    return searchBooks(query)
    }
  };

  const printBooks = () => {
      if (books.length > 0) {
          return (
        books.map(book => {
              let bookInfo = book.volumeInfo
              let bookImg = "img/noimgavail.jpg";
              if (bookInfo.imageLinks) {
                bookImg = bookInfo.imageLinks.smallThumbnail
              }
              return (
                      <Book 
                        key={book.id}
                        img={bookImg}
                        title={bookInfo.title}
                        description={bookInfo.description}
                        authors={bookInfo.authors}
                        publishedDate={bookInfo.publishedDate}
                        link={bookInfo.previewLink}
                        button="add"
                      />
              )
          })
          )
      } else {
          return (
          <div key="none">Enter your search in the search box to look for books.</div>
          )
      }
  }

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <hr></hr>
      <div className="container">
      <div className="row">
      {printBooks()}
      </div>
      </div>
    </div>
  );
}
