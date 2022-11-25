import React from 'react';
import { PropTypes } from 'prop-types';

function Books(props) {
  const { title, author } = props;
  return (
    <div className="containerBook">
      <ul>
        <li className="book-lists">
          {title}
          {' '}
          By
          {author}
        </li>
      </ul>
      <button type="submit" className="remove-button">Remove</button>
    </div>
  );
}

Books.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
}.isRequired;

export default Books;
