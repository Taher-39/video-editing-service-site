import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OwnBranding from '../OwnBranding/OwnBranding';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Projects></Projects>
            <Services></Services>
            <OwnBranding></OwnBranding>
            <CustomerReviews></CustomerReviews>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;