import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncSeries } from '../../features/movies/movieSlice';

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  function submit(e) {
    e.preventDefault()
    dispatch(fetchAsyncSeries(term));
    dispatch(fetchAsyncMovies(term));
  }
  
  return (
    <div className="header">
      <Link to="/">
        <h2 className="logo">Movie App</h2>
      </Link>
      <div className="search-box">
        <form onSubmit={submit}>
          <input type="text" placeholder='Search...' value={term} onChange={(e) => setTerm(e.target.value)} />
        </form>
        <i className='fa fa-search' onClick={submit}></i>
      </div>
    </div>
  );
}

export default Header