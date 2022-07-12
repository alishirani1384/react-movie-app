import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";


export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    const movieText = "Harry";
    const { data } = await movieApi
      .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
      .catch((err) => console.log(err));
    return data; 
})
export const fetchAsyncSeries = createAsyncThunk(
  "movies/fetchAsyncSeries",
  async () => {
    const seriesText = "friends";
    const { data } = await movieApi
      .get(`?apiKey=${APIKey}&s=${seriesText}&type=series&plot=full`)
      .catch((err) => console.log(err));
    return data;
  }
);
export const fetchAsyncMovieDetail = createAsyncThunk(
  "movies/fetchAsyncMovieDetail",
  async (id) => {
    const { data } = await movieApi
      .get(`?apiKey=${APIKey}&i=${id}`)
      .catch((err) => console.log(err));
    return data;
  }
);

const initialState = {
    movies: {},
    shows: {},
    selectedMovie:{}
}

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
      removeSelectedMovie: (state) => {
          state.selectedMovie={}
      }
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => console.log("Pending"),
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fetched succesfully!");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => console.log("rejected"),
    [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
      console.log("fetched succesfully!");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieDetail.fulfilled]: (state, { payload }) => {
      console.log("fetched succesfully!");
      return { ...state, selectedMovie: payload };
    },
  },
});

export const { removeSelectedMovie } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovie = (state) => state.movies.selectedMovie;
export default movieSlice.reducer;