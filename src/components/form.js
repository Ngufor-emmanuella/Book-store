import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addBooks } from '../redux/Books/books';

function Forms() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const handSubmit = (e) => {
    e.preventDefault();
    const book = {
      id: nanoid(),
      title,
      author,
    };
    setTitle('');
    setAuthor('');
    dispatch(addBooks(book));
  };

  return (
    <div className="genaral-contain">
      <h1 className="heading"> ADD NEW BOOK</h1>
      <form className="list-form" onSubmit={handSubmit}>
        <input type="text" name="title" placeholder="Book Title Here" />
        <input type="text" name="author" placeholder="Author Name Here" />
        <button className="button-sub" type="submit">Add Book</button>
      </form>
    </div>
  );
}
export default Forms;
