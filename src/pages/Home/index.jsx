import { useState } from 'react';
import CodeEditor from '../../components/CodeEditor';
import MenuRigthSide from '../../components/MenuRigthSide';

function Home() {
  const [backgroundColor, setBackgroundColor] = useState('#5081fb');

  function handleColorChange(color) {
    setBackgroundColor(color);
  }

  return (
    <>
      <CodeEditor containerBackgroundColor={backgroundColor} />
      <MenuRigthSide changeColor={handleColorChange} />
    </>
  );
}

export default Home;
