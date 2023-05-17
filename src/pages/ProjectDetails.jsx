import React from 'react';
import { useParams } from 'react-router-dom';
import Projects from '../components/Projects'


function ProjectDetails() {
  const { id } = useParams();
  const projectId = parseInt(id, 10);
  const projectData = Projects.find(project => project.id === projectId);


  if (!projectData) {
    return <div>Project not found.</div>;
  }

  return (
    <div className='project-detail'>
      <div className='project-card'>
      <h2>{projectData.name}</h2>
      <img src={projectData.img} alt={projectData.name} />
      <div className='detail-info grid grid-cols-1 gap-4 py-5 sm:grid-cols-2 md:grid-cols-3'>
        <div className='project-info'>
        <p className='header'>Project Infooooooo:</p>
        </div>
        <div className='project-tech'>
        <p className='header'>Project Technologies:</p>
        </div>
      <div className='detail-link w-1/2'>
      <p className='rounded-r-lg py-1 m-2'>
         <a href={projectData.linkDemo}>Demo</a>
      </p>
      <p className='rounded-r-lg py-1 m-2'>
        <a href={projectData.linkCode}>Code </a>
      </p>
      </div>
      </div>
      </div>
    </div>
  );
}

export default ProjectDetails;