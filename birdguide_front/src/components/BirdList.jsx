import React, { useState, useEffect } from 'react';
import birdsApi from '../axiosApi/birdsApi';
import { Link } from 'react-router-dom';
import SearchBirds from './SearchBirds';
import Navbar from './Navbar'
import '../styling/BirdList.css';

const BirdList = () => {
    const [birds, setBirds] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchBirds = async () => {
            try {
                const response = await birdsApi.get('/listar');
                setBirds(response.data);
            } catch (error) {
                console.error('Erro ao buscar pássaros', error);
            }
        };
        fetchBirds();
    }, []);

    const handleSearchResults = (results) => {
        setSearchResults(results);
    };

    const birdsToDisplay = searchResults.length > 0 ? searchResults : birds;

    return (
        <div>
            <Navbar />
            <div className="bird-list-container">
                <SearchBirds onSearchResults={handleSearchResults} />
                <h2>Lista de Pássaros</h2>
                <div className="bird-list">
                    {birdsToDisplay.map((bird) => (
                        <div key={bird.id} className="bird-item">
                            <h3>{bird.nome}</h3>
                            <img src={bird.image}/>
                            <li><Link to={`/birds/${bird.id}`}>Ver detalhes</Link></li>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
    );
};

export default BirdList;
