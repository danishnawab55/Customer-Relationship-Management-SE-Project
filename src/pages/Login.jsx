import React, { useState } from 'react';
import './login.css'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your login logic here
        if (!email || !password) {
            alert('Please fill in all the fields.');
            return; // Prevent form submission
        }
        navigate('/select');
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="images/logo.png" alt="" width="50" height="50" className="d-inline-block align-text-top me-3" />
                    </a>
                    <div>
                        <Link to='/'>
                            <button className='btn btn-danger'>Go Back</button>
                        </Link>
                    </div>
                </div>
            </nav>
            <div className='model'>
                <div className="container w-50 ">
                    <h2 className='text-center'>Login Page</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                        </div>

                        <div className='text-center mt-3'>
                            <button type="submit" className="btn btn-danger">Submit</button>
                            <p>New User? <a href=" ">Sign up</a></p>
                        </div>
                    </form>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default LoginPage;
