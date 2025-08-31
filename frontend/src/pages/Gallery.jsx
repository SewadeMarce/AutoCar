
import React, {  useState, useEffect } from "react";
import { Search} from 'lucide-react';
import CarCard from "../components/CarCard";
const Gallery = ({ cars, onAddToCart, onAddToWishlist, wishlist }) => {
  const [filteredCars, setFilteredCars] = useState(cars);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    let filtered = cars;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(car => car.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(car =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredCars(filtered);
  }, [cars, selectedCategory, searchTerm, sortBy]);

  return (
    <div className="bg-black text-white min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Notre Flotte</h1>

        {/* Filtres et recherche */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher une voiture..."
                className="bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <select
              className="bg-gray-800 text-white px-4 py-2 rounded-lg"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">Toutes catégories</option>
              <option value="luxury">Luxe</option>
              <option value="sport">Sport</option>
              <option value="suv">SUV</option>
            </select>

            <select
              className="bg-gray-800 text-white px-4 py-2 rounded-lg"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="name">Trier par nom</option>
              <option value="price">Trier par prix</option>
              <option value="rating">Trier par note</option>
            </select>
          </div>
        </div>

        {/* Grille des voitures */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map(car => (
            <CarCard
              key={car._id}
              car={car}
              onAddToCart={onAddToCart}
              onAddToWishlist={onAddToWishlist}
              isInWishlist={wishlist.some(item => item._id === car._id)}
            />
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Aucune voiture trouvée avec ces critères.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;