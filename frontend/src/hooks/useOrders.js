// src/hooks/useOrders.js

import { useState, useEffect } from 'react';
import { getOrders } from '../services/order.service';
import { transformBackendOrders } from '../utils/order-transform';

/**
 * Hook personnalisé pour gérer les données de commandes.
 * Fournit l'état des commandes, des indicateurs de chargement et des fonctions pour interagir avec le service.
 */
export const useOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  /**
   * Fonction pour charger les commandes depuis le service.
   */
  const fetchOrders = async () => {
    setIsLoading(true);
    setErrors(null);
    try {

       const data = await getOrders();

      const transformBackend = transformBackendOrders(data)
      setOrders(transformBackend);
      
    } catch (e) {

      console.error(e);
      setErrors('Impossible de charger les commandes.');
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Fonction pour créer une commande.
   * @param {Object} newOrderData Les données de la nouvelle commande.
   */
  const addOrder = async (newOrderData) => {
    setIsLoading(true);
    setErrors(null);
    try {
      const addedOrder = await ordersService.createOrder(newOrderData);
      setOrders(prevOrders => [...prevOrders, addedOrder]);
    } catch (e) {
            console.error(e);

      setErrors('Impossible de créer la commande.');
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Fonction pour mettre à jour une commande existante.
   * @param {string} id L'ID de la commande à mettre à jour.
   * @param {Object} updatedFields Les champs à modifier.
   */
  const updateExistingOrder = async (id, updatedFields) => {
    setIsLoading(true);
    setError(null);
    try {
      const updatedOrder = await ordersService.updateOrder(id, updatedFields);
      setOrders(prevOrders =>
        prevOrders.map(o => o.id === id ? updatedOrder : o)
      );
    } catch (e) {
            console.error(e);

      setErrors('Impossible de mettre à jour la commande.');
    } finally {
      setIsLoading(false);
    }
  };

  // Charge les commandes lors du montage initial du composant qui utilise ce hook
  useEffect(() => {
    fetchOrders();
  }, []);

  return {
    orders,
    isLoading,
    errors,
    fetchOrders,
    addOrder,
    updateExistingOrder
  };
};