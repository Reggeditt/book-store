import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkCategory: (state) => {
      let currentState = state;
      currentState = 'Under construction';
      return currentState;
    },
  },
});

console.log(categoriesSlice);

export default categoriesSlice.reducer;
