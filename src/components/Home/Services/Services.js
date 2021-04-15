import React from 'react';
import './Services.css';
import articleLogo from '../../../imgs/article-logo.png';
import AdsLogo from '../../../imgs/ads-logo-1.png';
import ytLogo from '../../../imgs/yt-logo.png';
import ServiceCategory from '../ServiceCategory/ServiceCategory';

const servicesData = [
    {
        id: 1,
        category: 'Convert Article To Video',
        img: articleLogo,
        price: '$99'
    },
    {
        id: 2,
        category: 'Ads, Promos & Social Media',
        img: AdsLogo,
        price: "$149"
    },
    {
        id: 3,
        category: 'YouTube/Others',
        img: ytLogo,
        price: '%250'
    }

]

const services = () => {
    return (
        <section className='mt-5 services-area'>
            <div className='container pt-5'>
                <div className="text-center">
                    <h6 className='text-color'>Services</h6>
                    <h1 className='heading-color'>Lets choice video category that engage your audience and define your service at the same time.</h1>
                </div>
                <div className="row">
                    {
                        servicesData.map(service => <ServiceCategory service={service} key={service.id}></ServiceCategory>)
                    }
                </div>
            </div>
        </section>
    );
};

export default services;