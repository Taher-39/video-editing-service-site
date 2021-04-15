import React from 'react';
import bannerImg from '../../../imgs/banner-2.jpg';
import './TopBanner.css'
const TopBanner = () => {
    return (
        <main style={{ minHeight: '600px' }} className='row d-flex align-items-center'>
            <div className="col-md-4 offset-md-1 banner-description">
                <h1 className='heading-color header-text'>Design, Build & Grow Your Business With</h1>
                <h3 className='heading-color'>Dream Quality Video</h3>
                <p className='text-color my-4'>
                   We are hare to understand you first and then to build your dream video.
                   Lets create video adds that engage your audience and define your service at the same time.
                </p>
                <div className="btn color-brand text-light">Choice Now</div>
            </div>
            <div className="col-md-6">
                <img src={bannerImg} alt="" className='img-fluid' />
            </div>
        </main>
    );
};

export default TopBanner;