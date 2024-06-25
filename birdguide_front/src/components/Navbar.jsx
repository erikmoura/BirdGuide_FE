import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/Navbar.css';
import logo from '../assets/logo.png'

const Navbar = ({ userId }) => {
    return (
        <nav className="navbar">
            <ul>
                <img src={logo} alt="Logo" className="logo" />
                <span className="title">Bird Guide</span>
                <li><Link to="/">Página Inicial</Link></li>
                <li><Link to="/profile">Perfil</Link></li>
                <li><Link to={`/users/${userId}/favorites`}>Lista de Favoritos</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
