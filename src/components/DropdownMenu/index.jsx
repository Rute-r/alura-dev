import styled from 'styled-components';

const languages = [{ name: 'JavaScript' }, { name: 'HTML' }, { name: 'CSS' }];

const SelectMenu = styled.select`
  padding: 16px;
  border: none;
  background-color: var(--input-color);
  border-radius: 8px;
  font-size: 16px;
  color: var(--white);
  margin: 16px 0;
`;

function DropdownMenu() {
  return (
    <SelectMenu>
      {languages.map((language) => (
        <option key={language.name}>{language.name}</option>
      ))}
    </SelectMenu>
  );
}

export default DropdownMenu;
