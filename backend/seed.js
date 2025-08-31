import mongoose from "mongoose";
import dotenv from "dotenv";
import Car from "./src/models/Car.js";

dotenv.config();

const carsData = [
  {
    name: "Mercedes Class S",
    category: "luxury",
    price: 500,
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=400",
    rating: 5,
    features: ["GPS", "Cuir", "Climatisation", "Bluetooth"],
    description: "Voiture de luxe exceptionnelle avec tout le confort moderne"
  },
  {
    name: "Range Rover",
    category: "suv",
    price: 450,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400",
    rating: 5,
    features: ["4x4", "Toit panoramique", "Système audio premium"],
    description: "SUV de luxe parfait pour tous les terrains"
  },
  {
    name: "Mercedes Class C",
    category: "luxury",
    price: 300,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400",
    rating: 4,
    features: ["Économique", "Confortable", "Moderne"],
    description: "Élégance et performance réunies"
  },
  {
    name: "Porsche 911",
    category: "sport",
    price: 800,
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400",
    rating: 5,
    features: ["Sport", "Haute performance", "Design iconique"],
    description: "Voiture de sport légendaire"
  },
  {
    name: "BMW X7",
    category: "suv",
    price: 600,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400",
    rating: 5,
    features: ["Spacieux", "Luxueux", "Technologie avancée"],
    description: "SUV premium avec espace généreux"
  },
  {
    name: "Audi A8",
    category: "luxury",
    price: 550,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400",
    rating: 5,
    features: ["Confort premium", "Design élégant", "Technologie"],
    description: "Berline de luxe avec finitions exceptionnelles"
  }
];

mongoose.connect(process.env.MONGO_URI)
.then(async () => {
  await Car.deleteMany();
  await Car.insertMany(carsData);
  console.log("✅ Cars seeded successfully!");
  mongoose.connection.close();
})
.catch(err => console.error(err));
