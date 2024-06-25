import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styling/BirdDetail.css';
import Navbar from './Navbar';


const BirdDetail = ({ userId }) => {
    const { id } = useParams();
    const [bird, setBird] = useState({});
    const [isFavorited, setIsFavorited] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/birds/${id}`)
            .then(response => {
                setBird(response.data);
            })
            .catch(error => {
                console.error("Erro ao encontrar pássaro", error);
            });
    }, [id]);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/users/${userId}/favorites`)
            .then(response => {
                const favorites = response.data;
                const isFav = favorites.some(favorite => favorite.id === parseInt(id));
                setIsFavorited(isFav);
            })
            .catch(error => {
                console.error("Erro ao checar os favoritos", error);
            });
    }, [id, userId]);

    const handleFavoriteClick = () => {
        const url = `http://localhost:8080/api/users/${userId}/favorites/${id}`;
        if (isFavorited) {
            axios.delete(url)
                .then(() => {
                    setIsFavorited(false);
                })
                .catch(error => {
                    console.error("Erro ao remover favorito", error);
                });
        } else {
            axios.post(url)
                .then(() => {
                    setIsFavorited(true);
                })
                .catch(error => {
                    console.error("Erro ao adicionar favorito", error);
                });
        }
    };

    return (
        <div>
            <Navbar userId={userId} />
            <div className="bird-detail-container">
                <img src={bird.image}/>
                <h2>{bird.nome}</h2>
                <p>{bird.local}</p>
                <p>{bird.description}</p>
                <button onClick={handleFavoriteClick}>
                    {isFavorited ? "Favoritado" : "Favoritar"}
                </button>
            </div>
        </div>
    );
};

export default BirdDetail;


