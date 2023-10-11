import styled from 'styled-components';

const SelectMenu = styled.select`
  padding: 16px;
  border: none;
  background-color: var(--input-color);
  border-radius: 8px;
  font-size: 16px;
  color: var(--neutral-white);
  margin: 16px 0;
  option {
    background-color: var(--background-color);
  }
  &:hover {
    background-color: var(--input-hover);
  }
`;

// eslint-disable-next-line react/prop-types
function DropdownMenu({ defaultValue, children, changeInput }) {
  return (
    <SelectMenu defaultValue={defaultValue} onChange={(event) => changeInput(event.target.value)}>
      {children}
    </SelectMenu>
  );
}

export default DropdownMenu;
