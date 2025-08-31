
// Les données fictives sont maintenant remplacées par des appels API réels.
// Nous conservons les noms de fonctions pour ne pas casser le hook personnalisé.

import apiClient from "../utils/axios";

/**
 * Récupère toutes les commandes depuis l'API.
 * @returns {Promise<Array>} Une promesse qui résout avec la liste des commandes.
 */
export const getOrders = async () => {
  try {
    const response = await apiClient.get('/orders/user');
    return response.data; // Axios retourne les données dans la propriété 'data'
  } catch (error) {
    console.error("Erreur lors de la récupération des commandes:", error);
    throw error;
  }
};



/**
 * Récupère une commande spécifique par son ID.
 * @param {string} orderId L'ID de la commande.
 * @returns {Promise<Object>} Les données de la commande.
 */
export const fetchOrderById = async (orderId) => {
  try {
    const response = await apiClient.get(`/orders/${orderId}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération de la commande:', error);
    throw error;
  }
};


/**
 * Crée une nouvelle commande via l'API.
 * @param {Object} orderData La nouvelle commande à créer.
 * @returns {Promise<Object>} Une promesse qui résout avec la commande créée.
 */
export const createOrder = async (orderData) => {
  try {
    const response = await API.post('/', orderData);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la création de la commande:", error);
    throw error;
  }
};

/**
 * Met à jour une commande existante via l'API.
 * @param {string} id L'ID de la commande à mettre à jour.
 * @param {Object} updatedFields Les champs à modifier.
 * @returns {Promise<Object>} La commande mise à jour.
 */
export const updateOrder = async (id, updatedFields) => {
  try {
    const response = await API.put(`/${id}`, updatedFields);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la commande:", error);
    throw error;
  }
};

/**
 * Supprime une commande via l'API.
 * @param {string} id L'ID de la commande à supprimer.
 * @returns {Promise<Object>} La réponse de l'API.
 */
export const deleteOrder = async (id) => {
  try {
    const response = await API.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la suppression de la commande:", error);
    throw error;
  }
}; // Données simulées des commandes avec plus d'entrées
  /*
  const [orders, setOrders] = useState([
     {
       _id: '2024-001',
       name: 'Mercedes Class S',
       image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=400',
       startDate: '2024-02-01',
       endDate: '2024-02-05',
       duration: 4,
       total: 2000,
       status: 'active',
       date: '2024-01-28'
     },
     {
       _id: '2024-002',
       name: 'Range Rover',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400',
       startDate: '2024-01-15',
       endDate: '2024-01-20',
       duration: 5,
       total: 2250,
       status: 'completed',
       date: '2024-01-10'
     },
     {
       _id: '2024-003',
       name: 'Porsche 911',
       image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400',
       startDate: '2024-03-01',
       endDate: '2024-03-03',
       duration: 2,
       total: 1600,
       status: 'pending',
       date: '2024-01-25'
     },
     {
       _id: '2024-004',
       name: 'BMW X7',
       image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400',
       startDate: '2024-01-20',
       endDate: '2024-01-25',
       duration: 5,
       total: 3000,
       status: 'completed',
       date: '2024-01-18'
     },
     {
       id: '2024-005',
       name: 'Audi A8',
       image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400',
       startDate: '2024-02-10',
       endDate: '2024-02-12',
       duration: 2,
       total: 1100,
       status: 'cancelled',
       date: '2024-02-05'
     }
  ]);
*/
