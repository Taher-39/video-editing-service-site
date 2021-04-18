import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import SideBar from '../../Dashboard/SideBar/SideBar';

const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.issueDate = new Date();
        fetch('https://aqueous-hollows-66826.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('New Admin added Successfully')
                }
            })
    };
    return (
        <section className='row'>
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-10 p-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB", minHeight: '100vh' }}>
                <div className="d-flex justify-content-around mb-3">
                    <div><h2 className='heading-color'>Make Admin Page</h2></div>
                    <div><h6 className='text-color'>Welcome As Our Admin {loggedInUser.name}</h6></div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-3">
                        <input placeholder="Admin email " name='email' className='form-control w-50' {...register("email", { required: true })} />
                        {errors.email && <span className='text-danger'>This field is required</span>}
                    </div>
                    <div className="form-group text-right">
                        <button className="btn color-brand text-light" type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default MakeAdmin;