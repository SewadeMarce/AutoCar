import { Link, useNavigate, useParams } from "react-router-dom";
import { useCars } from "../hooks/useCar";
import { useState } from "react";
import { Heart, Star } from "lucide-react";

// Page Détail Voiture
const CarDetail = ({ cars, onAddToCart, onAddToWishlist, wishlist }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cars: car, error, loading } = useCars(id); // id => une voiture

  //const car = cars.find(car => car._id === parseInt(id));
  const [selectedDates, setSelectedDates] = useState({ start: '', end: '' });
  const [quantity, setQuantity] = useState(1);

  if (!car) {
    return (
      <div className="bg-black text-white min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Voiture non trouvée</h2>
          <Link to="/gallery" className="bg-yellow-400 text-black px-6 py-2 rounded">
            Retour à la galerie
          </Link>
        </div>
      </div>
    );
  }

  const handleReservation = () => {
    if (!selectedDates.start || !selectedDates.end) {
      alert('Veuillez sélectionner les dates de location');
      return;
    }

    const reservationData = {
      ...car,
      startDate: selectedDates.start,
      endDate: selectedDates.end,
      quantity
    };

    onAddToCart(reservationData);
    navigate('/cart');
  };

  return (
    <div className="bg-black text-white min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        <button onClick={() => navigate(-1)} className="mb-6 text-yellow-400 hover:text-yellow-300">
          ← Retour
        </button>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <img src={car.image} alt={car.name} className="w-full rounded-lg mb-6" />
            <div className="grid grid-cols-3 gap-4">
              <img src={car.image} alt={car.name} className="w-full h-24 object-cover rounded" />
              <img src={car.image} alt={car.name} className="w-full h-24 object-cover rounded opacity-50" />
              <img src={car.image} alt={car.name} className="w-full h-24 object-cover rounded opacity-50" />
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-4">{car.name}</h1>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < car.rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
              ))}
              <span className="ml-2 text-gray-400">({car.rating}/5)</span>
            </div>

            <div className="text-3xl font-bold mb-6">
              ${car.price}.00 <span className="text-lg text-gray-400">/jour</span>
            </div>

            <p className="text-gray-300 mb-6">{car.description}</p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Caractéristiques</h3>
              <div className="grid grid-cols-2 gap-2">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Dates de location</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="date"
                  className="bg-gray-800 text-white px-4 py-2 rounded"
                  value={selectedDates.start}
                  onChange={(e) => setSelectedDates({ ...selectedDates, start: e.target.value })}
                />
                <input
                  type="date"
                  className="bg-gray-800 text-white px-4 py-2 rounded"
                  value={selectedDates.end}
                  onChange={(e) => setSelectedDates({ ...selectedDates, end: e.target.value })}
                />
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => onAddToWishlist(car)}
                className={`flex items-center justify-center w-12 h-12 rounded ${wishlist.some(item => item._id === car._id) ? 'bg-red-500' : 'bg-gray-800'} hover:bg-red-500 transition-colors`}
              >
                <Heart className={`w-5 h-5 ${wishlist.some(item => item._id === car._id) ? 'fill-white' : ''} text-white`} />
              </button>
              <button
                onClick={handleReservation}
                className="flex-1 bg-yellow-400 text-black py-3 px-6 rounded font-semibold hover:bg-yellow-500 transition-colors"
              >
                Réserver maintenant
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarDetail