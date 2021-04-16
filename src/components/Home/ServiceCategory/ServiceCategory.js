import React from 'react';
import { useHistory } from 'react-router';
import './ServiceCategory.css'
const ServiceCategory = ({ service }) => {
    const history = useHistory()
    const handleService = (id) => {
        history.push(`/service/${id}`)
    };
    return (
        <div className="col-md-4 col-sm-12 d-flex justify-content-center my-4">
            <div className="service-card p-3 shadow bg-light">
                <div className="text-center">
                    <img style={{ width: '80px' }} src={`data:image/jpeg;base64,${service.image.img}`} alt="" />
                </div>
                <div className="text-center p-3 text-color">
                    <h3>${service.price}</h3>
                    <h4>{service.title}</h4>
                    <button className="btn color-brand" onClick={() => handleService(service._id)}>Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCategory;