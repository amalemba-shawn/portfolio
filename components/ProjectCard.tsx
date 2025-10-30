import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 flex flex-col h-full animate-custom-fade-in animate-custom-scale-up">
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover object-center" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-gray-100 mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
        <div className="mb-4">
          <strong className="text-cyan-400">Technologies:</strong>
          <div className="flex flex-wrap gap-2 mt-1">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-slate-700 text-cyan-200 text-sm font-medium px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-4 mt-auto">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-slate-700 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors"
            >
              <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" className="w-5 h-5 mr-2 filter invert" />
              GitHub
            </a>
          )}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;