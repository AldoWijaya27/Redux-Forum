import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import ThreadsList from '../components/ThreadsList';
import asyncPopulateUsersAndThreads from '../states/shared/action';
import {
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeturalizeVoteThread,
} from '../states/threads/action';
import '../styles/homePage.css';

function HomePage() {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const categories = new Set(threads.map((thread) => thread.category));

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const upVoteThread = (id) => {
    dispatch(asyncUpVoteThread(id));
  };

  const downVoteThread = (id) => {
    dispatch(asyncDownVoteThread(id));
  };

  const neturalizeVoteThread = (id) => {
    dispatch(asyncNeturalizeVoteThread(id));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    threadOwner: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <div className="home-page__container">
      {' '}
      Terpopuler:
      {Array.from(categories).map((category) => {
        if (filter === category) {
          return (
            <button
              className="button-filter"
              key={category}
              onClick={() => setFilter('')}
              type="submit"
            >
              {`#${category}`}
            </button>
          );
        }
        return (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className="button-filter"
            type="submit"
          >
            {`#${category}`}
          </button>
        );
      })}
      <ThreadsList
        threads={
          filter
            ? threadList.filter((thread) => thread.category === filter)
            : threadList
        }
        upVote={upVoteThread}
        downVote={downVoteThread}
        neturalizeVote={neturalizeVoteThread}
      />
      <Link to="/new">
        <div className="add-button">
          <AddIcon />
        </div>
      </Link>
    </div>
  );
}

export default HomePage;
