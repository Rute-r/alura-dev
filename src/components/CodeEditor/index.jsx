import styled from 'styled-components';
import { GoDotFill } from 'react-icons/go';
import Button from '../../components/Button';

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

const Code = styled.code`
  color: var(--white);
  font-family: var(--code-font);
`;

const DotContainer = styled.div`
  width: 200px;
`;

// eslint-disable-next-line react/prop-types
function CodeEditor({ containerBackgroundColor }) {
  return (
    <section>
      <Container $containerBackgroundColor={containerBackgroundColor}>
        <Tab>
          <DotContainer>
            <GoDotFillRed />
            <GoDotFillYellow />
            <GoDotFillGreen />
          </DotContainer>
          <Code contentEditable></Code>
        </Tab>
      </Container>

      <Button backgroundColor="#5081fb10" color="var(--neutral-white)" size="752px">
        Visualizar com o highlight
      </Button>
    </section>
  );
}

export default CodeEditor;
