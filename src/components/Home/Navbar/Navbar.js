import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link className="nav-link ms-5" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link ms-5" to="/login">Login</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link ms-5" to="/dashboard">Dashboard</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link ms-5" to="/dashboard">Admin</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5" href="#">Blogs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mx-5" href="#">Contact-Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;