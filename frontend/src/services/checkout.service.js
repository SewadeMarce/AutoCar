import apiClient from "../utils/axios";


/**
 * Crée une session de paiement sur le backend.
 * @param {Array} items Les articles à inclure dans la session de paiement.
 * @returns {Promise<string>} Le clientSecret nécessaire pour le paiement.
 */
export const createCheckoutSession = async (items) => {
  try {
    const response = await apiClient.post('/checkout/checkout-session', { items });
    return response.data.clientSecret;
  } catch (error) {
    console.error("Erreur lors de la création de la session de paiement :", error);
    // Relance l'erreur pour que le composant appelant puisse la gérer
    throw error;
  }
};