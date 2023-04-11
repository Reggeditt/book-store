import { useSelector } from 'react-redux';
import BookItem from './bookItem';

const BooksList = () => {
  const booksArray = useSelector((state) => state.books);

  return (
    <div>
      {
        booksArray.books.map((book) => (
          <div key={book.id}>
            <BookItem book={JSON.stringify(book)} />
          </div>
        ))
      }
    </div>
  );
};

export default BooksList;
