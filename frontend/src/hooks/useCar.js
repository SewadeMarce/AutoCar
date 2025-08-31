// hooks/useCars.js
import { useState, useEffect } from 'react';
import { getCarById, getCars } from '../services/carData.service';

/**
 * Hook personnalisé pour récupérer et gérer la liste des voitures.
 * @returns {{ cars: Array, loading: boolean, error: string|null }}
 */
export const useCars = (id = null) => {
    const [cars, setCars] = useState(id ? null : []); // si id => 1 objet, sinon tableau
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                if (id) {
                    // Récupérer une voiture par ID
                    const allCars = await getCarById(id); // Appel pour une voiture spécifique
                    setCars(allCars);
                } else {
                    // Récupérer toutes les voitures
                    const allCars = await getCars();
                    setCars(allCars);
                }

            } catch (err) {
                setError("Impossible de charger les données des voitures.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCars();
    }, [id]);



      const addToCart = (car) => {
    setCartItems(prev => {
      const existing = prev.find(item => item._id === car._id);
      if (existing) {
        return prev.map(item =>
          item._id === car._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...car, quantity: 1 }];
    });
  };

  const updateQuantity = (id, quantity) => {
    setCartItems(prev =>
      prev.map(item =>
        item._id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item._id !== id));
  };

  const addToWishlist = (car) => {
    setWishlist(prev => {
      const existing = prev.find(item => item._id === car._id);
      if (existing) {
        return prev.filter(item => item._id !== car._id);
      }
      return [...prev, car];
    });
  };

    return { cars, loading, error, setCars ,addToCart,updateQuantity,removeFromCart,cartItems, setCartItems};
};



// export default function useCars(id = null) {
//     const [cars, setCars] = useState(id ? null : []); // si id => 1 objet, sinon tableau
//     const [error, setError] = useState("");
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchCars = async () => {
//             try {
//                 if (id) {
//                     // Récupérer une voiture par ID
//                     const data = await CarService.getCarById(id);
//                     setCars(data);
//                 } else {
//                     // Récupérer toutes les voitures
//                     const data = await CarService.getCars();
//                     setCars(data);
//                 }
//             } catch (err) {
//                 setError("Impossible de charger les données. Réessayez plus tard.");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchCars();
//     }, [id]);

//     return { cars, error, loading };
// }