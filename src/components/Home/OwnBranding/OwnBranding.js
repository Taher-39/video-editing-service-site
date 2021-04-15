import React from 'react';
import bannerOne from '../../../imgs/banner-1.jpg';
import './OwnBranding.css';
const OwnBranding = () => {
    return (
        <section style={{ minHeight: '600px' }} className='row mt-5 pt-5'>
            <div className="col-md-4 offset-md-1 description pb-3">
                <h1 className='heading-color header-text'>The Trusted Name in Video Editing</h1>
                <h6 className='heading-color py-4'>
                    We provide quality repair services to help extend the life of your appliances. We offer a 90-day
                    satisfaction guarantee.
                </h6>
                <p className='text-color my-4'>
                    If your appliance fails due to reasons related to the original repair, we will replace any parts that
                    fail due to defects in materials, workmanship, and perform any additional labor free of charge.
                </p>
                <button className="btn color-brand text-light">Explore Now</button>
            </div>
            <div className="col-md-6">
                <img src={bannerOne} alt="" className='img-fluid branding-img' />
            </div>
        </section>
    );
};

export default OwnBranding;