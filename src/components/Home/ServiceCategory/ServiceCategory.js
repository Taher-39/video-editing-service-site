import React from 'react';
import './ServiceCategory.css'
const ServiceCategory = ({ service }) => {
    return (
        <div className="col-md-4 col-sm-12 d-flex justify-content-center my-4">
            <div className="service-card p-3 border border-2 bg-light">
                <div className="text-center">
                    <img style={{ width: '50px' }} src={service.img} alt="" />
                </div>
                <div className="text-center p-3 text-color">
                    <h3>{service.price}</h3>
                    <h4>{service.category}</h4>
                    <button className="btn color-brand">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCategory;