import ProjectCard from '../../components/ProjectCard';
import { useState } from 'react';

function Community() {
  const [projects, setProjects] = useState([
    {
      title: 'Meu projeto',
      description: 'Este é o meu projeto',
      backgroundColor: '#5081fb',
      theme: 'dracula',
      language: 'javascript',
      code: 'const myConst = 2;',
    },
  ]);

  return (
    <>
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          backgroundColor={project.backgroundColor}
          code={project.code}
          description={project.description}
          title={project.title}
          language={project.language}
          theme={project.theme}></ProjectCard>
      ))}
    </>
  );
}

export default Community;
