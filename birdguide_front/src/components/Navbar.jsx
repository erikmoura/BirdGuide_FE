import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css';

const Navbar = ({ userId }) => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Lista de Pássaros</Link></li>
                <li><Link to="/profile">Perfil</Link></li>
                <li><Link to={`/users/${userId}/favorites`}>Lista de Favoritos</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
