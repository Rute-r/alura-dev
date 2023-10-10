import Tab from '../../components/Tab';
import SyntaxHighlighter from 'react-syntax-highlighter';
import * as themes from 'react-syntax-highlighter/dist/esm/styles/hljs';
import styled from 'styled-components';

const Container = styled.div`
  width: 520px;
  height: 288px;
  padding: 24px;
  background-color: ${(props) => props.$containerBackgroundColor};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TextHiglighted = styled(SyntaxHighlighter)`
  background-color: transparent;
  width: 452px;
  height: 210px;
  border-radius: 8px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px;
  width: 520px;
  height: 112px;
  color: var(--white);
  background-color: var(--black-background);
  border-radius: 0 0 8px 8px;
`;

const Title = styled.h2`
  font-size: var(--title-font-size);
  line-height: var(--title-line-height);
`;

const Description = styled.p`
  color: var(--neutral-white);
  font-size: var(--body-font-size);
  line-height: var(--body-line-height);
`;

// eslint-disable-next-line react/prop-types
function ProjectCard({ title, description, backgroundColor, theme, language, code }) {
  return (
    <div>
      <Container $containerBackgroundColor={backgroundColor}>
        <Tab>
          <TextHiglighted language={language} style={themes[theme]}>
            {code}
          </TextHiglighted>
        </Tab>
      </Container>
      <CardContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </CardContent>
    </div>
  );
}

export default ProjectCard;
