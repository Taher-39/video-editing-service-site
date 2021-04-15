import React from 'react';
import Review from '../Review/Review';
import './CustomerReviews.css';

const testimonials = [
    {
        id: 1,
        customerName: 'John vikenchs',
        quote: 'We know that the best way to drive positive change is to learn from our mistakes and hear what our customers have to say. Our companies thrive off customer feedback.',
        rating: 4
    },
    {
        id: 2,
        customerName: 'Lory UF',
        quote: 'Truly listening is hearing the needs of the customer, understanding those needs, and making sure the company recognizes the opportunity they present.',
        rating: 5
    },
    {
        id: 3,
        customerName: 'Pitter Burg',
        quote: 'Innovation is hard because solving problems people didn’t know they had and building something no-one needs look identical at first.',
        rating: 4
    }

]

const CustomerReviews = () => {
    return (
        <section className='review pb-5'>
            <div className="container">
                <h1 className='heading-color text-center pt-5'>Customer Reviews</h1>
                <div className="row pt-4">
                    {
                        testimonials.map(review => <Review review={review} key={review.id}></Review>)
                    }
                </div>
            </div>
        </section>
    );
};

export default CustomerReviews;