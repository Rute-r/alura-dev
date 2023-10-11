import styled from 'styled-components';
import logo from '../../assets/images/logo.png';
import SearchBar from '../../components/SearchBar';
import Author from '../../components/Author';

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
      <Author />
    </HeaderContainer>
  );
}

export default Header;
