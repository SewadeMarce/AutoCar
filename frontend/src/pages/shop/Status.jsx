
import React, {  useState, useEffect } from "react";
import apiClient from "../../utils/axios";
import { useNavigate } from "react-router-dom";
const CheckoutStatus = () => {
  const navigate = useNavigate()
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState('');

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
        console.error('Impossible de créer la session de paiement. Veuillez réessayer.', error);

      }
    }; getStatus();


    try {

    } catch (err) {

    }

  }, []);



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
}
export default CheckoutStatus
