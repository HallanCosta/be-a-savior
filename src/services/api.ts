import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://be-a-savior.herokuapp.com'
});