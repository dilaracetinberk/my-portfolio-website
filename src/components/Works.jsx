import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Projects from './Projects';

function Works() {
  return (
    <div className="my-work" id="projects">
      <h2 className="section-title">My Work</h2>
      <div className="portfolio">
        {Projects.map((project) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 1.0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            key={project.id} 
          >
            <div className="portfolio-item">
              <Link
                to={{
                  pathname: `/projects/${project.id}`,
                  state: { projectData: project },
                }}
              >
                <img src={project.img} alt={project.name} className="portfolio-img" />
                <div className="project-section text-center w-full">
                  <div className="project-title font-bold pb-4">{project.name}</div>
                  <div className="project-link">
                    <a href={project.linkCode}>
                      <button type="button" className="font-semibold rounded-lg text-center mr-2 mb-2">
                        CODE
                      </button>
                    </a>
                    <span> | </span>
                    <a href={project.linkDemo}>
                      <button type="button" className="font-semibold rounded-lg text-center mr-2 mb-2">
                        DEMO
                      </button>
                    </a>
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Works;