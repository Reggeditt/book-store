import { createSlice } from '@reduxjs/toolkit';

const books = [
  {
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: 3,
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
];

const initialState = {
  books,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      const currentState = state;
      currentState.books = state.books.filter((book) => book.id !== bookId);
      return currentState;
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
