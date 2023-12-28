import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action';
import LoginInput from '../components/LoginInput';
import '../styles/register.css';

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
    navigate('/');
  };
  return (
    <div className="form-container__root">
      <div className="form-container">
        <h1 className="form-title">MASUK</h1>
        <LoginInput login={onLogin} />
        <p>
          Belum punya akun? <Link to="/register">Daftar</Link>
        </p>
      </div>
    </div>
  );
}
