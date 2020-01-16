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
        setBooks({ books: googBooks.data.items });
        console.log(googBooks.data.items, books);
      });
  };

  const handleSearch = (event, query) => {
    event.preventDefault();
    if (query) {
    searchBooks(query)
    }
  };

  const printBooks = () => {
      if (books.books) {
          return (
        books.books.map(book => {
            console.log(book)
              let bookInfo = book.volumeInfo
              return (
                  <div>
                      <Book 
                        img={bookInfo.imageLinks.smallThumbnail}
                        title={bookInfo.title}
                        description={bookInfo.description}
                        authors={bookInfo.authors}
                        publishedDate={bookInfo.publishedDate}
                        link={bookInfo.previewLink}
                        button="add"
                      />
                  </div>
              )
          })
          )
      } else {
          return (
          <div>Enter your search in the search box to look for books.</div>
          )
      }
  }

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <div className="container">
      <div className="row">
      {printBooks()}
      </div>
      </div>
    </div>
  );
}
