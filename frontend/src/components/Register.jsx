import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GiDiamonds } from "react-icons/gi";
import { registerUser, validateEmail } from '../services/AuthServices';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const { username, email, password } = formData;

    const navigate = useNavigate();

    useEffect(() => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                navigate('/home');
            }
        } catch (error) {

        }
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const register = async (e) => {
        e.preventDefault();

        if (!username || !email || !password) {
            console.log(); ("All fields are required!!");
        }

        if (password.length < 6) {
            console.log("Invalid password!!");
        }

        if (!validateEmail(email)) {
            console.log("Invalid email");
        }

        const userData = {
            username,
            email,
            password
        }

        try {
            const data = await registerUser(userData);
            localStorage.setItem('token', data.token);
            navigate('/home');
        } catch (error) {
            console.log(error.message);
        }

    }

    return (
        <div className="wrapper">
            <div className='card'>
                <GiDiamonds size={50} />
                <h1>Register</h1>
                <form onSubmit={register}>
                    <input type="text" name="username" placeholder='Username' required value={username} onChange={handleInputChange} />
                    <input type="email" name="email" placeholder='Email' required value={email} onChange={handleInputChange} />
                    <input type="password" name="password" placeholder='Password' required value={password} onChange={handleInputChange} />
                    <button type='submit' className='btn btn-primary'>Register</button>
                </form>
                <span>Already have an account?</span>
                <Link to='/' className='link' style={{ textDecoration: "none" }}>
                    <span>Login</span>
                </Link>
            </div>
        </div>
    )
}

export default Register;