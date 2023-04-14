import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addBook, postBooks } from '../redux/books/booksSlice';

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
      category,
      author,
    };
    console.log(newBook);
    // dispatch(addBook(newBook));
    dispatch(postBooks(newBook));
  };

  return (
    <form className="add-book-form">
      <span>ADD NEW BOOK</span>
      <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Book title" />
      <select>
        { categories.map((category) => (
          <option
            onSelect={(e) => setCategory(e.target.value)}
            key={category}
            value={category}
          >
            {category}
          </option>
        ))}
      </select>
      <input onChange={(e) => setAuthor(e.target.value)} type="name" placeholder="Author" />
      <button
        type="submit"
        onClick={(e) => getNewBook(e)}
      >
        Add Book
      </button>
    </form>
  );
};

export default AddBook;
