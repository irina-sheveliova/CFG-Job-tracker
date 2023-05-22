import axios from 'axios';

export default function buildApi(authHeader) {
    return axios.create({
        baseURL: 'http://localhost:8080',
        headers: { 'Content-Type': 'application/json', 'Authorization': authHeader }
    });
}