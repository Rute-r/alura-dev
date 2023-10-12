import { Outlet } from 'react-router';
import MenuNav from '../../components/MenuNav';
import Header from '../../components/Header';
import styled from 'styled-components';
import Media from 'react-media';
import { Fragment } from 'react';

const Container = styled.main`
  display: flex;
  width: 80vw;
  margin: auto;
  justify-content: space-between;

  @media (max-width: 1199px) {
    flex-direction: column;
  }

  @media (max-width: 599px) {
    width: 100vw;
    align-items: center;
  }
`;

function DefaultPage() {
  return (
    <main>
      <Header />
      <Container>
        <Media
          queries={{
            medium: '(max-width: 1199px)',
          }}>
          {(matches) => <Fragment>{matches.medium ? '' : <MenuNav />}</Fragment>}
        </Media>
        <Outlet />
      </Container>
    </main>
  );
}

export default DefaultPage;
