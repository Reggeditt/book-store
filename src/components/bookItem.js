import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, deleteBook } from '../redux/books/booksSlice';

const BookItem = ({ book, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="book-item">
      <div className="book-item__title">{JSON.parse(book).title}</div>
      <div className="book-item__author">{JSON.parse(book).author}</div>
      <button
        type="button"
        className="book-item__remove"
        id={id}
        onClick={(e) => {
          dispatch(removeBook(e.target.id));
          dispatch(deleteBook(e.target.id));
        }}
      >
        Remove
      </button>
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookItem;
