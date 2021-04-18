import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../../Dashboard/SideBar/SideBar';
import OrdersDataList from '../OrdersDataList/OrdersDataList';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/totalOrders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <section className='row'>
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-10 p-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB", minHeight: '100vh' }}>
                <div className="d-flex justify-content-between">
                    <div><h2 className='heading-color'>Total Orders Services</h2></div>
                    <div><h6 className='text-color'>Welcome as a Admin {loggedInUser.name}</h6></div>
                </div>
                <OrdersDataList orders={orders}></OrdersDataList>
            </div>
        </section>
    );
};

export default Orders;