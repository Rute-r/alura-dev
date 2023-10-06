import styled from 'styled-components';
import { GoDotFill } from 'react-icons/go';
import Button from '../../components/Button';
import SyntaxHighlighter from 'react-syntax-highlighter';
import * as themes from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useState } from 'react';

const Container = styled.div`
  width: 752px;
  height: 366px;
  background-color: ${(props) => props.$containerBackgroundColor};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Tab = styled.div`
  border: none;
  border-radius: 8px;
  width: 688px;
  height: 312px;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  background-color: var(--black);
`;

const GoDotFillRed = styled(GoDotFill)`
  color: red;
`;

const GoDotFillYellow = styled(GoDotFill)`
  color: yellow;
`;

const GoDotFillGreen = styled(GoDotFill)`
  color: green;
`;

const Code = styled.textarea`
  color: var(--white);
  font-family: var(--code-font);
  background-color: var(--black);
  width: 670px;
  height: 270px;
  border: none;
  resize: none;
`;

const DotContainer = styled.div`
  background-color: transparent;
  width: 200px;
`;

const TextHiglighted = styled(SyntaxHighlighter)`
  background-color: transparent;
  width: 670px;
  height: 280px;
`;

// eslint-disable-next-line react/prop-types
function CodeEditor({ containerBackgroundColor, changeText, language, text, theme }) {
  const [active, setActive] = useState(false);

  function handleClickButton() {
    setActive(!active);
  }

  return (
    <section>
      <Container $containerBackgroundColor={containerBackgroundColor}>
        <Tab>
          <DotContainer>
            <GoDotFillRed />
            <GoDotFillYellow />
            <GoDotFillGreen />
          </DotContainer>

          {active ? (
            <Code onChange={(event) => changeText(event.target.value)} value={text}></Code>
          ) : (
            <TextHiglighted language={language} style={themes[theme]}>
              {text}
            </TextHiglighted>
          )}
        </Tab>
      </Container>

      <Button
        backgroundColor="#5081fb10"
        color="var(--neutral-white)"
        size="752px"
        changeText={handleClickButton}>
        {active ? 'Visualizar com o highlight' : 'Editar código'}
      </Button>
    </section>
  );
}

export default CodeEditor;
