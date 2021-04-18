import React, { useEffect, useState } from 'react';
import './Services.css';
import ServiceCategory from '../ServiceCategory/ServiceCategory';


const Services = () => {
    const [serviceData, setServiceData] = useState([])
    useEffect(() => {
        fetch('https://aqueous-hollows-66826.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, [])
    return (
        <section className='mt-5 services-area'>
            <div className='container pt-5'>
                <div className="text-center">
                    <h6 className='text-color'>Services</h6>
                    <h1 className='heading-color'>Popular Services</h1>
                    <p className='text-color'>Let's choice video category that engage your audience and define your service at the same time.</p>
                </div>
                <div className="row">
                    {
                        serviceData.map(service => <ServiceCategory service={service} key={service._id}></ServiceCategory>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;