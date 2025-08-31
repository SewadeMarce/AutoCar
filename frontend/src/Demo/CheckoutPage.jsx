import { useCallback, useEffect, useState } from "react";
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Navigate } from "react-router-dom";
import apiClient from "../api/apiClient";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

// ✅ Composant Checkout
export const CheckoutForm = ({ cartItems }) => {
  const items =
    cartItems.length === 0
      ? [{ _id: "car-1", name: "Mercedes Class S", price: 50000, quantity: 1 }]
      : cartItems;

  const fetchClientSecret = useCallback(async () => {
    try {
      const res = await apiClient.post("/checkout/create-session", { items });
      return res.data.clientSecret;
    } catch (err) {
      console.error("Impossible de créer la session de paiement.", err);
    }
  }, [items]);

  const options = { fetchClientSecret };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-2xl bg-neutral-900 p-8 rounded-2xl shadow-xl border border-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-100 tracking-wide uppercase">
          Checkout
        </h1>
        <p className="text-gray-400 text-center mb-6">
          Finalisez votre réservation de voiture de luxe
        </p>
        <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </div>
    </div>
  );
};

// ✅ Composant Status
export const Status = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get("session_id");

    async function getStatus() {
      try {
        const res = await apiClient.get(`/checkout/session-status?session_id=${sessionId}`);
        setStatus(res.data.status);
        setCustomerEmail(res.data.customer_email);
      } catch (error) {
        console.error("Erreur lors de la récupération du statut de paiement", error);
      }
    }
    getStatus();
  }, []);

  if (status === "open") {
    return <Navigate to="/checkout" />;
  }

  if (status === "complete") {
    return (
      <section className="min-h-screen flex items-center justify-center bg-black text-white px-4">
        <div className="max-w-lg bg-neutral-900 p-8 rounded-2xl shadow-xl text-center border border-gray-800">
          <h2 className="text-3xl font-bold text-green-400 mb-4">Paiement Réussi 🎉</h2>
          <p className="text-gray-300 mb-4">
            Merci pour votre confiance ! Un email de confirmation a été envoyé à{" "}
            <span className="font-semibold text-white">{customerEmail}</span>.
          </p>
          <p className="text-gray-400">
            Pour toute question, contactez-nous à{" "}
            <a href="mailto:orders@example.com" className="text-blue-400 hover:underline">
              orders@example.com
            </a>
          </p>
        </div>
      </section>
    );
  }

  return null;
};
