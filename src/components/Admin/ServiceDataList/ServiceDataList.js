import React from 'react';

const ServiceDataList = ({ services }) => {
    const handlePdDelete = (id) => {
        fetch(`https://aqueous-hollows-66826.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('product deleted')
                }
            })
    }
    return (
        <div className="bg-light p-3 rounded shadow mt-3">
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th className="text-color text-left" scope="col">Sr No</th>
                        <th className="text-color" scope="col">Service Name</th>
                        <th className="text-color" scope="col">Service Price</th>
                        <th className="text-color" scope="col">Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map((service, index) =>

                            <tr key={service._id}>
                                <td>{index + 1}</td>
                                <td>{service.title}</td>
                                <td>$ {service.price}</td>
                                <td><button className='btn btn-danger' onClick={() => handlePdDelete(service._id)}>✖</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ServiceDataList;