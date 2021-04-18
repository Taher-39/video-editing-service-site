import React from 'react';

const OrdersDataList = ({orders}) => {
    const handleChange = (e) =>{
        console.log('Status: ', e.target.value)
    }
    return (
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
                                <td>
                                    <form>
                                        <select onChange={handleChange}>
                                            <option  value="Pending">
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
    );
};

export default OrdersDataList;