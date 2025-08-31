
import React, { useCallback, useState, useEffect } from "react";

import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import apiClient from "../../utils/axios";
const stripePromise = loadStripe("pk_test_51RTpeWC1YhgPVCJxmWlwhAYTITZXrXOgxqJqhfDeponlKqAbDdB6i554F1w5HAMDToS5fV1e22ySUmOu6RrL2lTy0002MfdWum");

const CheckoutForm = ({ cartItems }) => {
  const [loading, setLoading] = useState(true);
  const items = cartItems.length == 0 ? [{ _id: 'car-1', name: 'Mercedes Class S', price: 50000, quantity: 1, }] : cartItems;
  const fetchClientSecret = useCallback(async () => {
    // Create a Checkout Session
    setLoading(true)
    try {
      const res = await apiClient.post('/checkout/create-session', { items });
      const { clientSecret } = res.data;
      setLoading(false)
      return clientSecret;
    } catch (err) {
      setLoading(false)
      console.error('Impossible de créer la session de paiement. Veuillez réessayer.', err);
    } finally {
      setLoading(false)
    }

  }, []);

  const options = { fetchClientSecret };

  // return (
  //   <div id="checkout">
  //     <EmbeddedCheckoutProvider
  //       stripe={stripePromise}
  //       options={options}
  //     >
  //       <EmbeddedCheckout />
  //     </EmbeddedCheckoutProvider>
  //   </div>
  // )
 
  return (
    <div className="">

      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );

};
export default CheckoutForm