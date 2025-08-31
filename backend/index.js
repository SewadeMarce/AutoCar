import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import carRoutes from "./src/routers/routes/car.route.js";
import authRoutes from "./src/routers/routes/auth.route.js";
import userRoutes from "./src/routers/routes/user.route.js";
import checkoutRoutes from "./src/routers/routes/checkout.route.js";
import orderRoutes from "./src/routers/routes/order.route.js";
import path from 'path'
dotenv.config();

const app = express();
const __dirname = path.resolve();
console.log({evn:process.env.NODE_ENV,__dirname,chemin:path.join(__dirname, "../frontend",)});

// middleware
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}

app.use(express.json());

// Routes
app.use("/api/cars", carRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use('/api/orders', orderRoutes); 


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.use( (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });


}
// Connexion DB + lancement serveur
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  app.listen(process.env.PORT || 5000, () => {
    console.log(`🚀 Server running on port ${process.env.PORT}`);
  });
})
.catch(err => console.error("MongoDB connection error:", err));
