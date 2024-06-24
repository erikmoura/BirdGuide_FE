import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../FavoritesList.css';

const FavoritesList = ({ userId }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/users/${userId}/favorites`)
            .then(response => {
                setFavorites(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the favorites!", error);
            });
    }, [userId]);

    return (
        <div>
            <Navbar userId={userId} />
            <div className="favorites-list-container">
                <h2>Lista de Favoritos</h2>
                {favorites.length === 0 ? (
                    <p>Nenhum pássaro favorito encontrado.</p>
                ) : (
                    favorites.map(bird => (
                        <div key={bird.id} className="favorite-item">
                            <h3>{bird.nome}</h3>
                            <p>{bird.local}</p>
                            <Link to={`/birds/${bird.id}`}>
                                <button>Ver detalhes</button>
                            </Link>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default FavoritesList;
