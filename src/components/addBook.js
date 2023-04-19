import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addBook, postBooks } from '../redux/books/booksSlice';
import './addBook.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const getNewBook = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuid(),
      title,
      category: category || 'Other',
      author,
    };
    dispatch(addBook(newBook));
    dispatch(postBooks(newBook));
  };
  const clearForm = (e) => {
    console.log(e.target);
  };

  return (
    <>
      <div className="Line" />
      <span className="add-book-title">ADD NEW BOOK</span>
      <form className="add-book-form" onSubmit={(e) => clearForm(e)}>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          placeholder="Book title"
          className="title-input"
        />
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="categories-select"
        >
          { categories.map((category) => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))}
        </select>
        <input
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
          type="name"
          placeholder="Author"
          className="author-input"
        />
        <button
          type="submit"
          onClick={(e) => getNewBook(e)}
          className="add-book-btn"
        >
          Add Book
        </button>
      </form>
    </>

  );
};

export default AddBook;
