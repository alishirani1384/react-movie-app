
import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncSeries } from '../../features/movies/movieSlice';




const Home = () => {
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(fetchAsyncMovies())
    dispatch(fetchAsyncSeries())
  },[dispatch])

  return (
    <>
      <div className='banner-img'></div>
      <MovieListing />
    </>
  )
}

export default Home