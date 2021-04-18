import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import SideBar from '../SideBar/SideBar';
import PaymentProcess from '../../PaymentProcess/PaymentProcess';

const Book = () => {
    const {id} = useParams()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [serviceDetails, setServiceDetails] = useState({})
    const { title, price } = serviceDetails;

    useEffect(() => {
        fetch('https://aqueous-hollows-66826.herokuapp.com/service/' + id)
            .then(res => res.json())
            .then(data => {
                setServiceDetails(data)
            })
    }, [id])
    const handleOrder = () => {
        const newBooking = { ...loggedInUser, serviceTitle: title, servicePrice: price, bookingTime: new Date(), status: "pending" };
        const url = `https://aqueous-hollows-66826.herokuapp.com/bookingOrder`;
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newBooking)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert(' Order Confirm Successfully...Check Booking Page')
                }
            })
    }
    return (
        <div className="row">
            <div className="col-md-2">
                    <SideBar></SideBar>
            </div>
            <div className="col-md-10 p-4 ml-3" style={{ position: "absolute", right: 0, minHeight: '100vh' }}>
                <div className='book-service'>
                    <div className='d-flex justify-content-evenly p-3'>
                        <div>
                            <ul>
                                <li>
                                    <Link to="/" className="text-color">
                                        <span className='btn color-brand'><FontAwesomeIcon icon={faHome} /> Home</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <h1 className='text-center text-color'>Hi..{loggedInUser.name}</h1>

                    </div>
                    <div className="p-5">
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th className="text-color" scope="col">Image</th>
                                    <th className="text-color" scope="col">Service Name</th>
                                    <th className="text-color" scope="col">Service Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img style={{ width: '50px' }} src={`data:image/jpeg;base64,${serviceDetails?.image?.img}`} alt="" /></td>
                                    <td>{title}</td>
                                    <td>${price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="payment">
                    <h3 className='text-color'>Payment With Card</h3>
                    <PaymentProcess></PaymentProcess>
                    <button className='btn color-brand text-light' onClick={handleOrder}>Confirm Order</button>
                </div>
            </div>
            
        </div>
        
    );
};

export default Book;