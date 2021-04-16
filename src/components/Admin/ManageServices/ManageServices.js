import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../../Dashboard/SideBar/SideBar';
import ServiceDataList from '../ServiceDataList/ServiceDataList';

const ManageServices = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='row'>
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-10 p-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB", minHeight: '100vh' }}>
                <div className="d-flex justify-content-between">
                    <div><h2 className='heading-color'>Add Services</h2></div>
                    <div><h6 className='text-color'>{loggedInUser.name}</h6></div>
                </div>
                <ServiceDataList services={services} key={services._id}></ServiceDataList>
            </div>
        </div>
    );
};

export default ManageServices;