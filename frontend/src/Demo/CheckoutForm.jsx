import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ cartItems }) => {
  const items = cartItems.length === 0 ? [{ _id: 'car-1', name: 'Mercedes Class S', price: 50000, quantity: 1, }] : cartItems;

  const fetchClientSecret = useCallback(async () => {
    // Dummy apiClient to simulate a POST request
   
    try {
      const res = await apiClient.post('/checkout/create-session', { items });
      return res.data.clientSecret;
    } catch (err) {
      console.error('Impossible de créer la session de paiement. Veuillez réessayer.', err);
      return 'cs_test_success'; 
    }
  }, [items]);

  const options = { fetchClientSecret };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-950 min-h-screen text-gray-200 font-inter">
      <div className="w-full max-w-xl p-8 bg-gray-900 rounded-2xl shadow-xl border border-gray-800">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Finaliser l'achat</h2>
        <div className="mb-6 border-b border-gray-700 pb-4">
          <h3 className="text-xl font-semibold mb-2">Résumé de la commande</h3>
          {items.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-2 text-gray-400">
              <span>{item.name}</span>
              <span>{item.price} €</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-4 font-bold text-lg text-white">
            <span>Total</span>
            <span>{items.reduce((sum, item) => sum + item.price, 0)} €</span>
          </div>
        </div>
        <div className="bg-gray-950 p-4 rounded-xl">
          <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        </div>
      </div>
    </div>
  );
};

const Status = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get('session_id');


    async function getStatus() {
      try {
        const res = await apiClient.get(`/checkout/session-status?session_id=${sessionId}`);
        setStatus(res.data.status);
        setCustomerEmail(res.data.customer_email);
      } catch (error) {
        console.error('Impossible de récupérer le statut de la session.', error);
        setStatus('error'); // Set status to error to show an appropriate message
      }
    }
    
    if (sessionId) {
      getStatus();
    } else {
      // Redirect to checkout if no session ID is found
      navigate('/checkout');
    }
  }, [navigate]);

  if (status === 'open') {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white font-inter">
        <div className="text-center p-8 bg-gray-900 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Redirection...</h2>
          <p>Votre session de paiement est en cours.</p>
        </div>
      </div>
    );
  }

  if (status === 'complete') {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white font-inter">
        <div className="text-center p-12 bg-gray-900 rounded-2xl shadow-2xl border border-gray-800">
          <i className="fa-solid fa-car text-6xl text-lime-400 mb-6 animate-pulse"></i>
          <h1 className="text-4xl font-extrabold text-lime-400 mb-4">Félicitations !</h1>
          <p className="text-xl text-gray-300 mb-6">Votre achat a été effectué avec succès.</p>
          <p className="text-gray-400">
            Un e-mail de confirmation sera envoyé à <span className="text-white font-semibold">{customerEmail}</span>.
            <br />
            Pour toute question, veuillez nous contacter à <a href="mailto:contact@luxurycars.com" className="text-lime-400 hover:underline">contact@luxurycars.com</a>.
          </p>
          <button
            onClick={() => navigate('/')}
            className="mt-8 px-6 py-3 bg-lime-400 text-gray-950 font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Retourner à l'accueil
          </button>
        </div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white font-inter">
        <div className="text-center p-8 bg-gray-900 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold mb-4 text-red-500">Erreur de paiement</h2>
          <p>Une erreur est survenue lors du traitement de votre paiement. Veuillez réessayer ou contacter le support.</p>
          <button
            onClick={() => navigate('/checkout')}
            className="mt-6 px-6 py-3 bg-red-500 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white font-inter">
      <div className="text-center p-8">
        <h2 className="text-2xl animate-pulse">Chargement...</h2>
      </div>
    </div>
  );
};

const App = () => {
  const [view, setView] = useState('checkout');
  const cartItems = [{ _id: 'car-1', name: 'Mercedes Class S', price: 50000, quantity: 1 }];

  // Dummy navigation handlers for the single-file view
  const navigateToCheckout = () => setView('checkout');
  const navigateToStatus = () => setView('status');

  // Load external scripts using useEffect
  useEffect(() => {
    // Stripe scripts
    const stripeJs = document.createElement('script');
    stripeJs.src = 'https://js.stripe.com/v3/';
    document.body.appendChild(stripeJs);

    const stripeReactJs = document.createElement('script');
    stripeReactJs.src = 'https://js.stripe.com/v3/react-stripe.js';
    document.body.appendChild(stripeReactJs);

    const stripePromise = window.loadStripe("pk_test_...");
    window.stripePromise = stripePromise;

    // Font Awesome scripts
    const fontAwesome = document.createElement('script');
    fontAwesome.src = 'https://kit.fontawesome.com/a076d05399.js'; // Use your own Font Awesome kit URL
    fontAwesome.crossOrigin = 'anonymous';
    document.body.appendChild(fontAwesome);

    return () => {
      document.body.removeChild(stripeJs);
      document.body.removeChild(stripeReactJs);
      document.body.removeChild(fontAwesome);
    };
  }, []);

  return (
    <div className="app-container">
      {view === 'checkout' && <CheckoutForm cartItems={cartItems} />}
      {view === 'status' && <Status />}
      
      {/* Simulation of navigation for demo purposes */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-4">
        <button onClick={navigateToCheckout} className="px-4 py-2 bg-gray-800 text-white rounded-full">Go to Checkout</button>
        <button onClick={navigateToStatus} className="px-4 py-2 bg-gray-800 text-white rounded-full">Go to Status</button>
      </div>
    </div>
  );
};

export default App;
