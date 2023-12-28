import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncCreateThread } from '../states/threads/action';
import ThreadInput from '../components/ThreadInput';
import '../styles/addThread.css';

export default function AddThread() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncCreateThread({ title, body, category }));
    navigate('/');
  };

  return (
    <div className="add-thread-container">
      <h1 className="add-thread-title">New Thread</h1>
      <ThreadInput addThread={onAddThread} />
    </div>
  );
}
