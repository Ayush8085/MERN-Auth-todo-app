import React from 'react';
import { Link } from 'react-router-dom';
import { GiDiamonds } from "react-icons/gi";

const Register = () => {
    return (
        <div className='card'>
            <GiDiamonds size={50}/>
            <h1>Register</h1>
            <form>
                <input type="text" name="username" placeholder='Username' />
                <input type="email" name="email" placeholder='Email' />
                <input type="password" name="password" placeholder='Password' />
                <button type='submit' className='btn btn-primary'>Register</button>
            </form>
            <span>Already have an account?</span>
            <Link to='/' className='link' style={{ textDecoration: "none" }}>
                <span>Login</span>
            </Link>
        </div>
    )
}

export default Register;