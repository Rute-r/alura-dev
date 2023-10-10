import styled from 'styled-components';
import Button from '../../components/Button';
import SyntaxHighlighter from 'react-syntax-highlighter';
import * as themes from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useState } from 'react';
import Tab from '../../components/Tab';

const Container = styled.div`
  width: 752px;
  height: 366px;
  padding: 32px;
  background-color: ${(props) => props.$containerBackgroundColor};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Code = styled.textarea`
  color: var(--white);
  font-family: var(--code-font);
  background-color: var(--black);
  width: 99%;
  height: 90%;
  border: none;
  resize: none;
`;

const TextHiglighted = styled(SyntaxHighlighter)`
  background-color: transparent;
  width: 99%;
  height: 90%;
  border-radius: 8px;
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
        handleClick={handleClickButton}>
        {active ? 'Visualizar com o highlight' : 'Editar código'}
      </Button>
    </section>
  );
}

export default CodeEditor;
