import axios from 'axios';

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api";

 const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});



// Intercepteur pour ajouter le token à chaque requête
apiClient.interceptors.request.use(
  (config) => {
    // Récupère le token
    const token = localStorage.getItem('token'); 
    
    // Si le token existe, l'ajoute à l'en-tête de la requête
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default apiClient;