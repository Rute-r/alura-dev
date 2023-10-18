/* eslint-disable react/prop-types */
import { useState } from 'react';
import CodeEditor from '../../components/CodeEditor';
import MenuRigthSide from '../../components/MenuRigthSide';

function Home({ projects, setProjects }) {
  const defaultLanguage = 'javascript';
  const defaultTheme = 'dracula';
  const [backgroundColor, setBackgroundColor] = useState('#5081fb');
  const [text, setText] = useState('');
  const [language, setLanguage] = useState(defaultLanguage);
  const [theme, setTheme] = useState(defaultTheme);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

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

  function handleChangeTitle(titleInput) {
    setTitle(titleInput);

    console.log(title);
  }

  function handleChangeDescription(descriptionInput) {
    setDescription(descriptionInput);

    console.log(description);
  }

  function handleProjects() {
    const insertAt = projects.length;
    const newProjects = [
      ...projects.slice(0, insertAt),
      {
        title: title,
        description: description,
        backgroundColor: backgroundColor,
        theme: theme,
        language: language,
        code: text,
      },
      ...projects.slice(insertAt),
    ];
    setProjects(newProjects);

    console.log(projects);
  }

  return (
    <>
      <CodeEditor
        containerBackgroundColor={backgroundColor}
        changeText={handleChangeText}
        text={text}
        language={language}
        theme={theme}
        saveProject={handleProjects}
      />

      <MenuRigthSide
        changeColor={handleColorChange}
        changeLanguage={handleLanguage}
        changeTheme={handleChangeTheme}
        saveProject={handleProjects}
        changeDescription={handleChangeDescription}
        changeTitle={handleChangeTitle}
      />
    </>
  );
}

export default Home;
