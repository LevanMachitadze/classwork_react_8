import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === '' || password === '') {
      setError('Please write username and password');
    } else {
      setError('');
      navigate(`/welcome/${username}`);
    }
  };

  return (
    <div className='sign_in_container'>
      <form onSubmit={handleSubmit}>
        <div className='sign_in_inputs'>
          <p>Enter Your Username</p>
          <input
            type='text'
            placeholder='Username'
            onChange={handleUsernameChange}
          />
          <p>Enter Your Password</p>
          <input
            type='password'
            placeholder='Password'
            onChange={handlePasswordChange}
          />
          {error && <p className='error_p'>{error}</p>}
        </div>
        <div className='enter_sign_in'>
          <button type='submit'>Sign In</button>
          <Link to='/forgetPassword'>Forget Password?</Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
