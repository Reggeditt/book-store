/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const books = [
  {
    id: uuid(),
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    category: 'Action',
  },
  {
    id: uuid(),
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Sci-Fi',
  },
  {
    id: uuid(),
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    category: 'Economy',
  },
];

const initialState = {
  books,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    clearBooks: (state) => {
      const newState = state;
      newState.books = [];
      return newState;
    },
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

export const { clearBooks, addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
