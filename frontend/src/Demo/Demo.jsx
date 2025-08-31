import React, { useState, useEffect, useCallback } from 'react';
import { Check, Mail, ArrowRight, Car, Shield, Clock } from 'lucide-react';

// Simuler stripePromise et apiClient pour la démo
const stripePromise = Promise.resolve({});
const apiClient = {
  post: async (url, data) => ({ data: { clientSecret: 'cs_test_demo' } }),
  get: async (url) => ({ data: { status: 'complete', customer_email: 'client@example.com' } })
};

const CheckoutForm = ({ cartItems = [] }) => {
  const items = cartItems.length == 0 ? [{ 
    _id: 'car-1', 
    name: 'Mercedes Class S', 
    price: 50000, 
    quantity: 1,
    image: '/api/placeholder/400/250'
  }] : cartItems;

  const [isLoading, setIsLoading] = useState(false);

  const fetchClientSecret = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await apiClient.post('/checkout/create-session', { items });
      return res.data.clientSecret;
    } catch (err) {
      console.error('Impossible de créer la session de paiement. Veuillez réessayer.', err);
    } finally {
      setIsLoading(false);
    }
  }, [items]);

  const options = { fetchClientSecret };
  const totalAmount = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Header avec effet glassmorphism */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 px-4 py-8 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              FINALISER VOTRE
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                COMMANDE
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Vivez l'expérience ultime du luxe automobile
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Résumé de commande */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Car className="mr-3 text-blue-400" size={24} />
                Votre Sélection
              </h2>
              
              {items.map((item) => (
                <div key={item._id} className="group">
                  <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                      <Car className="text-blue-400" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                      <p className="text-gray-400">Quantité: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-white">
                        {(item.price * item.quantity).toLocaleString('fr-FR')} €
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="border-t border-white/20 pt-4 mt-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold text-white">Total</span>
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {totalAmount.toLocaleString('fr-FR')} €
                  </span>
                </div>
              </div>
            </div>

            {/* Avantages */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Vos Avantages</h3>
              <div className="space-y-3">
                {[
                  { icon: Shield, text: "Paiement 100% sécurisé" },
                  { icon: Clock, text: "Livraison premium incluse" },
                  { icon: Check, text: "Garantie satisfaction" }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-300">
                    <benefit.icon className="text-green-400" size={20} />
                    <span>{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Formulaire de paiement */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Paiement Sécurisé</h2>
            
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
              </div>
            ) : (
              <div id="checkout" className="space-y-4">
                {/* Simulation du composant Stripe */}
                <div className="bg-white rounded-xl p-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Numéro de carte
                      </label>
                      <div className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50">
                        <span className="text-gray-400">•••• •••• •••• 4242</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          MM/AA
                        </label>
                        <div className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50">
                          <span className="text-gray-400">12/28</span>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CVC
                        </label>
                        <div className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50">
                          <span className="text-gray-400">•••</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom sur la carte
                      </label>
                      <div className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50">
                        <span className="text-gray-400">John Doe</span>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl">
                  <span>Finaliser le Paiement</span>
                  <ArrowRight size={20} />
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Vos informations sont protégées par un cryptage SSL 256-bit
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Status = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState('');
  const [isLoading, setIsLoading] = useState(true);

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
      } finally {
        setIsLoading(false);
      }
    }
    
    getStatus();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-400 mx-auto mb-4"></div>
          <p className="text-white text-xl">Vérification du paiement...</p>
        </div>
      </div>
    );
  }

  if (status === 'open') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Redirection vers le checkout...</h2>
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (status === 'complete') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
        {/* Effet de particules en arrière-plan */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            {/* Icône de succès animée */}
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto flex items-center justify-center animate-bounce">
                <Check className="text-white" size={48} />
              </div>
            </div>

            {/* Message principal */}
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                PAIEMENT
                <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  CONFIRMÉ
                </span>
              </h1>

              <div className="space-y-6 text-gray-300">
                <p className="text-xl leading-relaxed">
                  Félicitations ! Votre commande a été traitée avec succès.
                </p>
                
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <Mail className="text-blue-400" size={24} />
                    <span className="text-lg font-semibold text-white">Confirmation envoyée</span>
                  </div>
                  <p className="text-gray-300">
                    Un email de confirmation a été envoyé à{' '}
                    <span className="font-semibold text-blue-400">{customerEmail}</span>
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <Shield className="text-green-400 mb-2" size={24} />
                    <h3 className="font-semibold text-white mb-1">Paiement Sécurisé</h3>
                    <p className="text-sm text-gray-400">Transaction protégée</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <Clock className="text-blue-400 mb-2" size={24} />
                    <h3 className="font-semibold text-white mb-1">Livraison Premium</h3>
                    <p className="text-sm text-gray-400">Service haut de gamme</p>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <p className="text-gray-300">
                    Pour toute question, contactez notre service client premium :
                  </p>
                  <a 
                    href="mailto:luxury@autocar.com"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg"
                  >
                    <Mail size={20} />
                    <span>luxury@autocar.com</span>
                  </a>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-sm text-gray-400">
                    Nous vous remercions de votre confiance pour cette acquisition exceptionnelle.
                  </p>
                </div>
              </div>
            </div>

            {/* Bouton de retour */}
            <button className="mt-8 bg-white/10 backdrop-blur-sm text-white font-semibold py-3 px-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              Retour à l'accueil
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center">
      <div className="text-center text-white">
        <h2 className="text-2xl font-bold mb-4">État de la commande non disponible</h2>
        <p className="text-gray-400">Veuillez réessayer ou contacter le support.</p>
      </div>
    </div>
  );
};

// Composant de démonstration
const Demo = () => {
  const [currentView, setCurrentView] = useState('checkout');
  
  const sampleCartItems = [
    {
      _id: 'car-1',
      name: 'Mercedes Class S',
      price: 85000,
      quantity: 1
    }
  ];

  return (
    <div>
      {/* Barre de navigation pour la démo */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black/80 backdrop-blur-lg rounded-full p-2 border border-white/20">
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentView('checkout')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                currentView === 'checkout'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Checkout
            </button>
            <button
              onClick={() => setCurrentView('status')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                currentView === 'status'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Status
            </button>
          </div>
        </div>
      </div>

      {currentView === 'checkout' && <CheckoutForm cartItems={sampleCartItems} />}
      {currentView === 'status' && <Status />}
    </div>
  );
};

export default Demo;