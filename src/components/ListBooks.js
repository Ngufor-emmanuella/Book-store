import React from 'react';
import PropTypes from 'prop-types';
import Books from './Book';

const BookList = (props) => {
  const { myBooks } = props;

  return (
    <ul className="final-book">
      {myBooks.map((myBook) => (
        <Books
          key={myBook.id}
          title={myBook.title}
          author={myBook.author}
          id={myBook.id}
        />
      ))}
    </ul>
  );
};

BookList.propTypes = {
  myBooks: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
    }),
  ).isRequired,
};

export default BookList;
