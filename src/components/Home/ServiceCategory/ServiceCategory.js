import React from 'react';
import { useHistory } from 'react-router';
import { useSpring, animated } from 'react-spring'
import './ServiceCategory.css';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const ServiceCategory = ({ service }) => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    const history = useHistory()
    const handleService = (id) => {
        history.push(`/service/${id}`)
    };
    return (
        <div className="col-md-4 col-sm-12 d-flex justify-content-center my-4">
            <animated.div onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }} className="service-card p-3 shadow bg-light">
                <div className="text-center">
                    <img style={{ width: '80px' }} src={`data:image/jpeg;base64,${service.image.img}`} alt="" />
                </div>
                <div className="text-center p-3 text-color">
                    <h3>${service.price}</h3>
                    <h4>{service.title}</h4>
                    <button className="btn color-brand shadow" onClick={() => handleService(service._id)}>Explore More</button>
                </div>
            </animated.div>
        </div>
    );
};

export default ServiceCategory;