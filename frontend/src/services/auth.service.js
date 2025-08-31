import apiClient from "../utils/axios";

/**
 * Fonction de connexion utilisateur.
 * @param {string} email L'email de l'utilisateur.
 * @param {string} password Le mot de passe de l'utilisateur.
 * @returns {Promise<Object>} Un objet contenant les données utilisateur et le token JWT.
 */
export async function authLogin(formData) {
  try {
    const response = await apiClient.post('/auth/login', formData);

    // Si la connexion réussit, stockez le token JWT
    if (response.data.token) {

      localStorage.setItem("token", response.data.token);

    }
    const { user } = response.data
    return user;
  } catch (error) {
    // Si la requête échoue, lancez une erreur pour que le composant appelant la gère.
    console.error("Erreur lors de la connexion:", error);
    throw error;
  }
};

// Enregistrement d'un nouvel utilisateur
export async function authRegister(userData) {
  try {
    const res = await apiClient.post("/auth/register", userData);

    const {token,user} =  res.data

    if (token) {
        localStorage.setItem("token", res.data.token);
    }
    return user;
  } catch (error) {
    console.error("Erreur register:", error);
    throw error;
  }
}

export async function me() {
  try {

    const res = await apiClient.get("/auth/me");

    return res.data?.user;

  } catch (error) {
    console.error("Erreur user:", error);
    throw error;
  }
}

/**
 * Fonction de déconnexion utilisateur.
 */
export const logout = () => {
  localStorage.removeItem('user');
};

/**
 * Fonction pour obtenir l'utilisateur courant stocké localement.
 * @returns {Object|null} Les données utilisateur ou null.
 */
export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  if (userStr) {
    return JSON.parse(userStr);
  }
  return null;
};