import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovieDetail, getSelectedMovie, removeSelectedMovie } from '../../features/movies/movieSlice';
import "./MovieDetails.scss";
import ReactLoading from "react-loading";
const MovieDetails = () => {
  const { imdbID } = useParams()
  const dispatch = useDispatch()
  const data = useSelector(getSelectedMovie)
  console.log(data);

  useEffect(() => {
    dispatch(fetchAsyncMovieDetail(imdbID))
    return () => {
      dispatch(removeSelectedMovie())
    }
  },[dispatch,imdbID])
  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <ReactLoading type={'spin'} color={'blue'} height={"20%"} width={"20%"} />
      ) : (
        <>
          <div className="section-left">
            <h1 className="movie-title">{data.Title}</h1>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"></i>:{data.imdbRating}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i>:{data.imdbVotes}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i>:{data.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calendar"></i>:{data.Year}
              </span>
            </div>
            <div className="movie-plot">{data.plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Genre</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  );
}

export default MovieDetails