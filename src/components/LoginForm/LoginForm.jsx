import './LoginForm.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/slice/authSlice';

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // Check if localStorage is available and get items
    const localStorageEmail = typeof localStorage !== 'undefined' ? localStorage.getItem('email') : '';
    const localStoragePassword = typeof localStorage !== 'undefined' ? localStorage.getItem('password') : '';

    const [credentials, setCredentials] = useState({
        email: localStorageEmail || '',
        password: localStoragePassword || '',
    });

    const [rememberMe, setRememberMe] = useState(true);

    const authError = useSelector(state => state.auth.error);
    const isLoading = useSelector(state => state.auth.loading);

    const handleRememberMe = () => {
        setRememberMe(!rememberMe);
    };

    let content;
    if (isLoading) {
        content = <p>Loading...</p>;
    } else if (authError) {
        content = <span className="errorMessage">{authError.message || 'Invalid username or password'}</span>;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (rememberMe) {
            localStorage.setItem('email', credentials.email);
            localStorage.setItem('password', credentials.password);
        } else {
            localStorage.removeItem('email');
            localStorage.removeItem('password');
        }

        try {
            const resultAction = await dispatch(loginUser(credentials));
            if (loginUser.fulfilled.match(resultAction)) {
                navigate('/user');
            }
        } catch (error) {
            console.error('Failed to login:', error);
        }
    };

    const handleChange = (event) => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div className="login-form">
            <form onSubmit={handleSubmit} className="form">
                <div className="input-wrapper">
                    <label htmlFor="username" className="formText">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="email"
                        autoFocus
                        value={credentials.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password" className="formText">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-remember">
                    <input
                        type="checkbox"
                        id="remember-me"
                        checked={rememberMe}
                        onChange={handleRememberMe}
                    />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button type="submit" className="sign-in-button">Sign In</button>
                {content}
            </form>
        </div>
    );
};

export default LoginForm;
