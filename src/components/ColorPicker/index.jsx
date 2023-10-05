import styled from 'styled-components';

const InputColor = styled.input`
  padding: 5px;
  border: 1px solid var(--white);
  width: 272px;
  height: 50px;
  background-color: transparent;
  border-radius: 8px;
  font-size: 16px;
  color: var(--white);
`;

// eslint-disable-next-line react/prop-types
function ColorPicker({ changeColor }) {
  return (
    <>
      <InputColor type="color" onChange={(event) => changeColor(event.target.value)} />
    </>
  );
}

export default ColorPicker;