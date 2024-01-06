import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { home } from '../services/AuthServices';

const Home = () => {
  const [msg, setMsg] = useState('');

  const navigate = useNavigate();

  const handleHome = async () => {
    try {
      const data = await home();
      console.log('DATA: ', data);
      setMsg(data.message);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    console.log('CALL 2');
    const token = localStorage.getItem('token');
    console.log("JSON TOKEN: ", token);
    if (!token) {
      navigate('/');
    }
    else {
      handleHome();
    }
  })

  return (
    <>
      <h1>Home Page</h1>
      <strong>{msg}</strong>
    </>
  )
}

export default Home;