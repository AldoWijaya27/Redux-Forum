import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import RegisterPage from './pages/RegisterPage';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import DetailPage from './pages/DetailPage';
import AddThread from './pages/AddThread';
import LeaderboardsPage from './pages/LeaderboardsPage';
import Loading from './components/Loading';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const { isPreload = false, authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const logOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <Routes>
          <Route path="/*" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </>
    );
  }

  return (
    <>
      <Loading />
      <Navigation authUser={authUser} logOut={logOut} />
      <Routes>
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<AddThread />} />
        <Route path="/leaderboards" element={<LeaderboardsPage />} />
        <Route path="/thread/:threadId" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
