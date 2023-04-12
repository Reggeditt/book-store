/* eslint-disable import/no-extraneous-dependencies */
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();

  const getNewBook = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuid(),
      title: e.target[0].value,
      category: e.target[1].value,
      author: e.target[2].value,
    };
    dispatch(addBook(newBook));
  };

  return (
    <form
      className="add-book-form"
      onSubmit={(e) => getNewBook(e)}
    >
      <span>ADD NEW BOOK</span>
      <input type="text" placeholder="Book title" />
      <select>
        <option value="Action">Action</option>
        <option value="Biography">Biography</option>
        <option value="History">History</option>
        <option value="Fiction">Fiction</option>
        <option value="Romance">Romance</option>
      </select>
      <input type="name" placeholder="Author" />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
