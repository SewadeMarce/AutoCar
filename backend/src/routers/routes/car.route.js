import express from "express";
import { createCar, deleteCar, getCarById, getCars, updateCar } from "../../controllers/car.controller.js";

const carRoutes = express.Router();

carRoutes.get("/", getCars);
carRoutes.get("/:id", getCarById);
carRoutes.post("/", createCar);
carRoutes.put("/:id", updateCar);
carRoutes.delete("/:id", deleteCar);

export default carRoutes;
