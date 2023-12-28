import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

export default function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <div className="form" noValidate>
      <input
        required
        id="email"
        label="Email Address"
        name="email"
        value={email}
        onChange={onEmailChange}
        placeholder="Email"
      />
      <input
        required
        name="password"
        label="Password"
        type="password"
        id="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="Password"
      />
      <button
        className="button-register"
        type="submit"
        onClick={() => login({ email, password })}
        aria-label="Login"
        name="Login"
      >
        LOGIN
      </button>
    </div>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};
