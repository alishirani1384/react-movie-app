import { configureStore } from "@reduxjs/toolkit";
import moviesReduser from './movies/movieSlice'

export const store = configureStore({
    reducer: {
        movies:moviesReduser
    },
});
