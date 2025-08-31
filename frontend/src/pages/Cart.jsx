import { ShoppingCart, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// Page Panier
const Cart = ({ cartItems, onUpdateQuantity, onRemoveFromCart, user }) => {
  const navigate = useNavigate();
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    navigate('/checkouts');
  };

  if (cartItems.length === 0) {
    return (
      <div className="bg-black text-white min-h-screen pt-16">
        <div className="container mx-auto px-4 py-16 text-center">
          <ShoppingCart className="w-24 h-24 mx-auto mb-6 text-gray-600" />
          <h2 className="text-2xl font-bold mb-4">Votre panier est vide</h2>
          <p className="text-gray-400 mb-8">Découvrez notre collection de voitures de luxe</p>
          <Link to="/gallery" className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition-colors">
            Voir les voitures
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Panier</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {cartItems.map(item => (
              <div key={item._id} className="bg-gray-900 rounded-lg p-6 mb-4 flex items-center">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded mr-6" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-400">${item.price}/jour</p>
                  {item.startDate && item.endDate && (
                    <p className="text-sm text-gray-400">
                      Du {item.startDate} au {item.endDate}
                    </p>
                  )}
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onUpdateQuantity(item._id, Math.max(1, item.quantity - 1))}
                      className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item._id, item.quantity + 1)}
                      className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-xl font-semibold">
                    ${item.price * item.quantity}
                  </div>
                  <button
                    onClick={() => onRemoveFromCart(item._id)}
                    className="text-red-500 hover:text-red-400"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 rounded-lg p-6 h-fit">
            <h3 className="text-xl font-semibold mb-4">Récapitulatif</h3>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Sous-total:</span>
                <span>${total}</span>
              </div>
              <div className="flex justify-between">
                <span>Assurance:</span>
                <span>$50</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes:</span>
                <span>${Math.round(total * 0.1)}</span>
              </div>
              <div className="border-t border-gray-700 pt-2 flex justify-between font-semibold text-lg">
                <span>Total:</span>
                <span>${total + 50 + Math.round(total * 0.1)}</span>
              </div>
            </div>
            <Link to="/checkouts">
              <button
                onClick={handleCheckout}
                className="w-full bg-yellow-400 text-black py-3 rounded font-semibold hover:bg-yellow-500 transition-colors"
              >
                Procéder au paiement
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart