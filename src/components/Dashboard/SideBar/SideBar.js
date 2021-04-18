import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignOutAlt, faUsers, faAd, faList, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const SideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        fetch('https://aqueous-hollows-66826.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email: loggedInUser.email})
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ minHeight: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                {isAdmin ? <div>
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
                    </div>
                :
                    <div>
                    <li>
                        <Link to="/bookingList" className="text-white">
                            <FontAwesomeIcon icon={faList} /> <span>Booking List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/review" className="text-white">
                            <FontAwesomeIcon icon={faArrowRight} /> <span>Review</span>
                        </Link>
                    </li>
                </div>
                
                }
                
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> 
                <span onClick={() => setLoggedInUser({})} >Logout</span></Link>
                
            </div>
        </div>
    );
};

export default SideBar;