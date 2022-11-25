import React from 'react';

function Forms() {
  return (
    <div className="genaral-contain">
      <h1 className="heading"> ADD NEW BOOK</h1>
      <form className="list-form">
        <input type="text" name="title" placeholder="Book Title Here" />
        <input type="text" name="author" placeholder="Author Name Here" />
        <button className="button-sub" type="submit">Add Book</button>
      </form>
    </div>
  );
}
export default Forms;
