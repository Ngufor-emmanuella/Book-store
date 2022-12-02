import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/Books/books';

function Books(props) {
  const { id, title, author } = props;
  const dispatch = useDispatch();
  const handSubmit = (e) => {
    e.preventDefault();
    dispatch(removeBook(id));
  };

  return (
    <div className="book-list">
      <div>
        <span className="cate">Category</span>
        <h3>{title}</h3>
        <span className="authors">{author}</span>
        <div className="button">
          <button type="submit">Comments</button>
          <button onClick={handSubmit} type="submit">Remove</button>
          <button type="submit">Edit</button>
        </div>
      </div>

      <div className="reading">
        <div className="pre-pre">
          <div className="progress" />
          <div className="reading-desc">
            <div className="oval" />
            <div className="p-container">
              <span className="percent-complete">78%</span>
              <span className="com">Completed</span>
            </div>
          </div>
        </div>
        <div className="chapter-progress">
          <h2>CURRENT CHAPTER</h2>
          <p>Chapter 12</p>
          <button type="submit">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
}

Books.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
}.isRequired;

export default Books;
