import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentCard from './PaymentCard';

const stripePromise = loadStripe('sk_test_51IeCgTHYjILdsZY2KdLKQJA79CSjoEjJCqoDW5lD5HIQMDPq7SGU95JRbpWT5b3V1imprpiSq3uQjKK4JzcGFR5U00EQHFzSFx');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentCard></PaymentCard>
        </Elements>
    );
};

export default ProcessPayment;