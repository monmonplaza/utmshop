import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const BookItem = ({ book }) => {
  return (
    <>
      <div className="booklist__item">
        <figure className="book__img">
          <img src={book.img} alt="" />
        </figure>
        <div className="booklist__item__content">
          <span className="book__tag">{book.tag}</span>
          <p className="book__text">Unleash your Masterpiece</p>
          <h2 className="book__title">{book.title}</h2>
          <p className="book__author">
            <span>
              {book.id !== "6"
                ? "by: " + book.author
                : "Get a massive discounts"}
            </span>
          </p>

          <Link to={book.url}>
            Shop now <FaAngleRight />
          </Link>
        </div>
      </div>
    </>
  );
};

export default BookItem;
