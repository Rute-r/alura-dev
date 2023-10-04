import MenuTitle from '../../components/MenuTitle';
import styled from 'styled-components';
import MenuItem from './MenuItem';

const Nav = styled.nav``;
const Ul = styled.ul`
  list-style: none;
`;

function MenuNav() {
  return (
    <aside>
      <MenuTitle>Menu</MenuTitle>
      <Nav>
        <Ul>
          <MenuItem
            activeIcon="../src/assets/icons/editor-active.png"
            inactiveIcon="../src/assets/icons/editor.png"
            active={true}
            to="/">
            Editor de código
          </MenuItem>
          <MenuItem
            activeIcon="../src/assets/icons/comunidade-active.png"
            inactiveIcon="../src/assets/icons/comunidade.png"
            to="/comunidade"
            active={false}>
            Comunidade
          </MenuItem>
        </Ul>
      </Nav>
    </aside>
  );
}

export default MenuNav;
