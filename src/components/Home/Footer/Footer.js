import React from 'react';
import './Footer.css';
import FooterData from '../FooterData/FooterData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const orders = [
        { name: "First Video Making", link: "/emergency" },
        { name: "FreeTrails", link: "/free-trails" },
        { name: "Mp4 Video Making", link: "/mp4" },
        { name: "Ads making", link: "/ads-making" },
        { name: "Check Up", link: "/checkup" },
    ]
    const ourAddress = [
        { name: "Canada - 101010 ", link: "//google.com/map" },
        { name: "Toronto", link: "//google.com/map" },

    ]
    const VideoFormation = [
        { name: "First Video Making", link: "/emergency" },
        { name: "FreeTrails", link: "/free-trails" },
        { name: "Mp4 Video Making", link: "/mp4" },
        { name: "Ads making", link: "/ads-making" },
        { name: "Check Up", link: "/checkup" },
    ]
    const services = [
        { name: "First Video Making", link: "/emergency" },
        { name: "FreeTrails", link: "/free-trails" },
        { name: "Mp4 Video Making", link: "/mp4" },
        { name: "Ads making", link: "/ads-making" },
        { name: "Check Up", link: "/checkup" },
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterData key={1} menuTitle={"orders"} menuItems={orders} />
                    <FooterData key={2} menuTitle="Services" menuItems={services} />
                    <FooterData key={3} menuTitle="Video-Formation" menuItems={VideoFormation} />
                    <FooterData key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn color-brand">+011554889</button>
                        </div>
                    </FooterData>
                </div>
                <div className="copyRight text-center text-light">
                    <p>Copyright By @T {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;