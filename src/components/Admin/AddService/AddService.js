import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../../Dashboard/SideBar/SideBar';

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [serviceInfo, setServiceInfo] = useState({})
    const [file, setFile] = useState(null)

    const handleBlur = e => {
        const newServiceInfo = { ...serviceInfo }
        newServiceInfo[e.target.name] = e.target.value;
        setServiceInfo(newServiceInfo)
    }
    const handleChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', file)
        formData.append('serviceTitle', serviceInfo.title)
        formData.append('servicePrice', serviceInfo.price)

        fetch('http://localhost:5000/addAService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Service Added Successfully')
                }
            })
            .catch(error => {
                console.error(error)
            })
    };
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

                <form className='p-3' onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="title">Title</label>
                        <input onBlur={handleBlur} type='text' placeholder="Service Title *" name='title' className='form-control w-50' id="title" required />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="price">Service Price</label>
                        <input onBlur={handleBlur} type='text' placeholder="Service price *" name='price' className='form-control w-50' id='price'  required />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="file">Input Service Image</label><br/>
                        <input onChange={handleChange} type='file' className='w-50' id='file' required />
                    </div>

                    <div className="form-group text-right">
                        <button className="btn color-brand text-light" type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;