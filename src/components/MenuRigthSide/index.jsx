/* eslint-disable react/prop-types */
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

function MenuRigthSide({
  changeColor,
  changeLanguage,
  changeTheme,
  saveProject,
  changeDescription,
  changeTitle,
}) {
  return (
    <section>
      <MenuTitle>Seu Projeto</MenuTitle>
      <Container>
        <InputField placeholder="Nome do seu projeto" width="272px" changeInput={changeTitle} />
        <InputField
          placeholder="Descrição do seu projeto"
          width="272px"
          height="80px"
          changeInput={changeDescription}
        />
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
      <Button
        size="274px"
        color="black"
        backgroundColor="var(--blue-strong)"
        backgroundHover="var(--blue-medium)"
        handleClick={saveProject}>
        Salvar Projeto
      </Button>
    </section>
  );
}

export default MenuRigthSide;
