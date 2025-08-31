  // Données simulées pour l'admin
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+971 123 456 789',
      role: 'user',
      isActive: true,
      joinDate: '2024-01-15'
    },
    {
      id: 2,
      name: 'Admin User',
      email: 'admin@autocar.com',
      phone: '+971 987 654 321',
      role: 'admin',
      isActive: true,
      joinDate: '2023-12-01'
    },
    {
      id: 3,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+971 555 123 456',
      role: 'user',
      isActive: false,
      joinDate: '2024-02-01'
    }
  ]);

  const [settings, setSettings] = useState({
    companyName: 'AutoCar Luxury Rentals',
    contactEmail: 'info@autocar.com',
    phone: '+971 21 658 369',
    address: 'Dubai, UAE',
    insuranceFee: 50,
    taxRate: 10,
    loyaltyDiscount: 5,
    maintenanceMode: false,
    maintenanceMessage: 'Site temporairement indisponible pour maintenance...',
    notifications: {
      newBooking: true,
      cancellation: true,
      paymentReceived: true,
      reminderCheckout: false
    }
  });
  // Fonction pour vérifier si l'utilisateur est admin
  const isAdmin = () => {
    return user && user.role === 'admin';
  };

  // Composant de protection des routes admin
  const ProtectedAdminRoute = ({ children }) => {
    if (!isAdmin()) {
      return (
        <div className="bg-black text-white min-h-screen pt-16 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-red-400">Accès refusé</h2>
            <p className="text-gray-400 mb-8">Vous n'avez pas les permissions pour accéder à cette page.</p>
            <Link to="/" className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition-colors">
              Retour à l'accueil
            </Link>
          </div>
        </div>
      );
    }
    return children;
  };
// Page de connexion admin dédiée
const AdminLoginPage = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Vérification des identifiants admin (simulation)
    if (formData.email === 'admin@autocar.com' && formData.password === 'admin123') {
      onLogin({
        name: 'Administrateur',
        email: formData.email,
        role: 'admin',
        id: 999
      });
      navigate('/admin');
    } else {
      setError('Identifiants administrateur incorrects');
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-lg w-full max-w-md border border-red-500/30">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🔐</span>
          </div>
          <h2 className="text-2xl font-bold">Connexion Admin</h2>
          <p className="text-gray-400 text-sm mt-2">Accès réservé aux administrateurs</p>
        </div>

        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-2 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email administrateur"
            className="w-full bg-gray-800 text-white px-4 py-3 rounded border border-gray-700 focus:border-red-500 outline-none"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full bg-gray-800 text-white px-4 py-3 rounded border border-gray-700 focus:border-red-500 outline-none"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded font-semibold hover:bg-red-700 transition-colors"
          >
            Se connecter en tant qu'admin
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link to="/login" className="text-gray-400 hover:text-white text-sm">
            Connexion utilisateur normale
          </Link>
        </div>

        <div className="mt-4 p-3 bg-gray-800 rounded text-xs">
          <p className="text-gray-400">Identifiants de démonstration :</p>
          <p className="text-white">Email: admin@autocar.com</p>
          <p className="text-white">Mot de passe: admin123</p>
        </div>
      </div>
    </div>
  );
};

// Mise à jour de la page de connexion utilisateur pour inclure un lien admin
const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', phone: '' });
  const { user, register, login, loading, message } = useAuth();


  async function handleSubmit(e) {
    e.preventDefault();
    try {

      if (isLogin) {
        await login(formData);

      } else {
        await register(formData);

      }


    } catch (err) {

      console.error(err);

    }

  };

  return (
    <div className="bg-black text-white min-h-screen pt-16 flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? 'Connexion' : 'Inscription'}
        </h2>
        <h2 className={`text-2xl font-bold mb-6 text-center ${user ? "text-green-500" : "text-red-500"} `}>
          {message}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (<>
            <input
              type="text"
              placeholder="Nom complet"
              className="w-full bg-gray-800 text-white px-4 py-3 rounded"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />  <input
              type="tel"
              placeholder="Tel"
              className="w-full bg-gray-800 text-white px-4 py-3 rounded"
              value={formData.tel}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </>)}
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-gray-800 text-white px-4 py-3 rounded"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full bg-gray-800 text-white px-4 py-3 rounded"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
          <button

            disabled={!loading}
            type="submit"
            className={`w-full h2 ${!loading ? " bg-yellow-200 animate-pulse" : " bg-yellow-400"} text-black py-3 rounded font-semibold hover:bg-yellow-500 transition-colors`}
          >
            {!loading ? "...." : isLogin ? 'Se connecter' : 'S\'inscrire'}

          </button>
        </form>

        <p className="text-center mt-4">
          {isLogin ? "Pas de compte ? " : "Déjà un compte ? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-yellow-400 hover:text-yellow-300"
          >
            {isLogin ? "S'inscrire" : "Se connecter"}
          </button>
        </p>

        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <Link to="/admin/login" className="text-red-400 hover:text-red-300 text-sm">
            Accès administrateur
          </Link>
        </div>
      </div>
    </div>
  );
};

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

