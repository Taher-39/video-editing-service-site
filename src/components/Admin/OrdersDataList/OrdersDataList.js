import React, { useState } from 'react';

const OrdersDataList = ({orders}) => {
    const [bookingProduct, setBookingProduct] = useState({})
    const [newStatus, setNewStatus] = useState(null)

    const handleUpdate = (id) =>{
        fetch(`https://aqueous-hollows-66826.herokuapp.com/updateBooking/${id}`)
        .then(res => res.json())
            .then(data => {
                setBookingProduct(data)
            })
    }
    const handleChange = (e) => {
        const id = bookingProduct._id;
        const changeStatus = { status: e.target.value, id}
        setNewStatus(changeStatus)
        fetch(`https://aqueous-hollows-66826.herokuapp.com/updateStatus/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newStatus)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Status Changes Successfully')
                }
            })
    }
    return (
        <div >
            <div className='bg-light p-3 mt-3 rounded shadow'>
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th className="text-color text-left" scope="col">Sr No</th>
                            <th className="text-color" scope="col">Customer Name</th>
                            <th className="text-color" scope="col">Email-ID</th>
                            <th className="text-color" scope="col">Service</th>
                            <th className="text-color" scope="col">Order-Date</th>
                            <th className="text-color" scope="col">Status</th>
                            <th className="text-color" scope="col">Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>

                                <tr key={order._id}>
                                    <td>{index + 1}</td>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.serviceTitle}</td>
                                    <td>{order.bookingTime}</td>
                                    <td>{order.status}</td>
                                    <td onChange={() => handleUpdate(order._id)}>
                                        <form>
                                            <select onChange={handleChange}>
                                                <option value="Pending">
                                                    Pending
                                            </option>
                                                <option value="Processing">
                                                    Processing
                                            </option>
                                                <option value="Done">
                                                    Done
                                            </option>
                                            </select>
                                        </form>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrdersDataList;