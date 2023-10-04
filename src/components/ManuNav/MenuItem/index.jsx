import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkMenu = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 16px;
  margin-left: 0;
  color: ${(props) => (props.$active ? '#ffffff' : '#ffffff24')};
`;

// eslint-disable-next-line react/prop-types
function MenuItem({ to, inactiveIcon, activeIcon, children, active }) {
  return (
    <li>
      <LinkMenu to={to} $active={active}>
        <img src={active ? activeIcon : inactiveIcon} alt="" />
        {children}
      </LinkMenu>
    </li>
  );
}

export default MenuItem;
