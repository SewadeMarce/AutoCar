// hooks/useStripeClientSecret.js
import { useState, useEffect, useCallback } from 'react';
import { createCheckoutSession } from '../services/checkout.service';

/**
 * Hook personnalisé pour récupérer le clientSecret d'une session de paiement.
 * @param {Array} cartItems Tableau d'articles à acheter.
 * @returns {{
 * clientSecret: string|null,
 * loading: boolean,
 * error: string|null
 * }}
 */
export const useStripeClientSecret = (cartItems) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchClientSecret = useCallback(async () => {
    // Create a Checkout Session
    setLoading(true);
    setError(null);

    try {

      return await createCheckoutSession(cartItems);

    } catch (error) {
      console.error("Erreur lors de la création de la session de paiement :", error);
      setError('Impossible de créer la session de paiement. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  }, []);

  // Re-déclenche la requête si les articles du panier changent

  return { fetchClientSecret, loading, error };
};