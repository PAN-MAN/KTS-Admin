import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css'; // Ensure this file exists for styling

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); // Prevents the default form submission
        const correctUsername = 'admin'; // Replace with your desired username
        const correctPassword = 'admin'; // Replace with your desired password

        if (username.trim() === correctUsername && password.trim() === correctPassword) {
            localStorage.setItem('authenticated', 'true');
            navigate('/admin');
        } else {
            setError('Incorrect username or password');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin}>
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
                <button type="submit">Admin Login</button>
            </form>
        </div>
    );
};

export default AdminLogin;
