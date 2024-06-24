import axios from 'axios';

const usersApi = axios.create({
    baseURL: 'http://localhost:8080/api/users',
});

export default usersApi;
