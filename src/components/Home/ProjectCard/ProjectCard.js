import React from 'react';

const ProjectCard = ({project}) => {
    return (
        <div className="col-md-4 col-sm-12 d-flex justify-content-center my-4" style={{height: '100%'}}>
            <div className='shadow'>
                <img style={{ height: '300px', width: '100%' }} src={project.img} alt="" />
                <div className="description text-center p-3 text-color">
                    <h4>{project.category}</h4>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;