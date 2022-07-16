
import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncSeries, getAllMovies } from '../../features/movies/movieSlice';
import ReactLoading from 'react-loading';



const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector(getAllMovies)
 
  useEffect(() => {
    dispatch(fetchAsyncMovies())
    dispatch(fetchAsyncSeries())
  },[dispatch])

  return (
    <>
      <div className="banner-img"></div>
      {Object.keys(data).length === 0 ? (
        <ReactLoading
          className="loading"
          type={"bubbles"}
          color={"blue"}
          height={"30%"}
          width={"90%"}
        />
      ) : (
        <MovieListing />
      )}
    </>
  );
}

export default Home