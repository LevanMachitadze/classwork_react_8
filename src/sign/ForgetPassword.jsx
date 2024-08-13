import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const [mail, setMail] = useState('');
  const [username, setUsername] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (mail === '' || username === '' || number === '') {
      setError('Please fill all fields');
    } else {
      setError('');
      navigate('/PasswordSent');
    }
  };

  return (
    <div className='forget_password'>
      <form onSubmit={handleSubmit}>
        <div className='forget_password_inputs'>
          <p>Enter Your Mail</p>
          <input
            type='email'
            placeholder='email'
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <p>Enter Your Username</p>
          <input
            type='text'
            placeholder='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p>Enter Your Mobile Number</p>
          <input
            type='number'
            placeholder='number'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          {error && <p className='error_forget'>{error}</p>}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default ForgetPassword;
