import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Page Checkouts
const Checkouts = ({ cartItems, user }) => {
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState({
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'card'
  });

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const finalTotal = total + 50 + Math.round(total * 0.1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation de commande
    alert('Commande confirmée ! Vous recevrez un email de confirmation.');
    navigate('/checkout');
  };

  return (
    <div className="bg-black text-white min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Finaliser la commande</h1>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Informations de livraison</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Nom complet"
                className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                defaultValue={user?.name}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                defaultValue={user?.email}
                required
              />
              <input
                type="text"
                placeholder="Adresse"
                className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                value={orderData.address}
                onChange={(e) => setOrderData({ ...orderData, address: e.target.value })}
                required
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Ville"
                  className="bg-gray-800 text-white px-4 py-3 rounded"
                  value={orderData.city}
                  onChange={(e) => setOrderData({ ...orderData, city: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="Code postal"
                  className="bg-gray-800 text-white px-4 py-3 rounded"
                  value={orderData.zipCode}
                  onChange={(e) => setOrderData({ ...orderData, zipCode: e.target.value })}
                  required
                />
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">Mode de paiement</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={orderData.paymentMethod === 'card'}
                    onChange={(e) => setOrderData({ ...orderData, paymentMethod: e.target.value })}
                    className="mr-3"
                  />
                  Carte bancaire
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    checked={orderData.paymentMethod === 'paypal'}
                    onChange={(e) => setOrderData({ ...orderData, paymentMethod: e.target.value })}
                    className="mr-3"
                  />
                  PayPal
                </label>
              </div>

              {orderData.paymentMethod === 'card' && (
                <div className="space-y-4 mt-4">
                  <input
                    type="text"
                    placeholder="Numéro de carte"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                    required
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="bg-gray-800 text-white px-4 py-3 rounded"
                      required
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="bg-gray-800 text-white px-4 py-3 rounded"
                      required
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-4 rounded font-semibold hover:bg-yellow-500 transition-colors mt-8"
              >
                Confirmer la commande - ${finalTotal}
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Récapitulatif de commande</h2>
            <div className="bg-gray-900 rounded-lg p-6">
              {cartItems.map(item => (
                <div key={item._id} className="flex justify-between items-center py-4 border-b border-gray-700">
                  <div className="flex items-center">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                    <div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-gray-400">Qté: {item.quantity}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${item.price * item.quantity}</p>
                  </div>
                </div>
              ))}

              <div className="space-y-2 mt-6">
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
                  <span>${finalTotal}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkouts