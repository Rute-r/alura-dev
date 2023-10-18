/* eslint-disable react/prop-types */
import styled from 'styled-components';

const Input = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 16px;
  border: none;
  background-color: var(--input-color);
  border-radius: 8px;
  font-size: 16px;
  color: var(--neutral-white);
  margin: 8px 0;
  &:hover {
    background-color: var(--input-hover);
  }

  @media (max-width: 1199px) {
    width: auto;
  }
`;

function InputField({ placeholder, width, height, type = 'text', changeInput }) {
  return (
    <>
      <Input
        placeholder={placeholder}
        width={width}
        height={height}
        type={type}
        onChange={(event) => changeInput(event.target.value)}
      />
    </>
  );
}

export default InputField;
