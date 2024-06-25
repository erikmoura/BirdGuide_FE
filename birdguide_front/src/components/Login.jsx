import React, { useState } from 'react';
import usersApi from '../axiosApi/usersApi';
import '../styling/Login.css';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await usersApi.post('/login', { username, senha: password });
            const userId = response.data;
            onLogin(userId);
        } catch (error) {
            setMessage('Nome de usuário ou senha inválidos.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nome de usuário:</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                    <div>
                        <label>Senha:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit">Login</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </div>
    );
};

export default Login;
