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
