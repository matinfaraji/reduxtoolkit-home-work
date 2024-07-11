import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    tags: [],
  },
  reducers: {
    addTag: (state, action) => {
      state.tags.push(action.payload);
    },
    removeTag: (state, action) => {
      state.tags = state.tags.filter((tag) => tag !== action.payload);
    },clearTag: (state) => {
        state.tags = [];
      }
  },
});
export const { addTag, removeTag,clearTag } = filterSlice.actions;
export default filterSlice.reducer;

