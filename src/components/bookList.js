import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from '../redux/books/booksSlice';
// import BookItem from './bookItem';

const BooksList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const booksArray = useSelector((store) => store.books).books;
  console.log(booksArray);
  return (
    <div>
      <h1>All Books</h1>
      {JSON.stringify(booksArray)}
      {/* <BookItem book={JSON.stringify(booksArray[0])} /> */}
    </div>
  );
};

export default BooksList;
