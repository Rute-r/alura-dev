import MenuNav from '../../components/MenuNav';
import { useState } from 'react';
import styled from 'styled-components';

const MenuLabel = styled.label`
  /* position: fixed; */
  cursor: pointer;
  z-index: 1000;
  text-align: center;
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.$clicked ? 'transparent' : 'var(--white)')};
  width: 25px;
  height: 3px;
  display: inline-block;
  margin-top: 1rem;
  transition: all 0.3s;
  &::before,
  &::after {
    content: '';
    background-color: var(--white);
    width: 25px;
    height: 3px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.$clicked ? '0' : '-0.8rem')};
    transform: ${(props) => (props.$clicked ? 'rotate(135deg)' : 'rotate(0)')};
  }
  &::after {
    top: ${(props) => (props.$clicked ? '0' : '0.8rem')};
    transform: ${(props) => (props.$clicked ? 'rotate(-135deg)' : 'rotate(0)')};
  }
`;

const NavBackground = styled.div`
  position: absolute;
  top: 6.5rem;
  right: 3rem;
  padding: 8px;
  background-color: #2d415b;
  height: 80%;
  width: 254px;
  border-radius: 8px;

  transform: ${(props) => (props.$clicked ? 'scale(1)' : 'scale(0)')};
  transition: transform 0.8s;
`;

function BurgerMenu() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div>
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon $clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <NavBackground $clicked={click}>
        <MenuNav />
      </NavBackground>
    </div>
  );
}

export default BurgerMenu;
