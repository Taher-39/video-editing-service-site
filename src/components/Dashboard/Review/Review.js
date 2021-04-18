import React from 'react';
import { useForm } from "react-hook-form";
import SideBar from '../SideBar/SideBar';
const Review = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        data.issueDate = new Date();
        fetch('https://aqueous-hollows-66826.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Your review added Successfully')
                }
            })
    };
    return (
        <div className="row" >
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-10 p-4 ml-3" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB", minHeight: '100vh' }}>
                <h5 className="text-color">Review</h5>
                <div className="p-3">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-3">
                            <input placeholder="Your Name *" name='name' className='form-control w-50' {...register("name", { required: true })} />
                            {errors.name && <span className='text-danger'>This field is required</span>}
                        </div>

                        <div className="form-group mb-3">
                            <input placeholder="Company's name, Designation" name='company' className='form-control w-50' {...register("company", { required: true })} />
                            {errors.company && <span className='text-danger'>This field is required</span>}
                        </div>
                        
                        <div className="form-group mb-3">
                            <textarea placeholder="Description" name='description' className='form-control w-50' cols="10" rows='5' {...register("description", { required: true })} />
                            {errors.description && <span className='text-danger'>This field is required</span>}
                        </div>
                        <div className="form-group text-right">
                            <button className="btn color-brand text-light" type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;