// Gestion des voitures par l'adminAdminLoginPage
const AdminCarsPage = ({ cars, setCars }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingCar, setEditingCar] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const [newCar, setNewCar] = useState({
    name: '',
    category: 'luxury',
    price: '',
    image: '',
    features: '',
    description: '',
    rating: 5
  });

  const filteredCars = cars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || car.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddCar = (e) => {
    e.preventDefault();
    const car = {
      _id: Date.now(),
      ...newCar,
      price: parseFloat(newCar.price),
      features: newCar.features.split(',').map(f => f.trim())
    };
    setCars(prev => [...prev, car]);
    setNewCar({ name: '', category: 'luxury', price: '', image: '', features: '', description: '', rating: 5 });
    setIsAddModalOpen(false);
  };

  const handleEditCar = (car) => {
    setEditingCar(car);
    setNewCar({
      ...car,
      features: car.features.join(', ')
    });
    setIsAddModalOpen(true);
  };

  const handleUpdateCar = (e) => {
    e.preventDefault();
    const updatedCar = {
      ...editingCar,
      ...newCar,
      price: parseFloat(newCar.price),
      features: newCar.features.split(',').map(f => f.trim())
    };
    setCars(prev => prev.map(car => car._id === editingCar._id ? updatedCar : car));
    setEditingCar(null);
    setNewCar({ name: '', category: 'luxury', price: '', image: '', features: '', description: '', rating: 5 });
    setIsAddModalOpen(false);
  };

  const handleDeleteCar = (id) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette voiture ?')) {
      setCars(prev => prev.filter(car => car._id !== id));
    }
  };

  return (
    <div className="bg-black text-white min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Gestion des voitures</h1>
          <button
            onClick={() => {
              setEditingCar(null);
              setNewCar({ name: '', category: 'luxury', price: '', image: '', features: '', description: '', rating: 5 });
              setIsAddModalOpen(true);
            }}
            className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition-colors"
          >
            + Ajouter une voiture
          </button>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher..."
              className="bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="bg-gray-800 text-white px-4 py-2 rounded-lg"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="all">Toutes catégories</option>
            <option value="luxury">Luxe</option>
            <option value="sport">Sport</option>
            <option value="suv">SUV</option>
          </select>
        </div>

        {/* Liste des voitures */}
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Voiture</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Catégorie</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Prix/jour</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Note</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {filteredCars.map(car => (
                  <tr key={car._id} className="hover:bg-gray-800">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img src={car.image} alt={car.name} className="w-16 h-16 object-cover rounded" />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-white">{car.name}</div>
                          <div className="text-sm text-gray-400">{car.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${car.category === 'luxury' ? 'bg-yellow-500/20 text-yellow-400' :
                        car.category === 'sport' ? 'bg-red-500/20 text-red-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                        {car.category === 'luxury' ? 'Luxe' : car.category === 'sport' ? 'Sport' : 'SUV'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                      ${car.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < car.rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => handleEditCar(car)}
                        className="text-yellow-400 hover:text-yellow-300 mr-3"
                      >
                        Modifier
                      </button>
                      <button
                        onClick={() => handleDeleteCar(car._id)}
                        className="text-red-400 hover:text-red-300"
                      >
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal d'ajout/modification */}
        {isAddModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md">
              <h2 className="text-2xl font-bold mb-6">
                {editingCar ? 'Modifier la voiture' : 'Ajouter une voiture'}
              </h2>

              <form onSubmit={editingCar ? handleUpdateCar : handleAddCar} className="space-y-4">
                <input
                  type="text"
                  placeholder="Nom de la voiture"
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                  value={newCar.name}
                  onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}
                  required
                />

                <select
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                  value={newCar.category}
                  onChange={(e) => setNewCar({ ...newCar, category: e.target.value })}
                >
                  <option value="luxury">Luxe</option>
                  <option value="sport">Sport</option>
                  <option value="suv">SUV</option>
                </select>

                <input
                  type="number"
                  placeholder="Prix par jour"
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                  value={newCar.price}
                  onChange={(e) => setNewCar({ ...newCar, price: e.target.value })}
                  required
                />

                <input
                  type="url"
                  placeholder="URL de l'image"
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                  value={newCar.image}
                  onChange={(e) => setNewCar({ ...newCar, image: e.target.value })}
                  required
                />

                <input
                  type="text"
                  placeholder="Caractéristiques (séparées par des virgules)"
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                  value={newCar.features}
                  onChange={(e) => setNewCar({ ...newCar, features: e.target.value })}
                />

                <textarea
                  placeholder="Description"
                  rows="3"
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded resize-none"
                  value={newCar.description}
                  onChange={(e) => setNewCar({ ...newCar, description: e.target.value })}
                ></textarea>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="flex-1 bg-gray-700 text-white py-3 rounded hover:bg-gray-600 transition-colors"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-yellow-400 text-black py-3 rounded font-semibold hover:bg-yellow-500 transition-colors"
                  >
                    {editingCar ? 'Modifier' : 'Ajouter'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Gestion des commandes par l'admin
const AdminOrdersPage = ({ orders, setOrders }) => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOrders = orders
    .filter(order => {
      const matchesSearch = order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = filterStatus === 'all' || order.status === filterStatus;
      return matchesSearch && matchesStatus;
    });

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(prev =>
      prev.map(order =>
        order._id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400';
      case 'completed': return 'bg-blue-500/20 text-blue-400';
      case 'cancelled': return 'bg-red-500/20 text-red-400';
      default: return 'bg-yellow-500/20 text-yellow-400';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active': return 'En cours';
      case 'completed': return 'Terminée';
      case 'cancelled': return 'Annulée';
      default: return 'En attente';
    }
  };

  return (
    <div className="bg-black text-white min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Gestion des commandes</h1>

        {/* Filtres */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher par ID ou voiture..."
              className="bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="bg-gray-800 text-white px-4 py-2 rounded-lg"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">Tous les statuts</option>
            <option value="pending">En attente</option>
            <option value="active">En cours</option>
            <option value="completed">Terminées</option>
            <option value="cancelled">Annulées</option>
          </select>
        </div>

        {/* Liste des commandes */}
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Commande</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Véhicule</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Période</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Montant</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Statut</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {filteredUsers.map(user => (
                  <tr key={user.id} className="hover:bg-gray-800">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                          <span className="text-black font-semibold">{user.name.charAt(0)}</span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-white">{user.name}</div>
                          <div className="text-sm text-gray-400">Membre depuis {user.joinDate}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-white">{user.email}</div>
                      <div className="text-sm text-gray-400">{user.phone || 'Non renseigné'}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        className={`px-2 py-1 text-xs rounded-full ${user.role === 'admin' ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-400'
                          } bg-transparent border-0`}
                        value={user.role}
                        onChange={(e) => handleRoleChange(user.id, e.target.value)}
                      >
                        <option value="user">Utilisateur</option>
                        <option value="admin">Administrateur</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleStatusChange(user.id, !user.isActive)}
                        className={`px-2 py-1 text-xs rounded-full ${user.isActive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                          }`}
                      >
                        {user.isActive ? 'Actif' : 'Suspendu'}
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-yellow-400 hover:text-yellow-300 mr-3">
                        Profil
                      </button>
                      <button className="text-blue-400 hover:text-blue-300">
                        Contacter
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

// Paramètres admin
const AdminSettingsPage = ({ settings, setSettings }) => {
  const [activeTab, setActiveTab] = useState('general');
  const [formData, setFormData] = useState(settings);

  const handleSave = () => {
    setSettings(formData);
    alert('Paramètres sauvegardés avec succès !');
  };

  const tabs = [
    { id: 'general', label: 'Général', icon: '⚙️' },
    { id: 'pricing', label: 'Tarification', icon: '💰' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
    { id: 'maintenance', label: 'Maintenance', icon: '🔧' }
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Paramètres</h1>

        {/* Navigation des onglets */}
        <div className="flex space-x-1 mb-8 bg-gray-900 p-1 rounded-lg">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-md transition-colors ${activeTab === tab.id
                ? 'bg-yellow-400 text-black'
                : 'text-gray-400 hover:text-white'
                }`}
            >
              <span>{tab.icon}</span>
              <span className="hidden md:block">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="bg-gray-900 rounded-lg p-6">
          {activeTab === 'general' && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Paramètres généraux</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom de l'entreprise</label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email de contact</label>
                  <input
                    type="email"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                    value={formData.contactEmail}
                    onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Téléphone</label>
                  <input
                    type="tel"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Adresse</label>
                  <textarea
                    rows="3"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded resize-none"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  ></textarea>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'pricing' && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Tarification</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Frais d'assurance (USD)</label>
                  <input
                    type="number"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                    value={formData.insuranceFee}
                    onChange={(e) => setFormData({ ...formData, insuranceFee: parseFloat(e.target.value) })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Taux de taxe (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                    value={formData.taxRate}
                    onChange={(e) => setFormData({ ...formData, taxRate: parseFloat(e.target.value) })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Remise fidélité (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                    value={formData.loyaltyDiscount}
                    onChange={(e) => setFormData({ ...formData, loyaltyDiscount: parseFloat(e.target.value) })}
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Notifications</h2>
              <div className="space-y-4">
                {[
                  { key: 'newBooking', label: 'Nouvelle réservation' },
                  { key: 'cancellation', label: 'Annulation de réservation' },
                  { key: 'paymentReceived', label: 'Paiement reçu' },
                  { key: 'reminderCheckout', label: 'Rappel de restitution' }
                ].map(notification => (
                  <label key={notification.key} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.notifications[notification.key]}
                      onChange={(e) => setFormData({
                        ...formData,
                        notifications: {
                          ...formData.notifications,
                          [notification.key]: e.target.checked
                        }
                      })}
                      className="w-4 h-4 text-yellow-400 bg-gray-800 border-gray-600 rounded"
                    />
                    <span>{notification.label}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'maintenance' && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Maintenance du site</h2>
              <div className="space-y-6">
                <div>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.maintenanceMode}
                      onChange={(e) => setFormData({ ...formData, maintenanceMode: e.target.checked })}
                      className="w-4 h-4 text-yellow-400 bg-gray-800 border-gray-600 rounded"
                    />
                    <span>Mode maintenance activé</span>
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message de maintenance</label>
                  <textarea
                    rows="4"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded resize-none"
                    value={formData.maintenanceMessage}
                    onChange={(e) => setFormData({ ...formData, maintenanceMessage: e.target.value })}
                    placeholder="Site temporairement indisponible pour maintenance..."
                  ></textarea>
                </div>
                <div className="bg-yellow-500/20 border border-yellow-500/50 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-400 mb-2">Actions de maintenance</h3>
                  <div className="space-y-2">
                    <button className="w-full bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors text-left">
                      Vider le cache
                    </button>
                    <button className="w-full bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors text-left">
                      Sauvegarder la base de données
                    </button>
                    <button className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors text-left">
                      Réinitialiser les sessions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={handleSave}
            className="mt-8 bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition-colors"
          >
            Sauvegarder les paramètres
          </button>
        </div>
      </div>
    </div>
  );
};

// Analytics et statistiques admin
const AdminAnalyticsPage = ({ orders, cars, users }) => {
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

// Header Admin avec navigation
const AdminHeader = ({ user, setUser }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <header className="bg-red-900/90 backdrop-blur-sm text-white fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/admin" className="flex items-center space-x-2">
            <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
              <span className="text-sm font-bold">AC</span>
            </div>
            <span className="font-bold text-xl">ADMIN</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link to="/admin" className="hover:text-yellow-400 transition-colors">Dashboard</Link>
            <Link to="/admin/cars" className="hover:text-yellow-400 transition-colors">Voitures</Link>
            <Link to="/admin/orders" className="hover:text-yellow-400 transition-colors">Commandes</Link>
            <Link to="/admin/users" className="hover:text-yellow-400 transition-colors">Utilisateurs</Link>
            <Link to="/admin/analytics" className="hover:text-yellow-400 transition-colors">Analytics</Link>
            <Link to="/admin/settings" className="hover:text-yellow-400 transition-colors">Paramètres</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/" className="text-sm hover:text-yellow-400 transition-colors">
              Voir le site
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center space-x-2 hover:text-yellow-400"
              >
                <User className="w-6 h-6" />
                <span className="hidden md:block">{user?.name}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-lg py-2">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-800 transition-colors text-red-400"
                  >
                    Se déconnecter
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};



// Gestion des utilisateurs par l'admin
const AdminUsersPage = ({ users, setUsers }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const handleRoleChange = (userId, newRole) => {
    setUsers(prev =>
      prev.map(user =>
        user.id === userId ? { ...user, role: newRole } : user
      )
    );
  };

  const handleStatusChange = (userId, isActive) => {
    setUsers(prev =>
      prev.map(user =>
        user.id === userId ? { ...user, isActive } : user
      )
    );
  };

  return (
    <div className="bg-black text-white min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Gestion des utilisateurs</h1>

        {/* Filtres */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher par nom ou email..."
              className="bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="bg-gray-800 text-white px-4 py-2 rounded-lg"
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
          >
            <option value="all">Tous les rôles</option>
            <option value="user">Utilisateur</option>
            <option value="admin">Administrateur</option>
          </select>
        </div>

        {/* Liste des utilisateurs */}
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Utilisateur</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Contact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Rôle</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Statut</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {filteredOrders.map(order => (
                  <tr key={order.id} className="hover:bg-gray-800">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-white">#{order.id}</div>
                        <div className="text-sm text-gray-400">{order.date}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img src={order.image} alt={order.name} className="w-12 h-12 object-cover rounded" />
                        <div className="ml-3">
                          <div className="text-sm font-medium text-white">{order.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      <div>{order.startDate}</div>
                      <div>à {order.endDate}</div>
                      <div className="text-xs text-gray-400">({order.duration} jours)</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      ${order.total}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        className={`px-2 py-1 text-xs rounded-full ${getStatusColor(order.status)} bg-transparent border-0`}
                        value={order.status}
                        onChange={(e) => handleStatusChange(order.id, e.target.value)}
                      >
                        <option value="pending">En attente</option>
                        <option value="active">En cours</option>
                        <option value="completed">Terminée</option>
                        <option value="cancelled">Annulée</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-yellow-400 hover:text-yellow-300 mr-3">
                        Détails
                      </button>
                      <button className="text-blue-400 hover:text-blue-300">
                        Contact client
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

<>

   Route de connexion admin
      {/* Header conditionnel - Admin ou Client */}
      {window.location.pathname.startsWith('/admin') && isAdmin() ? (
        <AdminHeader user={user} setUser={setUser} />
      ) : (
        <Header cartItems={cartItems} user={user} setUser={setUser} />
      )}

        <Route path="/admin/login" element={<AdminLoginPage onLogin={handleLogin} />} />

        {/* Routes admin protégées */}
        <Route path="/admin" element={
          <ProtectedAdminRoute>
            <AdminDashboard cars={cars} orders={orders} users={users} />
          </ProtectedAdminRoute>
        } />
        <Route path="/admin/cars" element={
          <ProtectedAdminRoute>
            <AdminCarsPage cars={cars} setCars={setCars} />
          </ProtectedAdminRoute>
        } />
        <Route path="/admin/orders" element={
          <ProtectedAdminRoute>
            <AdminOrdersPage orders={orders} setOrders={setOrders} />
          </ProtectedAdminRoute>
        } />
        <Route path="/admin/users" element={
          <ProtectedAdminRoute>
            <AdminUsersPage users={users} setUsers={setUsers} />
          </ProtectedAdminRoute>
        } />
        <Route path="/admin/analytics" element={
          <ProtectedAdminRoute>
            <AdminAnalyticsPage orders={orders} cars={cars} users={users} />
          </ProtectedAdminRoute>
        } />
        <Route path="/admin/settings" element={
          <ProtectedAdminRoute>
            <AdminSettingsPage settings={settings} setSettings={setSettings} />
          </ProtectedAdminRoute>
        } /></>