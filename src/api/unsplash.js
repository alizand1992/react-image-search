import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID f79944000f4ff9831f9bf232ba902d6fcf0df8ba32a5f9e315f39d4466b4aec5',
  },
});