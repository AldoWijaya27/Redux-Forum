import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { userShape } from './ThreadItem';
import '../styles/navigation.css';

export default function Navigation({ authUser, logOut }) {
  return (
    <div className="nav-container">
      <div className="nav-container__left">
        <Avatar
          alt="Avatar"
          className="avatar"
          src={authUser.avatar}
          sx={{
            width: 42,
            height: 40,
            mr: 3,
          }}
          style={{ cursor: 'pointer' }}
        />
        <h2 className="nav-title">
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            Redux Forum
          </Link>
        </h2>
      </div>

      <div className="menu">
        <Link to="/" className="menu-items">
          Threads
        </Link>
        <Link to="/leaderboards" className="menu-items">
          Leaderboards
        </Link>

        <button type="submit" className="logout" onClick={logOut}>
          Logout
        </button>
      </div>
    </div>
  );
}

Navigation.propTypes = {
  authUser: PropTypes.shape(userShape).isRequired,
  logOut: PropTypes.func.isRequired,
};
