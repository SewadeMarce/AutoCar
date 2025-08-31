// models/Order.js
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        car: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Car', // Fait référence au modèle Car
          required: true,
        },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
        startDate: Date,
        endDate: Date,
        duration: Number,
        status: {
          type: String,
          enum: ["pending", "active", "completed", "cancelled"],
          default: "pending",
        }
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "paid", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
    paymentInfo: {
      id: { type: String }, // id stripe ou autre
      status: { type: String },
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
