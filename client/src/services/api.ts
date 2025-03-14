import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/api',
  timeout: 5000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Erro ao conectar com a API:', error?.message || 'Erro desconhecido');

    return Promise.reject(error);
  },
);

export default api;
