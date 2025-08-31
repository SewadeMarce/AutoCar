
import React, { useCallback, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import { Search, Menu, X, Star, Heart, ShoppingCart, User, Phone, Mail, MapPin, Calendar, Clock, Filter, ChevronDown } from 'lucide-react';
import { useCars } from './hooks/useCar';
import { useAuth } from "./hooks/useAuth";
import { useOrders } from "./hooks/useOrders";
import Footer from "./components/Footer";
import  Header  from "./components/Header";
import Gallery from "./pages/Gallery";
import CarDetail from "./pages/CarDetail";
import Homes from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import CheckoutStatus from "./pages/shop/Status";
import CustomerDashboard from "./pages/client/CustomerDashboard";
import Profile from "./pages/client/Profile";
import Wishlist from "./pages/client/Wislist";
import Orders from "./pages/client/Orders";
import Login from "./pages/Login";
import Support from "./pages/client/Support";
import Checkouts from "./pages/shop/CheckoutsPage";
import CheckoutForm from "./pages/shop/CheckoutForm";


const App = () => {
  const [wishlist, setWishlist] = useState([]);
  const { user, setUser} = useAuth();
  const { cars, loading,addToCart,updateQuantity ,removeFromCart,cartItems, setCartItems} = useCars();
  const { orders, isLoading } = useOrders()


  const addToWishlist = (car) => {
    setWishlist(prev => {
      const existing = prev.find(item => item._id === car._id);
      if (existing) {
        return prev.filter(item => item._id !== car._id);
      }
      return [...prev, car];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist(prev => prev.filter(item => item._id !== id));
  };


  const handleUpdateProfile = (profileData) => {
    setUser(prev => ({ ...prev, ...profileData }));
  };


  if (loading && isLoading) return (<div className="flex items-center justify-center min-h-screen bg-gray-950 text-white font-inter">
    <div className="text-center p-8">
      <h2 className="text-2xl animate-pulse">Chargement...</h2>
    </div>
  </div>);
  return (

    <div className="min-h-screen bg-black">
    
        <Header cartItems={cartItems} user={user} setUser={setUser} />
      

      <Routes>
        {/* Routes publiques */}
        <Route path="/" element={
          <Homes
            cars={cars}
            onAddToCart={addToCart}
            onAddToWishlist={addToWishlist}
            wishlist={wishlist}
          />
        } />
        <Route path="/gallery" element={
          <Gallery
            cars={cars}
            onAddToCart={addToCart}
            onAddToWishlist={addToWishlist}
            wishlist={wishlist}
          />
        } />
        <Route path="/car/:id" element={
          <CarDetail
            cars={cars}
            onAddToCart={addToCart}
            onAddToWishlist={addToWishlist}
            wishlist={wishlist}
          />
        } />
        <Route path="/cart" element={
          <Cart
            cartItems={cartItems}
            onUpdateQuantity={updateQuantity}
            onRemoveFromCart={removeFromCart}
            user={user}
          />
        } />

        <Route path="/login" element={
          user ? <Profile user={user} onUpdateProfile={handleUpdateProfile} /> : <Login  />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        

        <Route path="/wishlist" element={
          <Wishlist
            wishlist={wishlist}
            onRemoveFromWishlist={removeFromWishlist}
            onAddToCart={addToCart}
          />
        } />

        {/* Routes de l'espace client */}
        <Route path="/account" element={
          user ? <CustomerDashboard user={user} /> : <Login  />
        } />
        <Route path="/account/profile" element={
          user ? <Profile user={user}  /> : <Login  />
        } />
        <Route path="/account/orders" element={
          user ? <Orders orders={orders} /> : <Login  />
        } />
        <Route path="/account/support" element={
          user ? <Support /> : <Login  />
        } />
        <Route path="/checkouts" element={
          user ? <Checkouts cartItems={cartItems} user={user} /> : <Login 
          />
        } />
        <Route path="/checkout" element={<CheckoutForm cartItems={cartItems} />} />
        <Route path="/status" element={<CheckoutStatus />} />

       
      </Routes>
      <Footer />
    </div>
  );
};

export default App;