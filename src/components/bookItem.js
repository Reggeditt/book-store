import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, deleteBook } from '../redux/books/booksSlice';
import './bookItem.css';

const BookItem = ({ book, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="book-item-wrap">
      <div className="book-details">
        <div className="book-item__category">{JSON.parse(book).category}</div>
        <div className="book-item__title">{JSON.parse(book).title}</div>
        <div className="book-item__author">{JSON.parse(book).author}</div>
        <div className="book-details-btns">
          <button type="button" className="book-item__comment">Comments</button>
          <div className="line-divide" />
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
          <div className="line-divide" />
          <button type="button" className="book-item__edit">Edit</button>
        </div>
      </div>
      <div className="book-item__status">
        <div className="Oval-2" />
        <div className="status-data">
          <span className="status-data__title">64%</span>
          <span className="status-data__completed">Completed</span>
        </div>
      </div>
      <div className="line-divide Line-2" />
      <div className="book-item__progress">
        <div className="progress-title">CURRENT CHAPTER</div>
        <div className="progress-details">Chapter 17</div>
        <button type="button" className="progress-update">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookItem;
