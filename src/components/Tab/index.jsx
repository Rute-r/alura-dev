import styled from 'styled-components';
import { GoDotFill } from 'react-icons/go';

const TabStyled = styled.div`
  border: none;
  border-radius: 8px;
  width: 100%;
  height: 100%;
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

const DotContainer = styled.div`
  background-color: transparent;
  width: 200px;
`;

// eslint-disable-next-line react/prop-types
function Tab({ children }) {
  return (
    <TabStyled>
      <DotContainer>
        <GoDotFillRed />
        <GoDotFillYellow />
        <GoDotFillGreen />
      </DotContainer>
      {children}
    </TabStyled>
  );
}

export default Tab;
