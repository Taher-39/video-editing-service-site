import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignOutAlt, faUsers, faAd, faList, faBook, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'

const SideBar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ minHeight: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/book" className="text-white">
                        <FontAwesomeIcon icon={faBook} /> <span>Book</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/bookList" className="text-white">
                        <FontAwesomeIcon icon={faList} /> <span>Booking List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-white">
                        <FontAwesomeIcon icon={faArrowRight} /> <span>Review</span>
                    </Link>
                </li>
                <li>
                    <Link to="/orders" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Orders</span>
                    </Link>
                </li>
                <li>
                    <Link to="/makeAdmin" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Make Admin</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addService" className="text-white">
                        <FontAwesomeIcon icon={faAd} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageServices" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Manage Services</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default SideBar;