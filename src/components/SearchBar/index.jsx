import styled from 'styled-components';

const Input = styled.input`
  width: 724px;
  padding: 16px;
  border: none;
  background-color: var(--input-color);
  border-radius: 8px;
  font-size: 16px;
  color: var(--white);
`;

function SearchBar() {
  return (
    <>
      <Input type="text" placeholder="Busque por algo" />
    </>
  );
}

export default SearchBar;
