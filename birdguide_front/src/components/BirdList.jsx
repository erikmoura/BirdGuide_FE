import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../BirdList.css';
import Navbar from './Navbar';

const BirdList = () => {
    const [birds, setBirds] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/birds/listar')
            .then(response => {
                setBirds(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the bird data!", error);
            });
    }, []);

    return (
        <div>
            <Navbar />
            <div className="bird-list-container">
                <h2>Lista de Pássaros</h2>
                <div className="bird-list">
                    {birds.map(bird => (
                        <div key={bird.id} className="bird-item">
                            <h3>{bird.nome}</h3>
                            <p><strong>Local:</strong> {bird.local}</p>
                            <p><strong>Descrição:</strong> {bird.description}</p>
                            <Link to={`/birds/${bird.id}`}>
                                <button>Ver detalhes</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BirdList;
