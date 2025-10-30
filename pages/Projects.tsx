import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 min-h-[calc(100vh-160px)]">
      <SectionTitle title="My Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;