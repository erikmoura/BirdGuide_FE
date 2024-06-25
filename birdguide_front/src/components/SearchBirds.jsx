import React, { useState } from 'react';
import birdsApi from '../axiosApi/birdsApi';

const SearchBirds = ({ onSearchResults }) => {
    const [query, setQuery] = useState('');

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const response = await birdsApi.get(`/pesquisar?nome=${query}`);
            onSearchResults(response.data);
        } catch (error) {
            console.error('Erro ao pesquisar pássaros', error);
        }
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    required
                />
                <button type="submit">Pesquisar</button>
            </form>
        </div>
    );
};

export default SearchBirds;
