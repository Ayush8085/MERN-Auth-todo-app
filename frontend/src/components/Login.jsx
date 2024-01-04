import React from 'react'
import { Link } from 'react-router-dom'
import { GiDiamonds } from "react-icons/gi";

const Login = () => {
    return (
        <div className="wrapper">
            <div className='card'>
                <GiDiamonds size={50} />
                <h1>Log in</h1>
                <form>

                    <input type="email" name="email" placeholder='Email' />
                    <input type="password" name="password" placeholder='Password' />

                    <p>Forgot password?</p>
                    <button type='submit' className='btn btn-primary'>Log in</button>
                </form>
                <span>
                    Don't have an account?
                </span>
                <Link to='/register' className='link' style={{ textDecoration: "none" }}>
                    <span>Register</span>
                </Link>
            </div>
        </div>
    )
}

export default Login;