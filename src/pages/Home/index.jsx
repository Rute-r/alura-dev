import MenuNav from '../../components/ManuNav';
import Header from '../../components/Header';
import styled from 'styled-components';

const Main = styled.main`
  width: 90vw;
  margin: auto;
`;

function Home() {
  return (
    <>
      <Header />
      <Main>
        <MenuNav />
      </Main>
    </>
  );
}

export default Home;
