import axios from 'axios';

export default function buildApi(authHeader) {
    return axios.create({
        headers: { 'Content-Type': 'application/json', 'Authorization': authHeader }
    });
}