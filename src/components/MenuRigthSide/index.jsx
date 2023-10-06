import supportedLanguages from 'react-syntax-highlighter/dist/cjs/languages/hljs/supported-languages';
import * as themes from 'react-syntax-highlighter/dist/esm/styles/hljs';
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
function MenuRigthSide({ changeColor, changeLanguage, changeTheme }) {
  return (
    <section>
      <MenuTitle>Seu Projeto</MenuTitle>
      <Container>
        <InputField placeholder="Nome do seu projeto" width="272px" />
        <InputField placeholder="Descrição do seu projeto" width="272px" height="80px" />
      </Container>
      <MenuTitle>Personalização</MenuTitle>
      <Container>
        <DropdownMenu defaultValue="javascript" name="languages" changeInput={changeLanguage}>
          {supportedLanguages.map((language) => (
            <option key={language}>{language}</option>
          ))}
        </DropdownMenu>
        <DropdownMenu defaultValue="dracula" name="themes" changeInput={changeTheme}>
          {Object.keys(themes).map((theme, i) => (
            <option key={i}>{theme}</option>
          ))}
        </DropdownMenu>
        <ColorPicker changeColor={changeColor} />
      </Container>
      <Button size="274px" color="black" backgroundColor="#5081fb">
        Salvar Projeto
      </Button>
    </section>
  );
}

export default MenuRigthSide;
