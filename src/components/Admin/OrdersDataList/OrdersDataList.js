import React, { useState } from 'react';

const OrdersDataList = ({orders}) => {
    const [bookingProduct, setBookingProduct] = useState({})
    const [updateDisplay, setUpdateDisplay] = useState(false)
    const [newStatus, setNewStatus] = useState(null)

    const handleUpdate = (id) =>{
        setUpdateDisplay(true)
        fetch(`http://localhost:5000/updateBooking/${id}`)
        .then(res => res.json())
            .then(data => {
                setBookingProduct(data)
            })
    }
    const handleChange = (e) => {
        const id = bookingProduct._id;
        const changeStatus = { status: e.target.value, id}
        setNewStatus(changeStatus)
        fetch(`http://localhost:5000/updateStatus/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(changeStatus)
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
            {updateDisplay === true ? <div className="update-product bg-light p-3 my-3 rounded shadow">
                <label htmlFor="status">Status-of: {bookingProduct._id}</label>
                <input className='form-control w-25' type="text" name="status" id="status" value={bookingProduct.status} />
                <input className='form-control w-25' type="text" name="status" id="status" value={bookingProduct.name} />
                <button className='btn btn-secondary mt-2'>Submit</button>
            </div> : null}
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