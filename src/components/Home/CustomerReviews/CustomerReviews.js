import React, { useEffect, useState } from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import './CustomerReviews.css';

const CustomerReviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://aqueous-hollows-66826.herokuapp.com/getReview')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className='review pb-5'>
            <div className="container">
                <h1 className='heading-color text-center pt-5'>Customer Reviews</h1>
                <div className="row pt-4">
                    {
                        reviews.map(review => <CustomerReview review={review} key={review._id}></CustomerReview>)
                    }
                </div>
            </div>
        </section>
    );
};

export default CustomerReviews;