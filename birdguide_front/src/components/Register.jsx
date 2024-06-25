import React, { useState } from 'react';
import usersApi from '../axiosApi/usersApi';
import '../styling/Register.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await usersApi.post('/register', { username, senha: password, email });
            setMessage(response.data);
        } catch (error) {
            setMessage('Erro ao registrar usuário. Verifique se o nome de usuário ou email já estão registrados.');
        }
    };

    return (
        <div className="register-container">
            <div className="register-form">
                <h2>Registro</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nome de usuário:</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                    <div>
                        <label>Senha:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <button type="submit">Registro</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </div>
    );
};

export default Register;
