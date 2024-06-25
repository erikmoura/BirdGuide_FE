import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import '../styling/UserProfile.css';

const UserProfile = ({ userId }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/users/${userId}/profile`)
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the user profile!", error);
            });
    }, [userId]);

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <Navbar />
            <div className="user-profile-container">
                <h2>Perfil do Usuário</h2>
                <p><strong>Nome:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
            </div>
        </div>
    );
};

export default UserProfile;
