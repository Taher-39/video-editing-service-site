import React from 'react';
import Navbar from '../Navbar/Navbar';
import TopBanner from '../TopBanner/TopBanner';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <Navbar></Navbar>
            <TopBanner></TopBanner>
        </div>
    );
};

export default Header;