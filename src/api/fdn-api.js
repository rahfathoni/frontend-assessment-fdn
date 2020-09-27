import axios from 'axios';

const url = 'https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp'

const fdnApi = axios.create({
    baseURL: url
});

export default fdnApi;