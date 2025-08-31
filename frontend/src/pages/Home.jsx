import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import CarCard from "../components/CarCard";

// Page d'accueil
 const Homes = ({ cars, onAddToCart, onAddToWishlist, wishlist }) => {
   const featuredCars = cars.slice(0, 3);

   return (
     <div className="bg-black text-white">
       <Hero />

       {/* Today's Specials */}
       <section className="py-16 bg-gray-900">
         <div className="container mx-auto px-4">
           <div className="text-center mb-12">
             <h2 className="text-4xl font-bold mb-4">TODAY'S SPECIALS</h2>
             <div className="flex justify-center space-x-8 mb-8">
               <Link to="/gallery" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                 <span>🚗</span>
                 <span>View All Cars</span>
               </Link>
               <Link to="/gallery?category=suv" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                 <span>🚙</span>
                 <span>SUV</span>
               </Link>
               <Link to="/gallery?category=luxury" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                 <span>✨</span>
                 <span>Luxury</span>
               </Link>
             </div>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
             {featuredCars.map(car => (
               <CarCard
                 key={car._id}
                 car={car}
                 onAddToCart={onAddToCart}
                 onAddToWishlist={onAddToWishlist}
                 isInWishlist={wishlist.some(item => item._id === car._id)}
               />
             ))}
           </div>
         </div>
       </section>

       {/* Brand Section */}
       <section className="py-16 bg-black">
         <div className="container mx-auto px-4">
           <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
              <img
                 src="https://images.unsplash.com/photo-1563720223185-11003d516935?w=600"
                 alt="Luxury Car"
                 className="rounded-lg"
               />
             </div>
             <div>
               <h2 className="text-4xl font-bold mb-6">
                 BOYSTOY<br />
                 MIAMI
               </h2>
               <div className="border-t border-yellow-400 w-16 mb-6"></div>
               <p className="text-yellow-400 mb-6">Follow us</p>
               <div className="flex space-x-4">
                 <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
                 <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
                 <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Services */}
       <section className="py-16 bg-gray-900">
         <div className="container mx-auto px-4">
           <h2 className="text-4xl font-bold mb-12">LUXURY CAR RENTAL MIAMI</h2>
           <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
               <p className="text-gray-300 mb-8">
                 A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradise.
               </p>
               <div className="grid grid-cols-3 gap-8">
                 <div className="text-center">
                   <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4 mx-auto">
                     <span className="text-2xl">🏎️</span>
                   </div>
                   <h3 className="font-semibold">Motors</h3>
                 </div>
                 <div className="text-center">
                   <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4 mx-auto">
                     <span className="text-2xl">📍</span>
                   </div>
                   <h3 className="font-semibold">Pick up</h3>
                 </div>
                 <div className="text-center">
                   <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4 mx-auto">
                     <span className="text-2xl">✨</span>
                   </div>
                   <h3 className="font-semibold">Luxury</h3>
                 </div>
               </div>
             </div>
             <div>
               <img
                src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600"
                 alt="Sports Car"
                 className="rounded-lg"
               />
             </div>
           </div>
         </div>
       </section>
     </div>
   );
 };
export default Homes