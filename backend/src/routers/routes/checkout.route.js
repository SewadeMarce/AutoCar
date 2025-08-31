
import express from "express";
import { createCheckoutSession, getCheckoutStatus } from "../../controllers/checkout.controller.js";
import { protect } from "../../middleware/auth.js";

const checkoutRoutes = express.Router();

// POST /api/create-checkout-session
checkoutRoutes.post("/create-session",protect, createCheckoutSession);
checkoutRoutes.get('/session-status',protect,getCheckoutStatus)
export default checkoutRoutes;
