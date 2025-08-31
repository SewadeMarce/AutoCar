// Composant Header mis à jour avec menu espace client

import React, { useState } from "react";

import {  Link } from 'react-router-dom';
import { Search, Menu, X, Star, Heart, ShoppingCart, User, Phone, Mail, MapPin, Calendar, Clock, Filter, ChevronDown } from 'lucide-react';

const Header = ({ cartItems, user, setUser }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

  return (
    <header className="bg-black/90 backdrop-blur-sm text-white fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
              <span className="text-sm font-bold">AC</span>
            </div>
            <span className="font-bold text-xl">AUTOCAR</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link>
            <Link to="/gallery" className="hover:text-yellow-400 transition-colors">Gallery</Link>
            <Link to="/about" className="hover:text-yellow-400 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact Us</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <span className="hidden md:block text-sm">+963 997 643 565</span>

            {/* Lien vers la wishlist */}
            <Link to="/wishlist" className="hover:text-yellow-400">
              <Heart className="w-6 h-6" />
            </Link>

            {/* Panier */}
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-6 h-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              )}
            </Link>

            {/* Menu utilisateur */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
                  className="flex items-center space-x-2 hover:text-yellow-400"
                >
                  <User className="w-6 h-6" />
                  <span className="hidden md:block">{user.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {isAccountMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-lg py-2">
                    <Link
                      to="/account"
                      className="block px-4 py-2 hover:bg-gray-800 transition-colors"
                      onClick={() => setIsAccountMenuOpen(false)}
                    >
                      🏠 Tableau de bord
                    </Link>
                    <Link
                      to="/account/profile"
                      className="block px-4 py-2 hover:bg-gray-800 transition-colors"
                      onClick={() => setIsAccountMenuOpen(false)}
                    >
                      👤 Mon profil
                    </Link>
                    <Link
                      to="/account/orders"
                      className="block px-4 py-2 hover:bg-gray-800 transition-colors"
                      onClick={() => setIsAccountMenuOpen(false)}
                    >
                      📋 Mes commandes
                    </Link>
                    <Link
                      to="/account/support"
                      className="block px-4 py-2 hover:bg-gray-800 transition-colors"
                      onClick={() => setIsAccountMenuOpen(false)}
                    >
                      💬 Support
                    </Link>
                    <div className="border-t border-gray-700 mt-2 pt-2">
                      <button
                        onClick={() => {
                          setUser(null);
                          localStorage.removeItem('token'); // Supprime le jeton

                          setIsAccountMenuOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-800 transition-colors text-red-400"
                      >
                        🚪 Se déconnecter
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="hover:text-yellow-400">
                <User className="w-6 h-6" />
              </Link>
            )}

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 py-4">
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-yellow-400 py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/gallery" className="hover:text-yellow-400 py-2" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
              <Link to="/about" className="hover:text-yellow-400 py-2" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/contact" className="hover:text-yellow-400 py-2" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
              {user && (
                <>
                  <div className="border-t border-gray-700 pt-2 mt-2">
                    <Link to="/account" className="hover:text-yellow-400 py-2 block" onClick={() => setIsMenuOpen(false)}>Mon compte</Link>
                    <Link to="/account/orders" className="hover:text-yellow-400 py-2 block" onClick={() => setIsMenuOpen(false)}>Mes commandes</Link>
                  </div>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header