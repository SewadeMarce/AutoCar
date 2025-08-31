
// src/hooks/useAuth.js
import { useState } from "react";
import { authLogin, authRegister, me } from "../services/auth.service";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useAuth() {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  async function auth() {

    try {
      const user = await me();
      setUser(user);
      
      setLoading(false);

    } catch (err) {
      // Si la requête échoue, le jeton est invalide ou expiré
      console.error("Token non valide. Déconnexion.", err);
      localStorage.removeItem('token'); // Supprime le jeton
      setUser(null);
      setLoading(false);
      setMessage("Utilisateyr non trouver.");

    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true)
    const token = localStorage.getItem('token');

    if (token)  {
      auth();
    };
  }, []);


  async function login(params) {

    setLoading(true);

    try {

      const user = await authLogin(params);
      setUser(user);
      setMessage(`Bienvenue ${user.name} !`);
      setLoading(false);
      navigate('/');
      window.location.reload();

    } catch (err) {
      console.error("Échec de connexion. Vérifiez vos identifiants", err);
      setUser(null);
      setMessage("Échec de connexion. Vérifiez vos identifiants.");
      setLoading(true);
    } finally {

      setLoading(true)

    };
  };

  const register = async (formData) => {
    try {
      const user = await authRegister(formData);
      setUser(user);
      setMessage(`Compte créé avec succès pour ${user.name} !`);

      navigate('/');
      window.location.reload();
    } catch (err) {
      console.error("Échec de l'inscription.", err);
      setUser(null);
      setLoading(true);
      setMessage("Échec de l'inscription.");
    } finally {

      setLoading(true)

    };
  };

  const logout = () => {

    localStorage.removeItem('token');
    setUser(null);
    setMessage("Vous êtes déconnecté.");
  };


  return { user, message, login,auth, register, logout, loading, setUser };
}



/*
// Données simulées pour l'admin
  const users = [
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
  ];
  
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
  
  // Données simulées des commandes avec plus d'entrées
  const [orders, setOrders] = useState([
    {
      id: '2024-001',
      carName: 'Mercedes Class S',
      carImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=400',
      startDate: '2024-02-01',
      endDate: '2024-02-05',
      duration: 4,
      total: 2000,
      status: 'active',
      date: '2024-01-28'
    },
    {
      id: '2024-002',
      carName: 'Range Rover',
      carImage: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400',
      startDate: '2024-01-15',
      endDate: '2024-01-20',
      duration: 5,
      total: 2250,
      status: 'completed',
      date: '2024-01-10'
    },
    {
      id: '2024-003',
      carName: 'Porsche 911',
      carImage: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400',
      startDate: '2024-03-01',
      endDate: '2024-03-03',
      duration: 2,
      total: 1600,
      status: 'pending',
      date: '2024-01-25'
    },
    {
      id: '2024-004',
      carName: 'BMW X7',
      carImage: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400',
      startDate: '2024-01-20',
      endDate: '2024-01-25',
      duration: 5,
      total: 3000,
      status: 'completed',
      date: '2024-01-18'
    },
    {
      id: '2024-005',
      carName: 'Audi A8',
      carImage: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400',
      startDate: '2024-02-10',
      endDate: '2024-02-12',
      duration: 2,
      total: 1100,
      status: 'cancelled',
      date: '2024-02-05'
    }
  ]);
 
  const addToCart = (car) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === car.id);
      if (existing) {
        return prev.map(item => 
          item.id === car.id 
            ? {...item, quantity: item.quantity + 1}
            : item
        );
      }
      return [...prev, {...car, quantity: 1}];
    });
  };
  
  const updateQuantity = (id, quantity) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? {...item, quantity} : item
      )
    );
  };
  
  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };
  
  const addToWishlist = (car) => {
    setWishlist(prev => {
      const existing = prev.find(item => item.id === car.id);
      if (existing) {
        return prev.filter(item => item.id !== car.id);
      }
      return [...prev, car];
    });
  };
  
  const removeFromWishlist = (id) => {
    setWishlist(prev => prev.filter(item => item.id !== id));
  };
   */
