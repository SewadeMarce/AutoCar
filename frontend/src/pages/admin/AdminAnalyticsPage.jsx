// Analytics et statistiques admin
const  AdminAnalyticsPage = ({ orders, cars, users }) => {
  const [dateRange, setDateRange] = useState('month');

  // Calculs des statistiques
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const monthlyRevenue = orders
    .filter(order => new Date(order.date) >= new Date(Date.now() - 30 * 24 * 60 * 60 * 1000))
    .reduce((sum, order) => sum + order.total, 0);

  const carPopularity = cars.map(car => ({
    name: car.name,
    bookings: orders.filter(order => order.name === car.name).length,
    revenue: orders.filter(order => order.name === car.name).reduce((sum, order) => sum + order.total, 0)
  })).sort((a, b) => b.bookings - a.bookings);

  const statusDistribution = {
    active: orders.filter(o => o.status === 'active').length,
    completed: orders.filter(o => o.status === 'completed').length,
    pending: orders.filter(o => o.status === 'pending').length,
    cancelled: orders.filter(o => o.status === 'cancelled').length
  };

  return (
    <div className="bg-black text-white min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Analytics</h1>
          <select
            className="bg-gray-800 text-white px-4 py-2 rounded"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="week">Cette semaine</option>
            <option value="month">Ce mois</option>
            <option value="quarter">Ce trimestre</option>
            <option value="year">Cette année</option>
          </select>
        </div>

        {/* KPIs principaux */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-gray-400 text-sm mb-2">Revenus totaux</h3>
            <p className="text-3xl font-bold text-green-400">${totalRevenue.toLocaleString()}</p>
            <p className="text-sm text-gray-400 mt-1">+12% vs mois dernier</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-gray-400 text-sm mb-2">Commandes</h3>
            <p className="text-3xl font-bold text-blue-400">{orders.length}</p>
            <p className="text-sm text-gray-400 mt-1">+8% vs mois dernier</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-gray-400 text-sm mb-2">Taux conversion</h3>
            <p className="text-3xl font-bold text-yellow-400">24.5%</p>
            <p className="text-sm text-gray-400 mt-1">+2.1% vs mois dernier</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-gray-400 text-sm mb-2">Clients actifs</h3>
            <p className="text-3xl font-bold text-purple-400">{users.length}</p>
            <p className="text-sm text-gray-400 mt-1">+15% vs mois dernier</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Répartition des statuts */}
          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Répartition des commandes</h2>
            <div className="space-y-4">
              {Object.entries(statusDistribution).map(([status, count]) => (
                <div key={status} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full ${status === 'active' ? 'bg-green-500' :
                      status === 'completed' ? 'bg-blue-500' :
                        status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'
                      }`}></div>
                    <span className="capitalize">
                      {status === 'active' ? 'En cours' :
                        status === 'completed' ? 'Terminées' :
                          status === 'pending' ? 'En attente' : 'Annulées'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span>{count}</span>
                    <div className="w-32 bg-gray-800 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${status === 'active' ? 'bg-green-500' :
                          status === 'completed' ? 'bg-blue-500' :
                            status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                        style={{ width: `${(count / orders.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top voitures */}
          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Véhicules populaires</h2>
            <div className="space-y-4">
              {carPopularity.slice(0, 5).map((car, index) => (
                <div key={car.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <span>{car.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold">{car.bookings} réservations</div>
                    <div className="text-xs text-gray-400">${car.revenue}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Graphique des revenus mensuels (simulation) */}
        <div className="bg-gray-900 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Évolution des revenus</h2>
          <div className="grid grid-cols-12 gap-2 h-64">
            {[65, 78, 82, 88, 95, 102, 98, 105, 112, 108, 115, 122].map((height, index) => (
              <div key={index} className="flex flex-col justify-end">
                <div
                  className="bg-yellow-400 rounded-t"
                  style={{ height: `${height}%` }}
                ></div>
                <div className="text-xs text-gray-400 mt-2 text-center">
                  {['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'][index]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};