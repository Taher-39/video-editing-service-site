import React from 'react';
import './ContactUs.css'
const ContactUs = () => {
    return (
        <section className='contact-us py-5'>
            <div className="container">
                <div className="section-header text-center text-white mb-5">
                    <h5 className="extra-text-color pt-3">Contact</h5>
                    <h1>Always  connect with us</h1>
                </div>
                <div className="col-md-9 mx-auto">
                    <form action="">
                        <div className="form-group pb-3">
                            <input type="text" className="form-control" placeholder="Email Address " />
                        </div>
                        <div className="form-group pb-3">
                            <input type="text" className="form-control" placeholder="Subject " />
                        </div>
                        <div className="form-group pb-3">
                            <textarea name="msg" className="form-control" id="" cols="30" rows="10" placeholder="Message "></textarea>
                        </div>
                        <div className="form-group text-center">
                            <button type="button" className="btn color-brand text-light"> Submit </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;