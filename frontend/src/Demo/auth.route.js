 
   // const addToCart = (car) => {
  //   setCartItems(prev => {
  //     const existing = prev.find(item => item._id === car._id);
  //     if (existing) {
  //       return prev.map(item =>
  //         item._id === car._id
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       );
  //     }
  //     return [...prev, { ...car, quantity: 1 }];
  //   });
  // };

  // const updateQuantity = (id, quantity) => {
  //   setCartItems(prev =>
  //     prev.map(item =>
  //       item._id === id ? { ...item, quantity } : item
  //     )
  //   );
  // };

  // const removeFromCart = (id) => {
  //   setCartItems(prev => prev.filter(item => item._id !== id));
  // };

 // // Composant Header mis à jour avec menu espace client
 // const Header = ({ cartItems, user, setUser }) => {
 //   const [isMenuOpen, setIsMenuOpen] = useState(false);
 //   const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
 
 //   return (
 //     <header className="bg-black/90 backdrop-blur-sm text-white fixed w-full z-50">
 //       <div className="container mx-auto px-4">
 //         <div className="flex items-center justify-between h-16">
 //           <Link to="/" className="flex items-center space-x-2">
 //             <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
 //               <span className="text-sm font-bold">AC</span>
 //             </div>
 //             <span className="font-bold text-xl">AUTOCAR</span>
 //           </Link>
 
 //           <nav className="hidden md:flex space-x-8">
 //             <Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link>
 //             <Link to="/gallery" className="hover:text-yellow-400 transition-colors">Gallery</Link>
 //             <Link to="/about" className="hover:text-yellow-400 transition-colors">About</Link>
 //             <Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact Us</Link>
 //           </nav>
 
 //           <div className="flex items-center space-x-4">
 //             <span className="hidden md:block text-sm">+963 997 643 565</span>
 
 //             {/* Lien vers la wishlist */}
 //             <Link to="/wishlist" className="hover:text-yellow-400">
 //               <Heart className="w-6 h-6" />
 //             </Link>
 
 //             {/* Panier */}
 //             <Link to="/cart" className="relative">
 //               <ShoppingCart className="w-6 h-6" />
 //               {cartItems.length > 0 && (
 //                 <span className="absolute -top-2 -right-2 bg-yellow-400 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
 //                   {cartItems.length}
 //                 </span>
 //               )}
 //             </Link>
 
 //             {/* Menu utilisateur */}
 //             {user ? (
 //               <div className="relative">
 //                 <button
 //                   onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
 //                   className="flex items-center space-x-2 hover:text-yellow-400"
 //                 >
 //                   <User className="w-6 h-6" />
 //                   <span className="hidden md:block">{user.name}</span>
 //                   <ChevronDown className="w-4 h-4" />
 //                 </button>
 
 //                 {isAccountMenuOpen && (
 //                   <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-lg py-2">
 //                     <Link
 //                       to="/account"
 //                       className="block px-4 py-2 hover:bg-gray-800 transition-colors"
 //                       onClick={() => setIsAccountMenuOpen(false)}
 //                     >
 //                       🏠 Tableau de bord
 //                     </Link>
 //                     <Link
 //                       to="/account/profile"
 //                       className="block px-4 py-2 hover:bg-gray-800 transition-colors"
 //                       onClick={() => setIsAccountMenuOpen(false)}
 //                     >
 //                       👤 Mon profil
 //                     </Link>
 //                     <Link
 //                       to="/account/orders"
 //                       className="block px-4 py-2 hover:bg-gray-800 transition-colors"
 //                       onClick={() => setIsAccountMenuOpen(false)}
 //                     >
 //                       📋 Mes commandes
 //                     </Link>
 //                     <Link
 //                       to="/account/support"
 //                       className="block px-4 py-2 hover:bg-gray-800 transition-colors"
 //                       onClick={() => setIsAccountMenuOpen(false)}
 //                     >
 //                       💬 Support
 //                     </Link>
 //                     <div className="border-t border-gray-700 mt-2 pt-2">
 //                       <button
 //                         onClick={() => {
 //                           setUser(null);
 //                           localStorage.removeItem('token'); // Supprime le jeton
 
 //                           setIsAccountMenuOpen(false);
 //                         }}
 //                         className="block w-full text-left px-4 py-2 hover:bg-gray-800 transition-colors text-red-400"
 //                       >
 //                         🚪 Se déconnecter
 //                       </button>
 //                     </div>
 //                   </div>
 //                 )}
 //               </div>
 //             ) : (
 //               <Link to="/login" className="hover:text-yellow-400">
 //                 <User className="w-6 h-6" />
 //               </Link>
 //             )}
 
 //             <button
 //               className="md:hidden"
 //               onClick={() => setIsMenuOpen(!isMenuOpen)}
 //             >
 //               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
 //             </button>
 //           </div>
 //         </div>
 
 //         {/* Menu mobile */}
 //         {isMenuOpen && (
 //           <div className="md:hidden bg-black/95 py-4">
 //             <nav className="flex flex-col space-y-2">
 //               <Link to="/" className="hover:text-yellow-400 py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
 //               <Link to="/gallery" className="hover:text-yellow-400 py-2" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
 //               <Link to="/about" className="hover:text-yellow-400 py-2" onClick={() => setIsMenuOpen(false)}>About</Link>
 //               <Link to="/contact" className="hover:text-yellow-400 py-2" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
 //               {user && (
 //                 <>
 //                   <div className="border-t border-gray-700 pt-2 mt-2">
 //                     <Link to="/account" className="hover:text-yellow-400 py-2 block" onClick={() => setIsMenuOpen(false)}>Mon compte</Link>
 //                     <Link to="/account/orders" className="hover:text-yellow-400 py-2 block" onClick={() => setIsMenuOpen(false)}>Mes commandes</Link>
 //                   </div>
 //                 </>
 //               )}
 //             </nav>
 //           </div>
 //         )}
 //       </div>
 //     </header>
 //   );
 // };
 // Composant Hero
 // const Hero = () => {
 //   return (
 //     <section className="relative h-screen bg-gradient-to-r from-black via-gray-900 to-black flex items-center">
 //       <div className="absolute inset-0 opacity-30">
 //         <img
 //           src="https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200"
 //           alt="Luxury Car"
 //           className="w-full h-full object-cover"
 //         />
 //       </div>
 //       <div className="container mx-auto px-4 relative z-10">
 //         <div className="max-w-2xl">
 //           <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
 //             LUXURY<br />
 //             LIFESTYLE<br />
 //             RENTALS
 //           </h1>
 //           <p className="text-xl text-gray-300 mb-8">
 //             Enjoy the most luxurious experience
 //           </p>
 //           <Link
 //             to="/gallery"
 //             className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 font-semibold"
 //           >
 //             DISCOVER
 //           </Link>
 //         </div>
 //       </div>
 //     </section>
 //   );
 // };
 
 // Composant Panier
 // const CarCard = ({ car, onAddToCart, onAddToWishlist, isInWishlist }) => {
 //   return (
 //     <div className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
 //       <div className="relative">
 //         <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
 //         <button
 //           onClick={() => onAddToWishlist(car)}
 //           className={`absolute top-4 right-4 p-2 rounded-full ${isInWishlist ? 'bg-red-500' : 'bg-black/50'} hover:bg-red-500 transition-colors`}
 //         >
 //           <Heart className={`w-4 h-4 ${isInWishlist ? 'fill-white' : ''} text-white`} />
 //         </button>
 //       </div>
 //       <div className="p-6">
 //         <h3 className="text-xl font-semibold text-white mb-2">{car.name}</h3>
 //         <div className="flex items-center mb-2">
 //           {[...Array(5)].map((_, i) => (
 //             <Star key={i} className={`w-4 h-4 ${i < car.rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
 //           ))}
 //         </div>
 //         <div className="flex items-center justify-between mb-4">
 //           <span className="text-2xl font-bold text-white">${car.price}.00</span>
 //           <span className="text-gray-400">/jour</span>
 //         </div>
 //         <div className="flex gap-2 mb-4">
 //           {car.features.slice(0, 2).map((feature, index) => (
 //             <span key={index} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">
 //               {feature}
 //             </span>
 //           ))}
 //         </div>
 //         <div className="flex gap-2">
 //           <Link
 //             to={`/car/${car._id}`}
 //             className="flex-1 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors text-center"
 //           >
 //             Détails
 //           </Link>
 //           <button
 //             onClick={() => onAddToCart(car)}
 //             className="flex-1 bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-500 transition-colors font-semibold"
 //           >
 //             Réserver
 //           </button>
 //         </div>
 //       </div>
 //     </div>
 //   );
 // };
 
 // Page d'accueil
 // const HomePage = ({ cars, onAddToCart, onAddToWishlist, wishlist }) => {
 //   const featuredCars = cars.slice(0, 3);
 
 //   return (
 //     <div className="bg-black text-white">
 //       <Hero />
 
 //       {/* Today's Specials */}
 //       <section className="py-16 bg-gray-900">
 //         <div className="container mx-auto px-4">
 //           <div className="text-center mb-12">
 //             <h2 className="text-4xl font-bold mb-4">TODAY'S SPECIALS</h2>
 //             <div className="flex justify-center space-x-8 mb-8">
 //               <Link to="/gallery" className="flex items-center space-x-2 text-gray-300 hover:text-white">
 //                 <span>🚗</span>
 //                 <span>View All Cars</span>
 //               </Link>
 //               <Link to="/gallery?category=suv" className="flex items-center space-x-2 text-gray-300 hover:text-white">
 //                 <span>🚙</span>
 //                 <span>SUV</span>
 //               </Link>
 //               <Link to="/gallery?category=luxury" className="flex items-center space-x-2 text-gray-300 hover:text-white">
 //                 <span>✨</span>
 //                 <span>Luxury</span>
 //               </Link>
 //             </div>
 //           </div>
 
 //           <div className="grid md:grid-cols-3 gap-8">
 //             {featuredCars.map(car => (
 //               <CarCard
 //                 key={car._id}
 //                 car={car}
 //                 onAddToCart={onAddToCart}
 //                 onAddToWishlist={onAddToWishlist}
 //                 isInWishlist={wishlist.some(item => item._id === car._id)}
 //               />
 //             ))}
 //           </div>
 //         </div>
 //       </section>
 
 //       {/* Brand Section */}
 //       <section className="py-16 bg-black">
 //         <div className="container mx-auto px-4">
 //           <div className="grid md:grid-cols-2 gap-12 items-center">
 //             <div>
 //               <img
 //                 src="https://images.unsplash.com/photo-1563720223185-11003d516935?w=600"
 //                 alt="Luxury Car"
 //                 className="rounded-lg"
 //               />
 //             </div>
 //             <div>
 //               <h2 className="text-4xl font-bold mb-6">
 //                 BOYSTOY<br />
 //                 MIAMI
 //               </h2>
 //               <div className="border-t border-yellow-400 w-16 mb-6"></div>
 //               <p className="text-yellow-400 mb-6">Follow us</p>
 //               <div className="flex space-x-4">
 //                 <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
 //                 <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
 //                 <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
 //               </div>
 //             </div>
 //           </div>
 //         </div>
 //       </section>
 
 //       {/* Services */}
 //       <section className="py-16 bg-gray-900">
 //         <div className="container mx-auto px-4">
 //           <h2 className="text-4xl font-bold mb-12">LUXURY CAR RENTAL MIAMI</h2>
 //           <div className="grid md:grid-cols-2 gap-12 items-center">
 //             <div>
 //               <p className="text-gray-300 mb-8">
 //                 A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradise.
 //               </p>
 //               <div className="grid grid-cols-3 gap-8">
 //                 <div className="text-center">
 //                   <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4 mx-auto">
 //                     <span className="text-2xl">🏎️</span>
 //                   </div>
 //                   <h3 className="font-semibold">Motors</h3>
 //                 </div>
 //                 <div className="text-center">
 //                   <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4 mx-auto">
 //                     <span className="text-2xl">📍</span>
 //                   </div>
 //                   <h3 className="font-semibold">Pick up</h3>
 //                 </div>
 //                 <div className="text-center">
 //                   <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4 mx-auto">
 //                     <span className="text-2xl">✨</span>
 //                   </div>
 //                   <h3 className="font-semibold">Luxury</h3>
 //                 </div>
 //               </div>
 //             </div>
 //             <div>
 //               <img
 //                 src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600"
 //                 alt="Sports Car"
 //                 className="rounded-lg"
 //               />
 //             </div>
 //           </div>
 //         </div>
 //       </section>
 //     </div>
 //   );
 // };
 
 // Page Gallery
 // const GalleryPage = ({ cars, onAddToCart, onAddToWishlist, wishlist }) => {
 //   const [filteredCars, setFilteredCars] = useState(cars);
 //   const [selectedCategory, setSelectedCategory] = useState('all');
 //   const [searchTerm, setSearchTerm] = useState('');
 //   const [sortBy, setSortBy] = useState('name');
 
 //   useEffect(() => {
 //     let filtered = cars;
 
 //     if (selectedCategory !== 'all') {
 //       filtered = filtered.filter(car => car.category === selectedCategory);
 //     }
 
 //     if (searchTerm) {
 //       filtered = filtered.filter(car =>
 //         car.name.toLowerCase().includes(searchTerm.toLowerCase())
 //       );
 //     }
 
 //     filtered.sort((a, b) => {
 //       switch (sortBy) {
 //         case 'price':
 //           return a.price - b.price;
 //         case 'rating':
 //           return b.rating - a.rating;
 //         default:
 //           return a.name.localeCompare(b.name);
 //       }
 //     });
 
 //     setFilteredCars(filtered);
 //   }, [cars, selectedCategory, searchTerm, sortBy]);
 
 //   return (
 //     <div className="bg-black text-white min-h-screen pt-16">
 //       <div className="container mx-auto px-4 py-8">
 //         <h1 className="text-4xl font-bold mb-8">Notre Flotte</h1>
 
 //         {/* Filtres et recherche */}
 //         <div className="mb-8 space-y-4">
 //           <div className="flex flex-wrap gap-4 items-center">
 //             <div className="relative">
 //               <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
 //               <input
 //                 type="text"
 //                 placeholder="Rechercher une voiture..."
 //                 className="bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg w-64"
 //                 value={searchTerm}
 //                 onChange={(e) => setSearchTerm(e.target.value)}
 //               />
 //             </div>
 
 //             <select
 //               className="bg-gray-800 text-white px-4 py-2 rounded-lg"
 //               value={selectedCategory}
 //               onChange={(e) => setSelectedCategory(e.target.value)}
 //             >
 //               <option value="all">Toutes catégories</option>
 //               <option value="luxury">Luxe</option>
 //               <option value="sport">Sport</option>
 //               <option value="suv">SUV</option>
 //             </select>
 
 //             <select
 //               className="bg-gray-800 text-white px-4 py-2 rounded-lg"
 //               value={sortBy}
 //               onChange={(e) => setSortBy(e.target.value)}
 //             >
 //               <option value="name">Trier par nom</option>
 //               <option value="price">Trier par prix</option>
 //               <option value="rating">Trier par note</option>
 //             </select>
 //           </div>
 //         </div>
 
 //         {/* Grille des voitures */}
 //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
 //           {filteredCars.map(car => (
 //             <CarCard
 //               key={car._id}
 //               car={car}
 //               onAddToCart={onAddToCart}
 //               onAddToWishlist={onAddToWishlist}
 //               isInWishlist={wishlist.some(item => item._id === car._id)}
 //             />
 //           ))}
 //         </div>
 
 //         {filteredCars.length === 0 && (
 //           <div className="text-center py-12">
 //             <p className="text-gray-400 text-lg">Aucune voiture trouvée avec ces critères.</p>
 //           </div>
 //         )}
 //       </div>
 //     </div>
 //   );
 // };
 
 // Page Détail Voiture
 // const CarDetailPage = ({  onAddToCart, onAddToWishlist, wishlist }) => {
 //   const { id } = useParams();
 //   const navigate = useNavigate();
 //   const { cars: car, error, loading } = useCars(id); 
 
 //   const [selectedDates, setSelectedDates] = useState({ start: '', end: '' });
 //   const [quantity, setQuantity] = useState(1);
 
 //   if (!car) {
 //     return (
 //       <div className="bg-black text-white min-h-screen pt-16 flex items-center justify-center">
 //         <div className="text-center">
 //           <h2 className="text-2xl font-bold mb-4">Voiture non trouvée</h2>
 //           <Link to="/gallery" className="bg-yellow-400 text-black px-6 py-2 rounded">
 //             Retour à la galerie
 //           </Link>
 //         </div>
 //       </div>
 //     );
 //   }
 
 //   const handleReservation = () => {
 //     if (!selectedDates.start || !selectedDates.end) {
 //       alert('Veuillez sélectionner les dates de location');
 //       return;
 //     }
 
 //     const reservationData = {
 //       ...car,
 //       startDate: selectedDates.start,
 //       endDate: selectedDates.end,
 //       quantity
 //     };
 
 //     onAddToCart(reservationData);
 //     navigate('/cart');
 //   };
 
 //   return (
 //     <div className="bg-black text-white min-h-screen pt-16">
 //       <div className="container mx-auto px-4 py-8">
 //         <button onClick={() => navigate(-1)} className="mb-6 text-yellow-400 hover:text-yellow-300">
 //           ← Retour
 //         </button>
 
 //         <div className="grid lg:grid-cols-2 gap-12">
 //           <div>
 //             <img src={car.image} alt={car.name} className="w-full rounded-lg mb-6" />
 //             <div className="grid grid-cols-3 gap-4">
 //               <img src={car.image} alt={car.name} className="w-full h-24 object-cover rounded" />
 //               <img src={car.image} alt={car.name} className="w-full h-24 object-cover rounded opacity-50" />
 //               <img src={car.image} alt={car.name} className="w-full h-24 object-cover rounded opacity-50" />
 //             </div>
 //           </div>
 
 //           <div>
 //             <h1 className="text-4xl font-bold mb-4">{car.name}</h1>
 //             <div className="flex items-center mb-4">
 //               {[...Array(5)].map((_, i) => (
 //                 <Star key={i} className={`w-5 h-5 ${i < car.rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
 //               ))}
 //               <span className="ml-2 text-gray-400">({car.rating}/5)</span>
 //             </div>
 
 //             <div className="text-3xl font-bold mb-6">
 //               ${car.price}.00 <span className="text-lg text-gray-400">/jour</span>
 //             </div>
 
 //             <p className="text-gray-300 mb-6">{car.description}</p>
 
 //             <div className="mb-6">
 //               <h3 className="text-xl font-semibold mb-3">Caractéristiques</h3>
 //               <div className="grid grid-cols-2 gap-2">
 //                 {car.features.map((feature, index) => (
 //                   <div key={index} className="flex items-center">
 //                     <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
 //                     <span>{feature}</span>
 //                   </div>
 //                 ))}
 //               </div>
 //             </div>
 
 //             <div className="mb-6">
 //               <h3 className="text-xl font-semibold mb-3">Dates de location</h3>
 //               <div className="grid grid-cols-2 gap-4 mb-4">
 //                 <input
 //                   type="date"
 //                   className="bg-gray-800 text-white px-4 py-2 rounded"
 //                   value={selectedDates.start}
 //                   onChange={(e) => setSelectedDates({ ...selectedDates, start: e.target.value })}
 //                 />
 //                 <input
 //                   type="date"
 //                   className="bg-gray-800 text-white px-4 py-2 rounded"
 //                   value={selectedDates.end}
 //                   onChange={(e) => setSelectedDates({ ...selectedDates, end: e.target.value })}
 //                 />
 //               </div>
 //             </div>
 
 //             <div className="flex gap-4">
 //               <button
 //                 onClick={() => onAddToWishlist(car)}
 //                 className={`flex items-center justify-center w-12 h-12 rounded ${wishlist.some(item => item._id === car._id) ? 'bg-red-500' : 'bg-gray-800'} hover:bg-red-500 transition-colors`}
 //               >
 //                 <Heart className={`w-5 h-5 ${wishlist.some(item => item._id === car._id) ? 'fill-white' : ''} text-white`} />
 //               </button>
 //               <button
 //                 onClick={handleReservation}
 //                 className="flex-1 bg-yellow-400 text-black py-3 px-6 rounded font-semibold hover:bg-yellow-500 transition-colors"
 //               >
 //                 Réserver maintenant
 //               </button>
 //             </div>
 //           </div>
 //         </div>
 //       </div>
 //     </div>
 //   );
 // };
 
 // Page Panier
 
 const CartPage = ({ cartItems, onUpdateQuantity, onRemoveFromCart, user }) => {
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
 // const CheckoutForm = ({ cartItems }) => {
 
 //   const items = cartItems.length == 0 ? [{ _id: 'car-1', name: 'Mercedes Class S', price: 50000, quantity: 1, }] : cartItems;
 //   const fetchClientSecret = useCallback(async () => {
 //     // Create a Checkout Session
 //     try {
 //       const res = await apiClient.post('/checkout/create-session', { items });
 //       return res.data.clientSecret
 //     } catch (err) {
 
 //       console.error('Impossible de créer la session de paiement. Veuillez réessayer.', err);
 //     }
 
 //   }, []);
 
 //   const options = { fetchClientSecret };
 
 //   // return (
 //   //   <div id="checkout">
 //   //     <EmbeddedCheckoutProvider
 //   //       stripe={stripePromise}
 //   //       options={options}
 //   //     >
 //   //       <EmbeddedCheckout />
 //   //     </EmbeddedCheckoutProvider>
 //   //   </div>
 //   // )
 
 //   return (
 //     <div className="">
 
 //       <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
 //         <EmbeddedCheckout />
 //       </EmbeddedCheckoutProvider>
 //     </div>
 //   );
 
 // };
 
 // const Status = () => {
 //   const [status, setStatus] = useState(null);
 //   const [customerEmail, setCustomerEmail] = useState('');
 
 //   useEffect(() => {
 //     const queryString = window.location.search;
 //     const urlParams = new URLSearchParams(queryString);
 //     const sessionId = urlParams.get('session_id');
 //     async function getStatus() {
 
 //       try {
 
 //         const res = await apiClient.get(`/checkout/session-status?session_id=${sessionId}`);
 
 //         setStatus(res.data.status);
 //         setCustomerEmail(res.data.customer_email);
 //       } catch (error) {
 //         console.error('Impossible de créer la session de paiement. Veuillez réessayer.', error);
 
 //       }
 //     }; getStatus();
 
 
 //     try {
 
 //     } catch (err) {
 
 //     }
 
 //   }, []);
 
 //   // if (status === 'open') {
 //   //   return (
 //   //     <Navigate to="/checkout" />
 //   //   )
 //   // }
 
 //   // if (status === 'complete') {
 //   //   return (
 //   //     <section id="success">
 //   //       <p>
 //   //         We appreciate your business! A confirmation email will be sent to {customerEmail}.
 
 //   //         If you have any questions, please email <a href="mailto:orders@example.com">orders@example.com</a>.
 //   //           </p>
 //   //     </section>
 //   //   )
 //   // }
 
 //   // return null;
 
 
 //   if (status === 'open') {
 //     return (
 //       <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white font-inter">
 //         <div className="text-center p-8 bg-gray-900 rounded-2xl shadow-xl">
 //           <h2 className="text-3xl font-bold mb-4">Redirection...</h2>
 //           <p>Votre session de paiement est en cours.</p>
 //         </div>
 //       </div>
 //     );
 //   }
 
 //   if (status === 'complete') {
 //     return (
 //       <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white font-inter">
 //         <div className="text-center p-12 bg-gray-900 rounded-2xl shadow-2xl border border-gray-800">
 //           <i className="fa-solid fa-car text-6xl text-lime-400 mb-6 animate-pulse"></i>
 //           <h1 className="text-4xl font-extrabold text-lime-400 mb-4">Félicitations !</h1>
 //           <p className="text-xl text-gray-300 mb-6">Votre achat a été effectué avec succès.</p>
 //           <p className="text-gray-400">
 //             Un e-mail de confirmation sera envoyé à <span className="text-white font-semibold">{customerEmail}</span>.
 //             <br />
 //             Pour toute question, veuillez nous contacter à <a href="mailto:contact@luxurycars.com" className="text-lime-400 hover:underline">contact@luxurycars.com</a>.
 //           </p>
 //           <button
 //             onClick={() => navigate('/')}
 //             className="mt-8 px-6 py-3 bg-lime-400 text-gray-950 font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
 //           >
 //             Retourner à l'accueil
 //           </button>
 //         </div>
 //       </div>
 //     );
 //   }
 
 //   if (status === 'error') {
 //     return (
 //       <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white font-inter">
 //         <div className="text-center p-8 bg-gray-900 rounded-2xl shadow-xl">
 //           <h2 className="text-3xl font-bold mb-4 text-red-500">Erreur de paiement</h2>
 //           <p>Une erreur est survenue lors du traitement de votre paiement. Veuillez réessayer ou contacter le support.</p>
 //           <button
 //             onClick={() => navigate('/checkout')}
 //             className="mt-6 px-6 py-3 bg-red-500 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
 //           >
 //             Réessayer
 //           </button>
 //         </div>
 //       </div>
 //     );
 //   }
 
 //   return (
 //     <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white font-inter">
 //       <div className="text-center p-8">
 //         <h2 className="text-2xl animate-pulse">Chargement...</h2>
 //       </div>
 //     </div>
 //   );
 // }
 
 // Page Checkouts
 const CheckoutsPage = ({ cartItems, user }) => {
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
 
 // Page About
 const AboutPage = () => {
   return (
     <div className="bg-black text-white min-h-screen pt-16">
       <div className="container mx-auto px-4 py-16">
         <div className="max-w-4xl mx-auto">
           <h1 className="text-5xl font-bold mb-8 text-center">À propos de nous</h1>
 
           <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
             <div>
               <img
                 src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600"
                 alt="Luxury Cars"
                 className="rounded-lg"
               />
             </div>
             <div>
               <h2 className="text-3xl font-bold mb-6">Excellence et Luxe</h2>
               <p className="text-gray-300 mb-6">
                 Depuis plus de 15 ans, AutoCar est le leader de la location de véhicules de luxe.
                 Notre passion pour l'excellence automobile nous pousse à offrir uniquement les
                 meilleures voitures du marché.
               </p>
               <p className="text-gray-300">
                 Que ce soit pour un événement spécial, un voyage d'affaires ou simplement
                 pour le plaisir de conduire, nous mettons à votre disposition une flotte
                 exceptionnelle de véhicules haut de gamme.
               </p>
             </div>
           </div>
 
           <div className="grid md:grid-cols-3 gap-8 mb-16">
             <div className="text-center">
               <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                 <span className="text-2xl">🏆</span>
               </div>
               <h3 className="text-xl font-semibold mb-2">Excellence</h3>
               <p className="text-gray-400">Service de qualité supérieure avec attention aux détails</p>
             </div>
             <div className="text-center">
               <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                 <span className="text-2xl">🚗</span>
               </div>
               <h3 className="text-xl font-semibold mb-2">Flotte Premium</h3>
               <p className="text-gray-400">Véhicules de luxe récents et parfaitement entretenus</p>
             </div>
             <div className="text-center">
               <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                 <span className="text-2xl">⭐</span>
               </div>
               <h3 className="text-xl font-semibold mb-2">Satisfaction</h3>
               <p className="text-gray-400">Plus de 10,000 clients satisfaits nous font confiance</p>
             </div>
           </div>
 
           <div className="bg-gray-900 rounded-lg p-8 text-center">
             <h2 className="text-3xl font-bold mb-4">Notre Mission</h2>
             <p className="text-gray-300 text-lg max-w-2xl mx-auto">
               Rendre l'expérience automobile de luxe accessible à tous, en offrant un service
               personnalisé et des véhicules d'exception pour créer des moments inoubliables.
             </p>
           </div>
         </div>
       </div>
     </div>
   );
 };
 
 // Page Contact
 // const ContactPage = () => {
 //   const [formData, setFormData] = useState({
 //     firstName: '',
 //     lastName: '',
 //     email: '',
 //     phone: '',
 //     address: '',
 //     message: ''
 //   });
 
 //   const handleSubmit = (e) => {
 //     e.preventDefault();
 //     alert('Message envoyé ! Nous vous recontacterons bientôt.');
 //     setFormData({
 //       firstName: '',
 //       lastName: '',
 //       email: '',
 //       phone: '',
 //       address: '',
 //       message: ''
 //     });
 //   };
 
 //   return (
 //     <div className="bg-black text-white min-h-screen pt-16">
 //       <div className="container mx-auto px-4 py-16">
 //         <div className="max-w-6xl mx-auto">
 //           <h1 className="text-5xl font-bold mb-16 text-center">Contactez-nous</h1>
 
 //           <div className="grid lg:grid-cols-2 gap-16">
 //             <div>
 //               <h2 className="text-3xl font-bold mb-8">Informations de contact</h2>
 
 //               <div className="space-y-6">
 //                 <div className="flex items-center space-x-4">
 //                   <MapPin className="w-6 h-6 text-yellow-400" />
 //                   <div>
 //                     <h3 className="font-semibold">Adresse</h3>
 //                     <p className="text-gray-400">UAE - Dubai</p>
 //                   </div>
 //                 </div>
 
 //                 <div className="flex items-center space-x-4">
 //                   <Phone className="w-6 h-6 text-yellow-400" />
 //                   <div>
 //                     <h3 className="font-semibold">Téléphone</h3>
 //                     <p className="text-gray-400">+971 21 658 369</p>
 //                   </div>
 //                 </div>
 
 //                 <div className="flex items-center space-x-4">
 //                   <Mail className="w-6 h-6 text-yellow-400" />
 //                   <div>
 //                     <h3 className="font-semibold">Email</h3>
 //                     <p className="text-gray-400">info-car@gmail.com</p>
 //                   </div>
 //                 </div>
 
 //                 <div className="flex items-center space-x-4">
 //                   <Clock className="w-6 h-6 text-yellow-400" />
 //                   <div>
 //                     <h3 className="font-semibold">Horaires</h3>
 //                     <p className="text-gray-400">Lun - Dim: 24h/24</p>
 //                   </div>
 //                 </div>
 //               </div>
 
 //               <div className="mt-12">
 //                 <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
 //                 <div className="flex space-x-4">
 //                   <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black cursor-pointer transition-colors">
 //                     <span className="font-bold">f</span>
 //                   </div>
 //                   <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black cursor-pointer transition-colors">
 //                     <span className="font-bold">t</span>
 //                   </div>
 //                   <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black cursor-pointer transition-colors">
 //                     <span className="font-bold">in</span>
 //                   </div>
 //                 </div>
 //               </div>
 //             </div>
 
 //             <div className="bg-gray-900 rounded-lg p-8">
 //               <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
 
 //               <form onSubmit={handleSubmit} className="space-y-4">
 //                 <div className="grid grid-cols-2 gap-4">
 //                   <input
 //                     type="text"
 //                     placeholder="Prénom"
 //                     className="bg-gray-800 text-white px-4 py-3 rounded"
 //                     value={formData.firstName}
 //                     onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
 //                     required
 //                   />
 //                   <input
 //                     type="text"
 //                     placeholder="Nom"
 //                     className="bg-gray-800 text-white px-4 py-3 rounded"
 //                     value={formData.lastName}
 //                     onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
 //                     required
 //                   />
 //                 </div>
 
 //                 <input
 //                   type="email"
 //                   placeholder="Email"
 //                   className="w-full bg-gray-800 text-white px-4 py-3 rounded"
 //                   value={formData.email}
 //                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
 //                   required
 //                 />
 
 //                 <input
 //                   type="tel"
 //                   placeholder="Numéro de téléphone"
 //                   className="w-full bg-gray-800 text-white px-4 py-3 rounded"
 //                   value={formData.phone}
 //                   onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
 //                 />
 
 //                 <input
 //                   type="text"
 //                   placeholder="Adresse"
 //                   className="w-full bg-gray-800 text-white px-4 py-3 rounded"
 //                   value={formData.address}
 //                   onChange={(e) => setFormData({ ...formData, address: e.target.value })}
 //                 />
 
 //                 <textarea
 //                   placeholder="Message"
 //                   rows="5"
 //                   className="w-full bg-gray-800 text-white px-4 py-3 rounded resize-none"
 //                   value={formData.message}
 //                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
 //                   required
 //                 ></textarea>
 
 //                 <button
 //                   type="submit"
 //                   className="w-full bg-yellow-400 text-black py-3 rounded font-semibold hover:bg-yellow-500 transition-colors"
 //                 >
 //                   Envoyer le message
 //                 </button>
 //               </form>
 //             </div>
 //           </div>
 //         </div>
 //       </div>
 //     </div>
 //   );
 // };
 
 // Page Wishlist
 // Footer
// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-12">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-center mb-8">
//           <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center mr-2">
//             <span className="text-sm font-bold">AC</span>
//           </div>
//           <span className="font-bold text-xl">AUTOCAR</span>
//         </div>

//         <div className="text-center mb-8">
//           <p className="text-gray-400 mb-4">UAE - Dubai</p>
//           <p className="text-gray-400 mb-2">+971 21 658 369</p>
//           <p className="text-gray-400">info-car@gmail.com</p>
//         </div>

//         <div className="flex justify-center space-x-4 mb-8">
//           <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black cursor-pointer transition-colors">
//             <span className="text-sm">f</span>
//           </div>
//           <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black cursor-pointer transition-colors">
//             <span className="text-sm">@</span>
//           </div>
//           <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black cursor-pointer transition-colors">
//             <span className="text-sm">t</span>
//           </div>
//         </div>

//         <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-gray-400 text-sm">
//             Copyright © 2024 <Link to="/" className="text-yellow-400 hover:text-yellow-300">Cars</Link>
//           </p>
//           <p className="text-gray-400 text-sm mt-4 md:mt-0">
//             Développé par <span className="text-yellow-400">Eng.Angham Alhamwi</span>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };


// Support client
const SupportPage = ({ user }) => {
  const [activeTab, setActiveTab] = useState('chat');
  const [messages, setMessages] = useState([
    { id: 1, sender: 'support', message: 'Bonjour ! Comment puis-je vous aider aujourd\'hui ?', time: '10:30' },
    { id: 2, sender: 'user', message: 'J\'ai une question concernant ma location de demain.', time: '10:32' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const [tickets, setTickets] = useState([
    {
      id: 'T-001',
      subject: 'Problème avec la réservation',
      status: 'open',
      priority: 'high',
      created: '2024-01-15',
      lastUpdate: '2024-01-16'
    },
    {
      id: 'T-002',
      subject: 'Question sur l\'assurance',
      status: 'closed',
      priority: 'medium',
      created: '2024-01-10',
      lastUpdate: '2024-01-12'
    }
  ]);

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        sender: 'user',
        message: newMessage,
        time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, message]);
      setNewMessage('');

      // Simulation réponse automatique
      setTimeout(() => {
        const response = {
          id: messages.length + 2,
          sender: 'support',
          message: 'Merci pour votre message. Un de nos agents va vous répondre sous peu.',
          time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, response]);
      }, 2000);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Support Client</h1>

        {/* Navigation */}
        <div className="flex space-x-1 mb-8 bg-gray-900 p-1 rounded-lg">
          {[
            { id: 'chat', label: 'Chat en direct', icon: '💬' },
            { id: 'tickets', label: 'Mes tickets', icon: '🎫' },
            { id: 'faq', label: 'FAQ', icon: '❓' },
            { id: 'contact', label: 'Nous contacter', icon: '📞' }
          ].map(tab => (
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

        {/* Chat en direct */}
        {activeTab === 'chat' && (
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Chat en direct</h2>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-400">En ligne</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg h-96 p-4 mb-4 overflow-y-auto">
              {messages.map(message => (
                <div key={message.id} className={`mb-4 ${message.sender === 'user' ? 'text-right' : ''}`}>
                  <div className={`inline-block max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${message.sender === 'user'
                    ? 'bg-yellow-400 text-black'
                    : 'bg-gray-700 text-white'
                    }`}>
                    {message.message}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{message.time}</div>
                </div>
              ))}
            </div>

            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Tapez votre message..."
                className="flex-1 bg-gray-800 text-white px-4 py-3 rounded"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              />
              <button
                onClick={sendMessage}
                className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition-colors"
              >
                Envoyer
              </button>
            </div>
          </div>
        )}

        {/* Tickets */}
        {activeTab === 'tickets' && (
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Mes tickets de support</h2>
              <button className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-500 transition-colors">
                + Nouveau ticket
              </button>
            </div>

            <div className="space-y-4">
              {tickets.map(ticket => (
                <div key={ticket.id} className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">#{ticket.id} - {ticket.subject}</h3>
                      <p className="text-sm text-gray-400">Créé le {ticket.created} • Mis à jour le {ticket.lastUpdate}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-1 text-xs rounded ${ticket.priority === 'high' ? 'bg-red-500/20 text-red-400' :
                        ticket.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>
                        {ticket.priority === 'high' ? 'Urgent' : ticket.priority === 'medium' ? 'Moyen' : 'Faible'}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded ${ticket.status === 'open' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                        }`}>
                        {ticket.status === 'open' ? 'Ouvert' : 'Fermé'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQ */}
        {activeTab === 'faq' && (
          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Questions fréquentes</h2>
            <div className="space-y-4">
              {[
                {
                  question: "Comment modifier ma réservation ?",
                  answer: "Vous pouvez modifier votre réservation depuis votre espace client, section 'Mes commandes', jusqu'à 24h avant la prise en charge."
                },
                {
                  question: "Quelle est la politique d'annulation ?",
                  answer: "Annulation gratuite jusqu'à 48h avant la location. Entre 24h et 48h, des frais de 25% s'appliquent."
                },
                {
                  question: "L'assurance est-elle incluse ?",
                  answer: "Oui, une assurance de base est incluse. Vous pouvez souscrire à une assurance premium lors de la réservation."
                },
                {
                  question: "Puis-je conduire à l'étranger ?",
                  answer: "Oui, avec l'autorisation préalable et moyennant un supplément selon la destination."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-800 rounded-lg">
                  <details className="p-4">
                    <summary className="font-semibold cursor-pointer hover:text-yellow-400">
                      {faq.question}
                    </summary>
                    <p className="mt-3 text-gray-300">{faq.answer}</p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact */}
        {activeTab === 'contact' && (
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-6">Informations de contact</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-yellow-400" />
                  <div>
                    <h3 className="font-semibold">Urgence 24h/24</h3>
                    <p className="text-gray-400">+971 21 658 369</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-yellow-400" />
                  <div>
                    <h3 className="font-semibold">Support par email</h3>
                    <p className="text-gray-400">support@autocar.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-yellow-400" />
                  <div>
                    <h3 className="font-semibold">Bureau principal</h3>
                    <p className="text-gray-400">Dubai, UAE</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-yellow-400" />
                  <div>
                    <h3 className="font-semibold">Horaires</h3>
                    <p className="text-gray-400">7j/7, 24h/24</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-6">Nous écrire</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Sujet</label>
                  <select className="w-full bg-gray-800 text-white px-4 py-3 rounded">
                    <option>Question générale</option>
                    <option>Problème technique</option>
                    <option>Réclamation</option>
                    <option>Suggestion</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows="5"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded resize-none"
                    placeholder="Décrivez votre demande..."
                  ></textarea>
                </div>
                <button className="w-full bg-yellow-400 text-black py-3 rounded font-semibold hover:bg-yellow-500 transition-colors">
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
// Espace Client - Dashboard
const CustomerDashboard = ({user}) => {
  //const { user } = useAuth();
  const { orders } = useOrders();
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

// Footer
// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-12">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-center mb-8">
//           <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center mr-2">
//             <span className="text-sm font-bold">AC</span>
//           </div>
//           <span className="font-bold text-xl">AUTOCAR</span>
//         </div>

//         <div className="text-center mb-8">
//           <p className="text-gray-400 mb-4">UAE - Dubai</p>
//           <p className="text-gray-400 mb-2">+971 21 658 369</p>
//           <p className="text-gray-400">info-car@gmail.com</p>
//         </div>

//         <div className="flex justify-center space-x-4 mb-8">
//           <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black cursor-pointer transition-colors">
//             <span className="text-sm">f</span>
//           </div>
//           <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black cursor-pointer transition-colors">
//             <span className="text-sm">@</span>
//           </div>
//           <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black cursor-pointer transition-colors">
//             <span className="text-sm">t</span>
//           </div>
//         </div>

//         <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-gray-400 text-sm">
//             Copyright © 2024 <Link to="/" className="text-yellow-400 hover:text-yellow-300">Cars</Link>
//           </p>
//           <p className="text-gray-400 text-sm mt-4 md:mt-0">
//             Développé par <span className="text-yellow-400">Eng.Angham Alhamwi</span>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };


// Support client
const ProfilePage = ({ user, onUpdateProfile }) => {
  const [activeTab, setActiveTab] = useState('personal');
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    dateOfBirth: user?.dateOfBirth || '',
    drivingLicense: user?.drivingLicense || '',
    address: user?.address || '',
    city: user?.city || '',
    zipCode: user?.zipCode || '',
    emergencyContact: user?.emergencyContact || ''
  });

  const [addresses, setAddresses] = useState([
    { id: 1, label: 'Domicile', address: '123 Rue de la Paix, Paris 75001', isDefault: true },
    { id: 2, label: 'Bureau', address: '456 Avenue des Affaires, La Défense', isDefault: false }
  ]);

  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, type: 'card', last4: '4242', brand: 'Visa', isDefault: true, expiry: '12/25' },
    { id: 2, type: 'card', last4: '8888', brand: 'Mastercard', isDefault: false, expiry: '08/26' }
  ]);

  const handleSave = () => {
    onUpdateProfile(profileData);
    alert('Profil mis à jour avec succès !');
  };

  const tabs = [
    { id: 'personal', label: 'Informations personnelles', icon: '👤' },
    { id: 'addresses', label: 'Adresses', icon: '📍' },
    { id: 'payment', label: 'Paiements', icon: '💳' },
    { id: 'preferences', label: 'Préférences', icon: '⚙️' }
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Mon Profil</h1>

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

        {/* Contenu des onglets */}
        <div className="bg-gray-900 rounded-lg p-6">
          {activeTab === 'personal' && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Informations personnelles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom complet</label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                    value={profileData.name}
                    onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                    value={profileData.email}
                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Téléphone</label>
                  <input
                    type="tel"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Date de naissance</label>
                  <input
                    type="date"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                    value={profileData.dateOfBirth}
                    onChange={(e) => setProfileData({ ...profileData, dateOfBirth: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Numéro de permis</label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                    value={profileData.drivingLicense}
                    onChange={(e) => setProfileData({ ...profileData, drivingLicense: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Contact d'urgence</label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                    value={profileData.emergencyContact}
                    onChange={(e) => setProfileData({ ...profileData, emergencyContact: e.target.value })}
                  />
                </div>
              </div>
              <button
                onClick={handleSave}
                className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition-colors"
              >
                Sauvegarder les modifications
              </button>
            </div>
          )}

          {activeTab === 'addresses' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Mes adresses</h2>
                <button className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-500 transition-colors">
                  + Nouvelle adresse
                </button>
              </div>
              <div className="space-y-4">
                {addresses.map(address => (
                  <div key={address.id} className="bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold">{address.label}</h3>
                          {address.isDefault && (
                            <span className="bg-yellow-400 text-black px-2 py-1 text-xs rounded">
                              Par défaut
                            </span>
                          )}
                        </div>
                        <p className="text-gray-400">{address.address}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-yellow-400 hover:text-yellow-300">Modifier</button>
                        <button className="text-red-400 hover:text-red-300">Supprimer</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'payment' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Moyens de paiement</h2>
                <button className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-500 transition-colors">
                  + Ajouter une carte
                </button>
              </div>
              <div className="space-y-4">
                {paymentMethods.map(method => (
                  <div key={method.id} className="bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-8 bg-gradient-to-r from-gray-600 to-gray-700 rounded flex items-center justify-center">
                          <span className="text-xs font-bold">{method.brand}</span>
                        </div>
                        <div>
                          <p className="font-semibold">**** **** **** {method.last4}</p>
                          <p className="text-sm text-gray-400">Expire {method.expiry}</p>
                        </div>
                        {method.isDefault && (
                          <span className="bg-yellow-400 text-black px-2 py-1 text-xs rounded">
                            Par défaut
                          </span>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-yellow-400 hover:text-yellow-300">Modifier</button>
                        <button className="text-red-400 hover:text-red-300">Supprimer</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'preferences' && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Préférences</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Notifications</h3>
                  <div className="space-y-3">
                    {[
                      { id: 'email_offers', label: 'Offres spéciales par email', checked: true },
                      { id: 'sms_reminders', label: 'Rappels SMS', checked: false },
                      { id: 'push_notifications', label: 'Notifications push', checked: true },
                      { id: 'newsletter', label: 'Newsletter mensuelle', checked: true }
                    ].map(pref => (
                      <label key={pref.id} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          defaultChecked={pref.checked}
                          className="w-4 h-4 text-yellow-400 bg-gray-800 border-gray-600 rounded"
                        />
                        <span>{pref.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Langue et région</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Langue</label>
                      <select className="w-full bg-gray-800 text-white px-4 py-3 rounded">
                        <option>Français</option>
                        <option>English</option>
                        <option>العربية</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Devise</label>
                      <select className="w-full bg-gray-800 text-white px-4 py-3 rounded">
                        <option>USD ($)</option>
                        <option>EUR (€)</option>
                        <option>AED (د.إ)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition-colors">
                  Sauvegarder les préférences
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Page des commandes
const OrdersPage = () => {

  const { orders } = useOrders();

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


const WishlistPage = ({ wishlist, onRemoveFromWishlist, onAddToCart }) => {
  if (wishlist.length === 0) {
    return (
      <div className="bg-black text-white min-h-screen pt-16">
        <div className="container mx-auto px-4 py-16 text-center">
          <Heart className="w-24 h-24 mx-auto mb-6 text-gray-600" />
          <h2 className="text-2xl font-bold mb-4">Votre liste de souhaits est vide</h2>
          <p className="text-gray-400 mb-8">Ajoutez des voitures à votre liste de souhaits</p>
          <Link to="/gallery" className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition-colors">
            Découvrir les voitures
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Ma liste de souhaits</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlist.map(car => (
            <div key={car._id} className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="relative">
                <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
                <button
                  onClick={() => onRemoveFromWishlist(car._id)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{car.name}</h3>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < car.rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                  ))}
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-white">${car.price}.00</span>
                  <span className="text-gray-400">/jour</span>
                </div>
                <div className="flex gap-2">
                  <Link
                    to={`/car/${car._id}`}
                    className="flex-1 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors text-center"
                  >
                    Voir
                  </Link>
                  <button
                    onClick={() => onAddToCart(car)}
                    className="flex-1 bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-500 transition-colors font-semibold"
                  >
                    Réserver
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SupportPage = ({ user }) => {
  const [activeTab, setActiveTab] = useState('chat');
  const [messages, setMessages] = useState([
    { id: 1, sender: 'support', message: 'Bonjour ! Comment puis-je vous aider aujourd\'hui ?', time: '10:30' },
    { id: 2, sender: 'user', message: 'J\'ai une question concernant ma location de demain.', time: '10:32' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const [tickets, setTickets] = useState([
    {
      id: 'T-001',
      subject: 'Problème avec la réservation',
      status: 'open',
      priority: 'high',
      created: '2024-01-15',
      lastUpdate: '2024-01-16'
    },
    {
      id: 'T-002',
      subject: 'Question sur l\'assurance',
      status: 'closed',
      priority: 'medium',
      created: '2024-01-10',
      lastUpdate: '2024-01-12'
    }
  ]);

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        sender: 'user',
        message: newMessage,
        time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, message]);
      setNewMessage('');

      // Simulation réponse automatique
      setTimeout(() => {
        const response = {
          id: messages.length + 2,
          sender: 'support',
          message: 'Merci pour votre message. Un de nos agents va vous répondre sous peu.',
          time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, response]);
      }, 2000);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Support Client</h1>

        {/* Navigation */}
        <div className="flex space-x-1 mb-8 bg-gray-900 p-1 rounded-lg">
          {[
            { id: 'chat', label: 'Chat en direct', icon: '💬' },
            { id: 'tickets', label: 'Mes tickets', icon: '🎫' },
            { id: 'faq', label: 'FAQ', icon: '❓' },
            { id: 'contact', label: 'Nous contacter', icon: '📞' }
          ].map(tab => (
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

        {/* Chat en direct */}
        {activeTab === 'chat' && (
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Chat en direct</h2>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-400">En ligne</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg h-96 p-4 mb-4 overflow-y-auto">
              {messages.map(message => (
                <div key={message.id} className={`mb-4 ${message.sender === 'user' ? 'text-right' : ''}`}>
                  <div className={`inline-block max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${message.sender === 'user'
                    ? 'bg-yellow-400 text-black'
                    : 'bg-gray-700 text-white'
                    }`}>
                    {message.message}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{message.time}</div>
                </div>
              ))}
            </div>

            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Tapez votre message..."
                className="flex-1 bg-gray-800 text-white px-4 py-3 rounded"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              />
              <button
                onClick={sendMessage}
                className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition-colors"
              >
                Envoyer
              </button>
            </div>
          </div>
        )}

        {/* Tickets */}
        {activeTab === 'tickets' && (
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Mes tickets de support</h2>
              <button className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-500 transition-colors">
                + Nouveau ticket
              </button>
            </div>

            <div className="space-y-4">
              {tickets.map(ticket => (
                <div key={ticket.id} className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">#{ticket.id} - {ticket.subject}</h3>
                      <p className="text-sm text-gray-400">Créé le {ticket.created} • Mis à jour le {ticket.lastUpdate}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-1 text-xs rounded ${ticket.priority === 'high' ? 'bg-red-500/20 text-red-400' :
                        ticket.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>
                        {ticket.priority === 'high' ? 'Urgent' : ticket.priority === 'medium' ? 'Moyen' : 'Faible'}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded ${ticket.status === 'open' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                        }`}>
                        {ticket.status === 'open' ? 'Ouvert' : 'Fermé'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQ */}
        {activeTab === 'faq' && (
          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Questions fréquentes</h2>
            <div className="space-y-4">
              {[
                {
                  question: "Comment modifier ma réservation ?",
                  answer: "Vous pouvez modifier votre réservation depuis votre espace client, section 'Mes commandes', jusqu'à 24h avant la prise en charge."
                },
                {
                  question: "Quelle est la politique d'annulation ?",
                  answer: "Annulation gratuite jusqu'à 48h avant la location. Entre 24h et 48h, des frais de 25% s'appliquent."
                },
                {
                  question: "L'assurance est-elle incluse ?",
                  answer: "Oui, une assurance de base est incluse. Vous pouvez souscrire à une assurance premium lors de la réservation."
                },
                {
                  question: "Puis-je conduire à l'étranger ?",
                  answer: "Oui, avec l'autorisation préalable et moyennant un supplément selon la destination."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-800 rounded-lg">
                  <details className="p-4">
                    <summary className="font-semibold cursor-pointer hover:text-yellow-400">
                      {faq.question}
                    </summary>
                    <p className="mt-3 text-gray-300">{faq.answer}</p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact */}
        {activeTab === 'contact' && (
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-6">Informations de contact</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-yellow-400" />
                  <div>
                    <h3 className="font-semibold">Urgence 24h/24</h3>
                    <p className="text-gray-400">+971 21 658 369</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-yellow-400" />
                  <div>
                    <h3 className="font-semibold">Support par email</h3>
                    <p className="text-gray-400">support@autocar.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-yellow-400" />
                  <div>
                    <h3 className="font-semibold">Bureau principal</h3>
                    <p className="text-gray-400">Dubai, UAE</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-yellow-400" />
                  <div>
                    <h3 className="font-semibold">Horaires</h3>
                    <p className="text-gray-400">7j/7, 24h/24</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-6">Nous écrire</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Sujet</label>
                  <select className="w-full bg-gray-800 text-white px-4 py-3 rounded">
                    <option>Question générale</option>
                    <option>Problème technique</option>
                    <option>Réclamation</option>
                    <option>Suggestion</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows="5"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded resize-none"
                    placeholder="Décrivez votre demande..."
                  ></textarea>
                </div>
                <button className="w-full bg-yellow-400 text-black py-3 rounded font-semibold hover:bg-yellow-500 transition-colors">
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
