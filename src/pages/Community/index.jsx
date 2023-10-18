/* eslint-disable react/prop-types */
import styled from 'styled-components';
import ProjectCard from '../../components/ProjectCard';
// import { useState } from 'react';
// import projectJSON from '../../project.json';

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 32px;

  @media (max-width: 599px) {
    justify-content: center;
  }
`;

function Community({ projects }) {
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
