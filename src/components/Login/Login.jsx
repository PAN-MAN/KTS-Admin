import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Adjust path as necessary

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Replace this check with a real authentication process
        if (username.trim() === 'admin' && password.trim() === 'admin') {
            localStorage.setItem('authenticated', 'true');
            navigate('/admin');
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="error-message">{error}</p>}
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
