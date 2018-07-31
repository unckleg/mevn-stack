import axios from 'axios';

let config = {
    baseURL: 'http://localhost:' + process.env.API_PORT + '/api/'
};

export default axios.create(config);
