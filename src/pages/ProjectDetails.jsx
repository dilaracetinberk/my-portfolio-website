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
      <img src={projectData.img} alt={projectData.name} className='detail-img'/>
      <div className='detail-info grid grid-cols-1 gap-4 py-5 px-5 lg:grid-cols-3 shadow-md mt-5'>
        <div className='project-info'>
        <p className='header'>Project Information:</p>
        <p className='text-justify max-w-xs m-auto lg:max-w-s'>{projectData.projectInfo}</p>
        </div>
        <div className='project-tech flex flex-col'>
        <p className='header'> Technologies:</p>
        <ul className='list-disc mx-auto text-justify '>
        {projectData.projectTech.map((tech) => (
          <li key={projectData.id}>{tech}</li>
        ))}
      </ul>
        </div>
      <div className='detail-link '>
      <p className='rounded-r-lg py-1 m-2 resume-button max-w-xs'>
         <a href={projectData.linkDemo}>Demo</a>
      </p>
      <p className='rounded-r-lg py-1 m-2 resume-button max-w-xs'>
        <a href={projectData.linkCode}>Code </a>
      </p>
      </div>
      </div>
      </div>
    </div>
  );
}

export default ProjectDetails;