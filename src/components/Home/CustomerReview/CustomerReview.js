import React from 'react';
import './CustomerReview.css';
const Review = ({review}) => {
    return (
        <div className="col-md-4 col-sm-12 d-flex justify-content-center my-4" style={{ height: '100%' }}>
            <div className='shadow review-card bg-light'>
                <div className="px-4 pt-3">
                    <h2 className='pb-3 text-center'>Rating: 4/5 ⭐ </h2>
                    <p className='text-secondary'>{review.description}</p>
                </div>
                <div className="description text-center text-color row justify-content-around">
                    <div><h4>{review.name}</h4></div>
                    <div><h6>{review.company}</h6></div>
                </div>
            </div>
        </div>
    );
};

export default Review;