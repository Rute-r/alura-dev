import { Outlet } from 'react-router';
import MenuNav from '../../components/ManuNav';
import Header from '../../components/Header';
import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  width: 80vw;
  margin: auto;
  justify-content: space-between;
`;

function DefaultPage() {
  return (
    <main>
      <Header />
      <Container>
        <MenuNav />
        <Outlet />
      </Container>
    </main>
  );
}

export default DefaultPage;
