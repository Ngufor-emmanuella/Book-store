import React from 'react';
import Books from './Book';
import Forms from './form';

function BookList() {
  const myBooks = [
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanana Collins',
    },
    {
      id: 2,
      title: 'Ape Ships',
      author: 'Will Smiths',
    },
    {
      id: 3,
      title: 'Keeping Up With The Kardashians',
      author: 'Chirs Jenner',
    },
  ];

  return (
    <div>
      <ul className="final-book">
        {myBooks.map((myBook) => (
          <Books
            key={myBook.id}
            title={myBook.title}
            author={myBook.author}
          />
        ))}
      </ul>
      <Forms />
    </div>
  );
}

export default BookList;
