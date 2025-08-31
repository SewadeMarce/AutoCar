import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useOrders } from "../../hooks/useOrders";
import { User } from "lucide-react";

// Espace Client - Dashboard
const CustomerDashboard = ( {user}) => {
  
const {orders} = useOrders();
  const recentOrders = orders.slice(0, 3);
  const totalSpent = orders.reduce((sum, order) => sum + order.total, 0);
  const activeRentals = orders.filter(order => order.status === 'active').length;

  return (
    <div className="bg-black text-white min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Tableau de bord</h1>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-400">{user.membershipLevel || 'Membre Standard'}</p>
            </div>
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-black" />
            </div>
          </div>
        </div>

        {/* Statistiques rapides */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total dépensé</p>
                <p className="text-2xl font-bold">${totalSpent.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <span className="text-green-500 text-xl">💰</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Locations actives</p>
                <p className="text-2xl font-bold">{activeRentals}</p>
              </div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <span className="text-blue-500 text-xl">🚗</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total commandes</p>
                <p className="text-2xl font-bold">{orders.length}</p>
              </div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <span className="text-purple-500 text-xl">📋</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Points fidélité</p>
                <p className="text-2xl font-bold">{user.loyaltyPoints || 1250}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                <span className="text-yellow-500 text-xl">⭐</span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions rapides */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Link to="/gallery" className="bg-yellow-400 text-black p-4 rounded-lg text-center hover:bg-yellow-500 transition-colors">
            <span className="text-2xl block mb-2">🚗</span>
            <span className="font-semibold">Nouvelle location</span>
          </Link>
          <Link to="/account/orders" className="bg-gray-800 text-white p-4 rounded-lg text-center hover:bg-gray-700 transition-colors">
            <span className="text-2xl block mb-2">📋</span>
            <span className="font-semibold">Mes commandes</span>
          </Link>
          <Link to="/account/profile" className="bg-gray-800 text-white p-4 rounded-lg text-center hover:bg-gray-700 transition-colors">
            <span className="text-2xl block mb-2">👤</span>
            <span className="font-semibold">Mon profil</span>
          </Link>
          <Link to="/account/support" className="bg-gray-800 text-white p-4 rounded-lg text-center hover:bg-gray-700 transition-colors">
            <span className="text-2xl block mb-2">💬</span>
            <span className="font-semibold">Support</span>
          </Link>
        </div>

        {/* Commandes récentes */}
        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Commandes récentes</h2>
            <Link to="/account/orders" className="text-yellow-400 hover:text-yellow-300">
              Voir tout →
            </Link>
          </div>

          {recentOrders.length > 0 ? (
            <div className="space-y-4">
              {recentOrders.map(order => (
                <div key={order._id} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <img src={order.image} alt={order.name} className="w-16 h-16 object-cover rounded" />
                    <div>
                      <h3 className="font-semibold">{order.name}</h3>
                      <p className="text-sm text-gray-400">{order.startDate} - {order.endDate}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${order.total}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${order.status === 'active' ? 'bg-green-500/20 text-green-400' :
                      order.status === 'completed' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                      {order.status === 'active' ? 'En cours' :
                        order.status === 'completed' ? 'Terminé' : 'En attente'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-center py-8">Aucune commande récente</p>
          )}
        </div>

        {/* Notifications */}
        <div className="bg-gray-900 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Notifications</h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-blue-500/10 rounded-lg border-l-4 border-blue-500">
              <span className="text-blue-500">ℹ️</span>
              <div>
                <p className="font-semibold">Nouvelle offre disponible</p>
                <p className="text-sm text-gray-400">20% de réduction sur les SUV ce weekend</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-lg border-l-4 border-green-500">
              <span className="text-green-500">✅</span>
              <div>
                <p className="font-semibold">Location confirmée</p>
                <p className="text-sm text-gray-400">Votre Mercedes Class S est prête pour demain</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard