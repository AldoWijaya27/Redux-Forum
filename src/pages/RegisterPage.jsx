import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';
import '../styles/register.css';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/login');
  };
  return (
    <div className="form-container__root">
      <div className="form-container">
        <h1 className="form-title">DAFTAR</h1>
        <RegisterInput register={onRegister} />
        <p>
          Sudah punya akun? <Link to="/login">Masuk</Link>
        </p>
      </div>
    </div>
  );
}
