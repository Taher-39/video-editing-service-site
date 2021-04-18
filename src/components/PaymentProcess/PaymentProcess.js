import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentCard from './PaymentCard';

const stripePromise = loadStripe('pk_test_51IeCgTHYjILdsZY2FPLWUK2bN32m4A2znYloUXwkNzWzPsqldA6KcFEO1xOyYbZATHeuzFJyBrGv5Uvvc3MARJeQ00oHYlm0bq');

const ProcessPayment = ({ handleOrder }) => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentCard handleOrder={handleOrder}></PaymentCard>
        </Elements>
    );
};

export default ProcessPayment;