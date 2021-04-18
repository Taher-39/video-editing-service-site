import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/bookingList?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [])
    return (
        <div className="row" >
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-10 p-4 ml-3" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB", minHeight: '100vh' }}>
                
                <div className="d-flex justify-content-between">
                    {/* <div className='d-none d-sm-block '>
                        <ul>
                            <li>
                                <Link to="/" className="text-color">
                                    <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                                </Link>
                            </li>
                        </ul>
                    </div> */}
                    <div><h2 className='heading-color'>Booking List</h2></div>
                    <div><h6 className='heading-color'>Total Booking {bookings.length}</h6></div>
                    <div><h6 className='text-color'>{loggedInUser.name}</h6></div>
                </div>
                <div className="row">
                    {
                        bookings.map(book =>
                            <div key={book._id} className="col-md-4 col-sm-12 d-flex justify-content-center my-4">
                                <div className="service-card p-3 shadow bg-light">
                                    <div className='d-flex flex-row-reverse'>
                                        <span className='btn color-brand'>Pending</span>
                                    </div>
                                    <div className="text-center p-3 text-color">
                                        <h3>${book.servicePrice}</h3>
                                        <h4>{book.serviceTitle}</h4>
                                    </div>
                                </div>
                            </div> 
                    )}
                </div>
            </div>    
        </div>
    );
};

export default BookingList;