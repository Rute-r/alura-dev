import styled from 'styled-components';
import author1x from '../../assets/images/author.png';

const Container = styled.div`
  width: 215px;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 8px;
  color: var(--white);
`;

function Author() {
  return (
    <Container>
      <img src={author1x} alt="Imagem do autor do codigo" />
      <p>Harry</p>
    </Container>
  );
}

export default Author;
