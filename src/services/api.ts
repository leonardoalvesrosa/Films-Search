import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://www.omdbapi.com/?apikey=58bdcfc9&'
})