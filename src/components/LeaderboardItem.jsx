import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '@mui/material';
import { userShape } from './ThreadItem';
import '../styles/leaderboard.css';

export default function LeaderBoardItem({ user, score }) {
  return (
    <div className="leaderboard-item__container">
      <div className="leaderboard-item">
        <Avatar
          alt="Avatar"
          src={user.avatar}
          sx={{
            width: 30,
            height: 30,
          }}
          style={{ cursor: 'pointer' }}
        />
        <p>{user.name}</p>
      </div>
      <p>{score}</p>
    </div>
  );
}

LeaderBoardItem.propTypes = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,
};
