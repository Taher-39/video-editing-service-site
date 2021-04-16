import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';

const Book = () => {
    const {id} = useParams()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [serviceDetails, setServiceDetails] = useState({})
    const { title, price } = serviceDetails;
    useEffect(() => {
        fetch('http://localhost:5000/service/' + id)
            .then(res => res.json())
            .then(data => {
                setServiceDetails(data)
                console.log(data)
            })
    }, [id])
    const handleOrder = (id) => {
        alert(id)
    }
    return (
        <div className='book-service bg-light' style={{minHeight: '100vh'}}>
            <h1 className='text-center text-color'>Hi..{loggedInUser.name}</h1>
            <div className="p-5">
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            {/* <th className="text-color" scope="col">Image</th> */}
                            <th className="text-color" scope="col">Service Name</th>
                            <th className="text-color" scope="col">Service Price</th>
                            <th className="text-color" scope="col">Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* <td><img style={{ width: '50px' }} src={`data:image/jpeg;base64,${serviceDetails.image.img}`} alt="" /></td> */}
                            <td>{title}</td>
                            <td>${price}</td>
                            <td><button className='btn color-brand text-light' onClick={() => handleOrder(id)}>Confirm Order</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Book;