import { Heart, Star, X } from "lucide-react";
import { Link } from "react-router-dom";

// Page Wishlist
const Wishlist = ({ wishlist, onRemoveFromWishlist, onAddToCart }) => {
  if (wishlist.length === 0) {
    return (
      <div className="bg-black text-white min-h-screen pt-16">
        <div className="container mx-auto px-4 py-16 text-center">
          <Heart className="w-24 h-24 mx-auto mb-6 text-gray-600" />
          <h2 className="text-2xl font-bold mb-4">Votre liste de souhaits est vide</h2>
          <p className="text-gray-400 mb-8">Ajoutez des voitures à votre liste de souhaits</p>
          <Link to="/gallery" className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition-colors">
            Découvrir les voitures
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Ma liste de souhaits</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlist.map(car => (
            <div key={car._id} className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="relative">
                <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
                <button
                  onClick={() => onRemoveFromWishlist(car._id)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{car.name}</h3>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < car.rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                  ))}
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-white">${car.price}.00</span>
                  <span className="text-gray-400">/jour</span>
                </div>
                <div className="flex gap-2">
                  <Link
                    to={`/car/${car._id}`}
                    className="flex-1 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors text-center"
                  >
                    Voir
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
          ))}
        </div>
      </div>
    </div>
  );
};
export default Wishlist;