import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import TvcImg from '../../../imgs/pjt1.jpg';
import PromosImg from '../../../imgs/pjt2.jpg';
import ytImg from '../../../imgs/pjt3.jpg';

const projectsData = [
    {
        id:1,
        name: 'TVC For Great Company',
        category:'Convert Article To Video',
        img: TvcImg
    },
    {
        id:2,
        name: 'Animation Video',
        category:'Ads, Promos & Social Media',
        img: PromosImg
    },
    {
        id:3,
        name: 'Great Learning Video',
        category:'YouTube',
        img: ytImg
    }
    
]
const Projects = () => {
    return (
        <section className='container mt-5'>
            <div className="project-heading text-center">
                <h6 className='text-color'>Projects</h6>
                <h1 className='heading-color'>Recent Projects We Have Done.</h1>
            </div>
            <div className="row">
                {
                    projectsData.map(project => <ProjectCard project={project} key={project.id}></ProjectCard>)
                }
            </div>
        </section>
    );
};

export default Projects;