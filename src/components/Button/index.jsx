/* eslint-disable react/prop-types */
import styled from 'styled-components';

const ButtonStyled = styled.button`
  width: ${(props) => props.$size};
  height: 56px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.$backgroundColor};
  border: none;
  border-radius: 8px;
  font-size: 16px;
  margin: 16px 0;
  cursor: pointer;
  &:active {
    border: 3px solid var(--blue-light);
  }
  &:hover {
    background-color: ${(props) => props.$backgroundHover};
  }
`;

function Button({ children, size, color, backgroundColor, backgroundHover, handleClick }) {
  return (
    <>
      <ButtonStyled
        $size={size}
        color={color}
        $backgroundColor={backgroundColor}
        $backgroundHover={backgroundHover}
        onClick={handleClick}>
        {children}
      </ButtonStyled>
    </>
  );
}

export default Button;
