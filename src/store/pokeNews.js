import { createSlice } from "@reduxjs/toolkit";

const pokeNewsSlice = createSlice({
  name: "pokeNews",
  initialState: {
    allNews: [],
  },
  reducers: {
    fillNews(state, action) {
      state.allNews = action.payload.news;
    },
  },
});
export const pokeNewsActions = pokeNewsSlice.actions;
export default pokeNewsSlice.reducer;
