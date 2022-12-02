import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/Books/books';
import Book from './Book';
import Forms from './form';

function Books() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
    // eslint-disable-next-line
    }, []);

  const books = useSelector((state) => state.handBook.entities);

  return (
    <>
      <div className="shelf">
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
          />
        ))}
      </div>
      <Forms />
    </>
  );
}

export default Books;
