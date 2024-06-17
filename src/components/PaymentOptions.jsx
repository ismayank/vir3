import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentOptions = () => {
  const navigate = useNavigate();

  const handleStripePayment = async () => {
    navigate('/stripe-payment');
  };

  const makePayment = async () => {
    const stripe = await loadStripe('pk_test_51PSO2SEh6vqdeZUg8gpu3WNBKLyGSyUztEDxoGBxeZIWnct32KMRReIblKSq7Rhad7OFnsPEfBqkXZnRyILfc7lJ000Wj9sWij'); // Replace with your Stripe public key

    const body = {
      products: [
        {
          name: 'plant',
          price: 50, // Set the price to ₹50
        },
      ],
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    const response = await fetch('http://localhost:7001/api/create-checkout-session', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error.message);
    }
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl mb-6">Choose your payment method</h1>
      <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={makePayment}>
        Pay with Stripe
      </button>
      <button className="mb-4 px-4 py-2 bg-green-500 text-white rounded">
        Pay with Razorpay
      </button>
      <button className="mb-4 px-4 py-2 bg-yellow-500 text-white rounded">
        Pay with PayPal
      </button>
    </div>
  );
};

export default PaymentOptions;
