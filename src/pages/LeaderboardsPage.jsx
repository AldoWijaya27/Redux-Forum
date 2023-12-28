import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPopulateLeaderboards } from '../states/leaderboards/action';
import LeaderBoardItem from '../components/LeaderboardItem';
import '../styles/leaderboard.css';

export default function LeaderboardsPage() {
  const dispatch = useDispatch();
  const { leaderboards = [] } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncPopulateLeaderboards());
  }, [dispatch]);

  return (
    <div className="leaderboard-container">
      <h2 className="leaderboard-title">Klasemen Pengguna Aktif</h2>

      <div className="head-tb">
        <h3>Pengguna</h3>
        <h3>Skor</h3>
      </div>

      <div className="leaderboard-map">
        {leaderboards.map(({ user, score }) => (
          <LeaderBoardItem key={user.id} user={user} score={score} />
        ))}
      </div>
    </div>
  );
}
