import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  appID: '0GHbRJM3Rw0sScdVnx5z',
  url: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/0GHbRJM3Rw0sScdVnx5z/',
};

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/0GHbRJM3Rw0sScdVnx5z';

export const createApp = createAsyncThunk('books/createApp', async () => {
  const response = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/');
  return response;
});

export const postBooks = createAsyncThunk('books/postBooks', async (newBook) => {
  axios.post(`${url}/books`, newBook);
});

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${url}/books`);
    let { books } = thunkAPI.getState().books;
    books = response.data;
    return books;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteBook = createAsyncThunk('books/deleteBook', async (bookId) => {
  axios.delete(`${url}/books/${bookId}`);
});

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
      const newBook = action.payload;
      const currentState = state.books;
      currentState[newBook.item_id] = [{
        title: newBook.title,
        category: newBook.category,
        author: newBook.author,
      }];
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      const currentState = state;
      delete currentState.books[bookId];
      return currentState;
    },
    filterBooks: (state, action) => {
      const category = action.payload;
      const currentState = state;
      currentState.books = state.books.find((book) => book.category === category);
      return currentState;
    },
  },
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      const newState = state;
      newState.books = [];
      return newState;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      const newState = state;
      newState.books = action.payload;
      return newState;
    },
    [fetchBooks.rejected]: (state, action) => {
      const newState = state;
      newState.books = action.payload;
      return newState;
    },
  },
});

export const {
  clearBooks,
  addBook,
  removeBook,
  filterBooks,
} = booksSlice.actions;

export default booksSlice.reducer;
