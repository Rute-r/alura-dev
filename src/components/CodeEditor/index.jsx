import styled from 'styled-components';
import { GoDotFill } from 'react-icons/go';
import Button from '../../components/Button';

const Container = styled.div`
  width: 752px;
  height: 366px;
  background-color: var(--blue-strong);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Tab = styled.div`
  background-color: var(--black);
  border: none;
  border-radius: 8px 8px 0 0;
  width: 688px;
  height: 35px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const GoDotFillRed = styled(GoDotFill)`
  color: red;
  transform: scale(1.5);
  background-color: transparent;
`;

const GoDotFillYellow = styled(GoDotFill)`
  color: yellow;
  transform: scale(1.5);
  background-color: transparent;
`;

const GoDotFillGreen = styled(GoDotFill)`
  color: green;
  transform: scale(1.5);
  background-color: transparent;
`;

const TextArea = styled.textarea`
  background-color: var(--black);
  border: none;
  border-radius: 0 0 8px 8px;
  width: 688px;
  height: 272px;
  color: var(--white);
  resize: none;
`;

function CodeEditor() {
  return (
    <section>
      <Container>
        <Tab>
          <GoDotFillRed />
          <GoDotFillYellow />
          <GoDotFillGreen />
        </Tab>
        <TextArea></TextArea>
      </Container>

      <Button backgroundColor="#5081fb10" color="#ffffff" size="752px">
        Visualizar com o highlight
      </Button>
    </section>
  );
}

export default CodeEditor;
