import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleConfirmEmailChange = (event) => {
    setConfirmEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !username || !email || !confirmEmail || !number) {
      setError('Please fill all fields');
    } else if (email !== confirmEmail) {
      setError('Emails do not match');
    } else {
      setError('');

      navigate('/Register');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='sign_up_inputs'>
          <p>Enter your name</p>
          <input type='text' value={name} onChange={handleNameChange} />

          <p>Enter your username</p>
          <input type='text' value={username} onChange={handleUsernameChange} />

          <p>Enter your email</p>
          <input type='email' value={email} onChange={handleEmailChange} />

          <p>Confirm email</p>
          <input
            type='email'
            value={confirmEmail}
            onChange={handleConfirmEmailChange}
          />
          {error && <p className='error_message'>{error}</p>}

          <p>Enter your number</p>
          <input type='number' value={number} onChange={handleNumberChange} />
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default SignUp;
