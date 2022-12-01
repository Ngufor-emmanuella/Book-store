import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBooks } from '../redux/Books/books';

function Books(props) {
  const dispatch = useDispatch();

  const { title, author, id } = props;

  const handClick = (id) => {
    dispatch(removeBooks(id));
  };

  return (
    <div className="containerBook">
      <ul>
        <li className="book-lists">
          {title}
          {' '}
          By
          {' '}
          {author}
        </li>
      </ul>
      <button type="submit" className="remove-button" onClick={() => handClick(id)}>Remove</button>
    </div>
  );
}

Books.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
}.isRequired;

export default Books;
