import styled from 'styled-components';
import author1x from '../../assets/images/author.png';

const Container = styled.div`
  width: 106px;
  padding: 12px;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 8px;
  color: var(--white);
  &:hover {
    background-color: var(--input-hover);
    border-radius: 8px;
  }
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
