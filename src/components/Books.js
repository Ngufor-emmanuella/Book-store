import React from 'react';
import { useSelector } from 'react-redux';
import BookList from './ListBooks';
import Forms from './form';

const Books = () => {
  const books = useSelector((state) => state.book);
  return (
    <>
      <BookList books={books} />
      <Forms />
    </>
  );
};

export default Books;
