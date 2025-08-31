// Dashboard Admin - Vue d'ensemble
const AdminDashboard = ({ cars, orders, users }) => {
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const activeRentals = orders.filter(order => order.status === 'active').length;
  const totalUsers = users.length;
  const totalCars = cars.length;

  const recentOrders = orders.slice(0, 5);
  const topCars = cars
    .map(car => ({
      ...car,
      bookings: orders.filter(order => order.name === car.name).length
    }))
    .sort((a, b) => b.bookings - a.bookings)
    .slice(0, 5);

  return (
    <div className="bg-black text-white min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Dashboard Admin</h1>

        {/* Statistiques principales */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Revenus totaux</p>
                <p className="text-2xl font-bold text-green-400">${totalRevenue.toLocaleString()}</p>
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
                <p className="text-2xl font-bold text-blue-400">{activeRentals}</p>
              </div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <span className="text-blue-500 text-xl">🚗</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Utilisateurs</p>
                <p className="text-2xl font-bold text-purple-400">{totalUsers}</p>
              </div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <span className="text-purple-500 text-xl">👥</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Véhicules</p>
                <p className="text-2xl font-bold text-yellow-400">{totalCars}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                <span className="text-yellow-500 text-xl">🏎️</span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions rapides */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Link to="/admin/cars" className="bg-yellow-400 text-black p-4 rounded-lg text-center hover:bg-yellow-500 transition-colors">
            <span className="text-2xl block mb-2">🚗</span>
            <span className="font-semibold">Gérer les voitures</span>
          </Link>
          <Link to="/admin/orders" className="bg-gray-800 text-white p-4 rounded-lg text-center hover:bg-gray-700 transition-colors">
            <span className="text-2xl block mb-2">📋</span>
            <span className="font-semibold">Commandes</span>
          </Link>
          <Link to="/admin/users" className="bg-gray-800 text-white p-4 rounded-lg text-center hover:bg-gray-700 transition-colors">
            <span className="text-2xl block mb-2">👥</span>
            <span className="font-semibold">Utilisateurs</span>
          </Link>
          <Link to="/admin/settings" className="bg-gray-800 text-white p-4 rounded-lg text-center hover:bg-gray-700 transition-colors">
            <span className="text-2xl block mb-2">⚙️</span>
            <span className="font-semibold">Paramètres</span>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Commandes récentes */}
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Commandes récentes</h2>
              <Link to="/admin/orders" className="text-yellow-400 hover:text-yellow-300">
                Voir tout →
              </Link>
            </div>
            <div className="space-y-4">
              {recentOrders.map(order => (
                <div key={order._id} className="flex items-center justify-between p-3 bg-gray-800 rounded">
                  <div className="flex items-center space-x-3">
                    <img src={order.image} alt={order.name} className="w-12 h-12 object-cover rounded" />
                    <div>
                      <h3 className="font-semibold text-sm">{order.name}</h3>
                      <p className="text-xs text-gray-400">#{order.id}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-sm">${order.total}</p>
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
          </div>

          {/* Voitures les plus demandées */}
          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Voitures populaires</h2>
            <div className="space-y-4">
              {topCars.map(car => (
                <div key={car._id} className="flex items-center justify-between p-3 bg-gray-800 rounded">
                  <div className="flex items-center space-x-3">
                    <img src={car.image} alt={car.name} className="w-12 h-12 object-cover rounded" />
                    <div>
                      <h3 className="font-semibold text-sm">{car.name}</h3>
                      <p className="text-xs text-gray-400">${car.price}/jour</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-sm">{car.bookings} réservations</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};