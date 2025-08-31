import Stripe from "stripe";
import { config } from "dotenv";
import Order from "../models/Order.js";
config()
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const YOUR_DOMAIN = 'http://localhost:5173';

export const createCheckoutSession = async (req, res) => {

  const { items } = req.body;
  const filteredItems = items.map(item => ({
    _id: item._id,
    price: item.price,
    quantity: item.quantity,
    startDate: item.startDate || new Date(),
    endDate: item.endDate || new Date(),
  }));
  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      line_items: items.map(item => ({
        price_data: {
          currency: "usd",
          product_data: { name: item.name },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity || 1,
      })),
      mode: 'payment',
      return_url: `${YOUR_DOMAIN}/status?session_id={CHECKOUT_SESSION_ID}`,
      metadata: {
        userId: req.user.id,//' si utilisateur connecté
        items: JSON.stringify(filteredItems), // on passe les items pour recréer la commande
      },
    });

    res.send({ clientSecret: session.client_secret });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};


export const getCheckoutStatus = async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);


  if (session.status === "complete") {


    // 1. Récupère les données de la session Stripe
    const { userId, items } = session.metadata;
    const item = JSON.parse(items);

    // ✅ Créer la commande en DB
    try {
      const order = new Order({
        user: userId,
        items: item.map(i => ({
          car: i._id,
          quantity: i.quantity,
          price: i.price,
          startDate: i.startDate || new Date(),
          endDate: i.endDate || new Date(),
        })),
        totalAmount: session.amount_total / 100,
        paymentInfo: {
          id: session.payment_intent,
          status: session.status,
        }, 
        status: "paid",
      });

      await order.save();

      res.send({
        status: session.status,
        customer_email: session.customer_details.email
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({ error: error.message });

    }
  }
};
