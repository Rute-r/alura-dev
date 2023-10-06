import MenuTitle from '../../components/MenuTitle';
import styled from 'styled-components';
import MenuItem from './MenuItem';
import { useLocation } from 'react-router';

const Ul = styled.ul`
  list-style: none;
`;

function MenuNav() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');

  return (
    <aside>
      <MenuTitle>Menu</MenuTitle>
      <nav>
        <Ul>
          <MenuItem
            activeIcon="../icons/editor-active.png"
            inactiveIcon="../icons/editor.png"
            active={splitLocation[1] === '' ? true : false}
            to="/">
            Editor de código
          </MenuItem>
          <MenuItem
            activeIcon="../icons/comunidade-active.png"
            inactiveIcon="../icons/comunidade.png"
            active={splitLocation[1] === 'comunidade' ? true : false}
            to="/comunidade">
            Comunidade
          </MenuItem>
        </Ul>
      </nav>
    </aside>
  );
}

export default MenuNav;
