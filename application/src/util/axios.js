import axios from 'axios';

let config = {
    baseURL: 'http://localhost:3001/api/'
};

export default axios.create(config);
