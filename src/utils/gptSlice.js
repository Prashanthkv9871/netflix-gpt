import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTsearch: false,
  },
  reducers: {
    toggleGPTSearchView: (state, action) => {
      state.showGPTsearch = !state.showGPTsearch;
    },
  },
});

export const { toggleGPTSearchView } = gptSlice.actions;

export default gptSlice.reducer;
