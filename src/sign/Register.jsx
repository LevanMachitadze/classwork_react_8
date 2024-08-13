import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [time, setTime] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const countdown = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    const timer = setTimeout(() => {
      navigate('/SignIn');
    }, 5000);

    return () => {
      clearInterval(countdown);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div className='registration_success'>
      <h2>Registration Successful! 🥳</h2>
      <p>Returning to Sign In Page in {time} seconds...</p>
    </div>
  );
};

export default Register;
