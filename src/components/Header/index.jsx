import styled from 'styled-components';
import logo from '../../assets/images/logo.png';
import SearchBar from '../../components/SearchBar';
import Author from '../../components/Author';
import BurgerMenu from '../../components/BurgerMenu';
import Media from 'react-media';
import { Fragment } from 'react';

const HeaderContainer = styled.header`
  width: 80vw;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

const LogoContainer = styled.div`
  width: 145px;
  height: 50px;
`;

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={logo} alt="Logo alura dev" />
      </LogoContainer>
      <SearchBar />
      <Media
        queries={{
          small: '(max-width: 599px)',
          medium: '(min-width: 600px) and (max-width: 1199px)',
          large: '(min-width: 1200px)',
        }}>
        {(matches) => (
          <Fragment>
            {matches.small && <p>I am small!</p>}
            {matches.medium && <BurgerMenu />}
            {matches.large && <Author />}
          </Fragment>
        )}
      </Media>
    </HeaderContainer>
  );
}

export default Header;
