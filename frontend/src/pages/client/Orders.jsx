import { useState } from "react";
import { useOrders } from "../../hooks/useOrders";

// Page des commandes
const Orders = () => {

  const {orders} = useOrders();

  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const filteredOrders = orders
    .filter(order => filterStatus === 'all' || order.status === filterStatus)
    .sort((a, b) => {
      if (sortBy === 'date') return new Date(b.date) - new Date(a.date);
      if (sortBy === 'amount') return b.total - a.total;
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="bg-black text-white min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Mes commandes</h1>

        {/* Filtres */}
        <div className="flex flex-wrap gap-4 mb-8">
          <select
            className="bg-gray-800 text-white px-4 py-2 rounded"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">Tous les statuts</option>
            <option value="pending">En attente</option>
            <option value="active">En cours</option>
            <option value="completed">Terminées</option>
            <option value="cancelled">Annulées</option>
          </select>

          <select
            className="bg-gray-800 text-white px-4 py-2 rounded"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="date">Trier par date</option>
            <option value="amount">Trier par montant</option>
            <option value="name">Trier par nom</option>
          </select>
        </div>

        {/* Liste des commandes */}
        <div className="space-y-4">
          {filteredOrders.map(order => (
            <div key={order._id} className="bg-gray-900 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Commande #{order.id}</h3>
                  <p className="text-gray-400">{order.date}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${order.status === 'active' ? 'bg-green-500/20 text-green-400' :
                  order.status === 'completed' ? 'bg-blue-500/20 text-blue-400' :
                    order.status === 'cancelled' ? 'bg-red-500/20 text-red-400' :
                      'bg-yellow-500/20 text-yellow-400'
                  }`}>
                  {order.status === 'active' ? 'En cours' :
                    order.status === 'completed' ? 'Terminée' :
                      order.status === 'cancelled' ? 'Annulée' : 'En attente'}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4">
                  <img src={order.image} alt={order.name} className="w-20 h-20 object-cover rounded" />
                  <div>
                    <h4 className="font-semibold text-lg">{order.name}</h4>
                    <p className="text-gray-400">Du {order.startDate} au {order.endDate}</p>
                    <p className="text-gray-400">{order.duration} jours</p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-bold text-yellow-400">${order.total}</p>
                  <div className="mt-4 space-x-2">
                    <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors">
                      Détails
                    </button>
                    {order.status === 'active' && (
                      <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
                        Annuler
                      </button>
                    )}
                    {order.status === 'completed' && (
                      <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition-colors">
                        Réserver à nouveau
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Aucune commande trouvée.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders