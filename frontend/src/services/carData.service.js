import  apiClient  from "../utils/axios";

// Données des voitures
const carsData = [
  {
    id: 1,
    name: "Mercedes Class S",
    category: "luxury",
    price: 500,
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=400",
    rating: 5,
    features: ["GPS", "Cuir", "Climatisation", "Bluetooth"],
    description: "Voiture de luxe exceptionnelle avec tout le confort moderne"
  },
  {
    id: 2,
    name: "Range Rover",
    category: "suv",
    price: 450,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400",
    rating: 5,
    features: ["4x4", "Toit panoramique", "Système audio premium"],
    description: "SUV de luxe parfait pour tous les terrains"
  },
  {
    id: 3,
    name: "Mercedes Class C",
    category: "luxury",
    price: 300,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400",
    rating: 4,
    features: ["Économique", "Confortable", "Moderne"],
    description: "Élégance et performance réunies"
  },
  {
    id: 4,
    name: "Porsche 911",
    category: "sport",
    price: 800,
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400",
    rating: 5,
    features: ["Sport", "Haute performance", "Design iconique"],
    description: "Voiture de sport légendaire"
  },
  {
    id: 5,
    name: "BMW X7",
    category: "suv",
    price: 600,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400",
    rating: 5,
    features: ["Spacieux", "Luxueux", "Technologie avancée"],
    description: "SUV premium avec espace généreux"
  },
  {
    id: 6,
    name: "Audi A8",
    category: "luxury",
    price: 550,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400",
    rating: 5,
    features: ["Confort premium", "Design élégant", "Technologie"],
    description: "Berline de luxe avec finitions exceptionnelles"
  }
]


/**
 * Récupère toutes les voitures depuis l'API.
 * @returns {Promise<Array>} Un tableau de voitures.
 */
export const getCars = async () => {
  try {
    const response = await apiClient.get('/cars');
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des voitures:", error);
    throw error;
  }
};

/**
 * Récupère une voiture spécifique par son ID.
 * @param {string} id L'ID de la voiture.
 * @returns {Promise<Object|null>} L'objet voiture ou null si non trouvée.
 */
export const getCarById = async (id) => {
  try {
    const response = await apiClient.get(`/cars/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la récupération de la voiture avec l'ID ${id}:`, error);
    return null;
  }
};

/**
 * Ajoute une nouvelle voiture.
 * @param {Object} carData Les données de la voiture à ajouter.
 * @returns {Promise<Object>} La nouvelle voiture ajoutée.
 */
export const createCar = async (carData) => {
  try {
    const response = await apiClient.post('/cars', carData);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'ajout de la voiture:", error);
    throw error;
  }
};
