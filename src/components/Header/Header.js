import React from 'react';
import { Link } from 'react-router-dom';
import user from '../../image/icons8-male-user-96.png';
import './Header.scss'

const Header = () => {
  return (
    <div className="header">
      <Link to='/'>
        <h2 className="logo">Movie App</h2>
      </Link>
      
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  )
}

export default Header