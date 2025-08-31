import { Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";

// Composant CarCard
const CarCard = ({ car, onAddToCart, onAddToWishlist, isInWishlist }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
      <div className="relative">
        <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
        <button
          onClick={() => onAddToWishlist(car)}
          className={`absolute top-4 right-4 p-2 rounded-full ${isInWishlist ? 'bg-red-500' : 'bg-black/50'} hover:bg-red-500 transition-colors`}
        >
          <Heart className={`w-4 h-4 ${isInWishlist ? 'fill-white' : ''} text-white`} />
        </button>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{car.name}</h3>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < car.rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
          ))}
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-white">${car.price}.00</span>
          <span className="text-gray-400">/jour</span>
        </div>
        <div className="flex gap-2 mb-4">
          {car.features.slice(0, 2).map((feature, index) => (
            <span key={index} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">
              {feature}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <Link
            to={`/car/${car._id}`}
            className="flex-1 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors text-center"
          >
            Détails
          </Link>
          <button
            onClick={() => onAddToCart(car)}
            className="flex-1 bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-500 transition-colors font-semibold"
          >
            Réserver
          </button>
        </div>
      </div>
    </div>
  );
};
export default CarCard;