import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import carRoutes from "./src/routers/routes/car.route.js";
import authRoutes from "./src/routers/routes/auth.route.js";
import userRoutes from "./src/routers/routes/user.route.js";
import checkoutRoutes from "./src/routers/routes/checkout.route.js";
import orderRoutes from "./src/routers/routes/order.route.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/cars", carRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use('/api/orders', orderRoutes); 


// Connexion DB + lancement serveur
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  app.listen(process.env.PORT || 5000, () => {
    console.log(`🚀 Server running on port ${process.env.PORT}`);
  });
})
.catch(err => console.error("MongoDB connection error:", err));
