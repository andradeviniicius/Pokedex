import { configureStore, createSlice } from "@reduxjs/toolkit";

const pokedexSlice = createSlice({
  name: "pokedex",
  initialState: {
    allPokemons: [],
    singlePokemon: {},
  },
  reducers: {
    fillPokemons(state, action) {
      state.allPokemons = action.payload.pokemons;
    },
  },
});

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

const store = configureStore({
  reducer: { pokedex: pokedexSlice.reducer, pokeNews: pokeNewsSlice.reducer },
});

export const pokedexActions = pokedexSlice.actions;

export const pokeNewsActions = pokeNewsSlice.actions;

export default store;