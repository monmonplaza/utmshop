import React from "react";
import BookList from "../books/BookList";
import Footer from "../Footer";
import Header from "../Header";
import Hero from "../Hero";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <BookList />
      <Footer />
    </>
  );
};

export default Home;
