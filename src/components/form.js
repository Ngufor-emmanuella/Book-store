import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/Books/books';

function Forms() {
  const [cue, setCue] = useState({
    title: '',
    author: '',
  });

  const dispatch = useDispatch();

  const manageInfo = (e) => {
    const input = e.target.value;
    switch (e.target.id) {
      case 'title':
        setCue((inputs) => ({ ...inputs, title: input }));
        break;
      default:
        break;
    }
  };

  const handSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title: cue.title,
      author: cue.author,
      category: 'none',
    };
    dispatch(addBook(newBook));
  };

  return (
    <div className="genaral-contain">
      <h1 className="heading"> ADD NEW BOOK</h1>
      <form className="list-form" onSubmit={handSubmit}>
        <input type="text" name="title" placeholder="Book Title Here" onChange={manageInfo} value={cue.title} />
        <input type="text" name="author" placeholder="Author Name Here" onChange={manageInfo} value={cue.author} />
        <button className="button-sub" type="submit" onClick={handSubmit}>Add Book</button>
      </form>
    </div>
  );
}
export default Forms;
