import React from 'react';
import SideBar from '../SideBar/SideBar';
import dashboard from '../../../imgs/banner-2.jpg'
const Dashboard = () => {
    return (
        <div className='row'>
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-10">
                <img src={dashboard} alt="" className='img-fluid'/>
            </div>
        </div>
    );
};

export default Dashboard;