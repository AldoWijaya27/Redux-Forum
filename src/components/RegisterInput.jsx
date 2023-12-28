import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

export default function RegisterInput({ register }) {
  const [name, setName] = useInput('');
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  return (
    <form>
      <input
        type="text"
        name="fullName"
        id="fullName"
        value={name}
        onChange={setName}
        required
        placeholder="Full Name"
      />
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={setEmail}
        required
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={setPassword}
        required
        placeholder="Password"
      />
      <button
        className="button-register"
        type="button"
        onClick={() => register({ name, email, password })}
        name="Registration"
        aria-label="Registration"
      >
        SUBMIT
      </button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};
