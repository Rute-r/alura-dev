import styled from 'styled-components';
import ProjectCard from '../../components/ProjectCard';
import { useState } from 'react';

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

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
    <Container>
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
    </Container>
  );
}

export default Community;
