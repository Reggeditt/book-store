import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from '../redux/books/booksSlice';
import BookItem from './bookItem';
import './bookList.css';

const BooksList = () => {
  const dispatch = useDispatch();
  const booksObject = useSelector((store) => store.books).books;
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const bookData = (Object.entries(booksObject));
  return (
    <div className="books-list-wrap">
      {
        bookData.map(
          (book) => <BookItem key={book[0]} id={book[0]} book={JSON.stringify(book[1][0])} />,
        )
      }
    </div>
  );
};

export default BooksList;
