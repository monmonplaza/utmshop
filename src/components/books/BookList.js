import React from "react";
import BookItem from "./BookItem.js";
import { books } from "./Data.js";
const BookList = () => {
  return (
    <>
      <section className="booklist">
        <div className="container">
          <div className="booklist__wrapper d--grid">
            {books.map((book, index) => {
              return <BookItem book={book} key={index} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default BookList;
