import styled from 'styled-components';

const Title = styled.h2`
  font-size: var(--sidebar-title-font-size);
  line-height: var(--sidebar-title-line-height);
  letter-spacing: 4.8px;
  text-transform: uppercase;
  color: var(--white);
`;

// eslint-disable-next-line react/prop-types
function MenuTitle({ children }) {
  return <Title>{children}</Title>;
}

export default MenuTitle;
