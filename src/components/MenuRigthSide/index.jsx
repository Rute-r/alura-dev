import InputField from '../InputField';
import MenuTitle from '../../components/MenuTitle';
import styled from 'styled-components';
import DropdownMenu from '../../components/DropdownMenu';
import ColorPicker from '../../components/ColorPicker';
import Button from '../../components/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// eslint-disable-next-line react/prop-types
function MenuRigthSide({ changeColor }) {
  return (
    <section>
      <MenuTitle>Seu Projeto</MenuTitle>
      <Container>
        <InputField placeholder="Nome do seu projeto" width="272px" />
        <InputField placeholder="Descrição do seu projeto" width="272px" height="80px" />
      </Container>
      <MenuTitle>Personalização</MenuTitle>
      <Container>
        <DropdownMenu />
        <ColorPicker changeColor={changeColor} />
      </Container>
      <Button size="274px" color="black" backgroundColor="#5081fb">
        Salvar Projeto
      </Button>
    </section>
  );
}

export default MenuRigthSide;
