import Community from './pages/Community';
import DefaultPage from './pages/DefaultPage';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import projectJSON from './project.json';
import { useState } from 'react';

function AppRoutes() {
  const [projects, setProjects] = useState(projectJSON);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home projects={projects} setProjects={setProjects} />} />
            <Route path="comunidade" element={<Community projects={projects} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
