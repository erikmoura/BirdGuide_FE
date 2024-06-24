import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../BirdDetail.css';
import Navbar from './Navbar';

const BirdDetail = ({userId}) => {
    const { id } = useParams();
    const [bird, setBird] = useState(null);
    const [isFavorited, setIsFavorited] = useState(false);
    
   

    useEffect(() => {
        axios.get(`http://localhost:8080/api/birds/${id}`)
            .then(response => {
                setBird(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the bird data!", error);
            });
    }, [id]);

    const handleFavorite = () => {
        axios.post(`http://localhost:8080/api/users/${userId}/favorites/${id}`)
            .then(response => {
                alert("Pássaro adicionado aos favoritos com sucesso!");
                setIsFavorited(true);
            })
            .catch(error => {
                console.error("There was an error adding the bird to favorites!", error);
            });
    };

    if (!bird) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <Navbar />
            <div className="bird-detail-container">
                <h2>{bird.nome}</h2>
                <p><strong>Local:</strong> {bird.local}</p>
                <p><strong>Descrição:</strong> {bird.description}</p>
                <button onClick={handleFavorite} disabled={isFavorited}>
                    {isFavorited ? "Favoritado" : "Favoritar"}
                </button>
            </div>
        </div>
    );
};

export default BirdDetail;

