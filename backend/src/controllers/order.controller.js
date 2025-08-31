// controllers/order.controller.js
import Order from "../models/Order.js";

// 📌 Créer une commande
export const createOrder = async (req, res) => {
  try {
    const { items, totalAmount, paymentInfo } = req.body;

    const order = new Order({
      user: req.user.id, // récupéré via auth middleware
      items,
      totalAmount,
      paymentInfo,
    });

    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(500).json({ message: "Erreur création commande", error: err.message });
  }
};

// 📌 Récupérer toutes les commandes (admin)
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "name email");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Erreur récupération commandes", error: err.message });
  }
};

// 📌 Récupérer une commande par ID
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("user", "name email");
    if (!order) return res.status(404).json({ message: "Commande introuvable" });
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: "Erreur récupération commande", error: err.message });
  }
};

// 📌 Récupérer mes commandes (user connecté)
export const getMyOrders = async (req, res) => {

  try {
    const orders = await Order.find({ user: req.user._id })
      .select('items createdAt')
      .populate({
        path: 'items.car',
        select: 'name image' // sélection des champs du modèle Car
      })
      .sort({ createdAt: -1 })
      .limit(3);;
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Erreur récupération commandes utilisateur", error: err.message });
  }
};

// 📌 Mettre à jour le statut d’une commande (admin)
export const updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Commande introuvable" });

    order.status = req.body.status || order.status;
    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } catch (err) {
    res.status(500).json({ message: "Erreur mise à jour commande", error: err.message });
  }
};

// 📌 Supprimer une commande (optionnel - admin)
export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) return res.status(404).json({ message: "Commande introuvable" });
    res.json({ message: "Commande supprimée" });
  } catch (err) {
    res.status(500).json({ message: "Erreur suppression commande", error: err.message });
  }
};
