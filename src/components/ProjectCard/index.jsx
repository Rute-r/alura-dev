import Author from '../../components/Author';
import Tab from '../../components/Tab';
import SyntaxHighlighter from 'react-syntax-highlighter';
import * as themes from 'react-syntax-highlighter/dist/esm/styles/hljs';
import styled from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  &:hover {
    .hoverCard {
      display: flex;
    }
    .hoverContent {
      border-radius: 0;
    }
  }
`;

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

  @media (max-width: 599px) {
    width: 90vw;
  }
`;

const TextHiglighted = styled(SyntaxHighlighter)`
  background-color: transparent;
  width: 98%;
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

  @media (max-width: 599px) {
    width: 90vw;
  }
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

const CardInteractions = styled.div`
  display: none;
  padding: 8px;
  justify-content: space-between;
  align-items: center;
  width: 520px;
  color: var(--white);
  background-color: var(--black-background);
  border-radius: 0 0 8px 8px;

  @media (max-width: 599px) {
    width: 90vw;
  }
`;

const Heart = styled(AiFillHeart)`
  transform: scale(1.5);
`;

const Comment = styled(FaComment)`
  transform: scale(1.5);
`;

const IconsContainer = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-around;
`;

// eslint-disable-next-line react/prop-types
function ProjectCard({ title, description, backgroundColor, theme, language, code }) {
  return (
    <Div>
      <Container $containerBackgroundColor={backgroundColor}>
        <Tab>
          <TextHiglighted language={language} style={themes[theme]}>
            {code}
          </TextHiglighted>
        </Tab>
      </Container>
      <CardContent className="hoverContent">
        <Title>{title}</Title>
        <Description>{description}</Description>
      </CardContent>
      <CardInteractions className="hoverCard">
        <IconsContainer>
          <Comment />
          <Heart />
        </IconsContainer>
        <Author />
      </CardInteractions>
    </Div>
  );
}

export default ProjectCard;
