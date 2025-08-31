import { protect } from "../../middleware/auth.js";
import express from 'express';
import { createOrder, getAllOrders, getMyOrders, getOrderById, updateOrderStatus } from "../../controllers/order.controller.js";

const orderRoutes = express.Router();

// Route pour créer une nouvelle commande
orderRoutes.post('/', createOrder);

// Récupérer mes commandes (user connecté)
orderRoutes.get('/user',protect, getMyOrders);

// Route pour obtenir toutes les commandes
orderRoutes.get('/', getAllOrders);

// Route pour obtenir une commande par ID
orderRoutes.get('/:id', getOrderById);

// Route pour mettre à jour le statut d'une commande
orderRoutes.put('/:id/status', updateOrderStatus);


export default orderRoutes;
