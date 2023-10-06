import { useState } from 'react';
import CodeEditor from '../../components/CodeEditor';
import MenuRigthSide from '../../components/MenuRigthSide';

function Home() {
  const defaultLanguage = 'javascript';
  const defaultTheme = 'dracula';
  const [backgroundColor, setBackgroundColor] = useState('#5081fb');
  const [text, setText] = useState('');
  const [language, setLanguage] = useState(defaultLanguage);
  const [theme, setTheme] = useState(defaultTheme);

  function handleColorChange(color) {
    setBackgroundColor(color);
  }

  function handleChangeText(textInput) {
    setText(textInput);
  }

  function handleLanguage(languageInput) {
    setLanguage(languageInput);
  }

  function handleChangeTheme(themeInput) {
    setTheme(themeInput);
  }

  return (
    <>
      <CodeEditor
        containerBackgroundColor={backgroundColor}
        changeText={handleChangeText}
        text={text}
        language={language}
        theme={theme}
      />

      <MenuRigthSide
        changeColor={handleColorChange}
        changeLanguage={handleLanguage}
        changeTheme={handleChangeTheme}
      />
    </>
  );
}

export default Home;
