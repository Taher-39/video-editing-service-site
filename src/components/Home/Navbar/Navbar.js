import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import navLogo from '../../../imgs/navIcon.jpg'

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="img">
                            <img className='pl-3' style={{ width: '50px' }} src={navLogo} alt=""/>
                        </div>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link ms-5" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ms-5" to="/login">{loggedInUser.email ? <h6>{loggedInUser.name || loggedInUser.email}</h6> : "Log In"}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ms-5" to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ms-5" to="#">About-Us</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ms-5" href="#">Blogs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-5" href="#">Contact-Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;