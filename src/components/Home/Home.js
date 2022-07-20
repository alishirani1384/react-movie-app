
import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncSeries } from '../../features/movies/movieSlice';



const Home = ({text}) => {
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(fetchAsyncMovies(text))
    dispatch(fetchAsyncSeries(text))
  },[dispatch,text])

  return (
    <>
      <div className="banner-img"></div>
        <MovieListing />
    </>
  );
}

export default Home