import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, enum: ["luxury", "suv", "sport"], required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  features: [{ type: String }],
  description: { type: String }
}, { timestamps: true });

export default mongoose.model("Car", carSchema);
