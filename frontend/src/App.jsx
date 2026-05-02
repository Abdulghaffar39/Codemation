import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Auth from './pages/Auth';

import Dashboard from './pages/admin/Dashboard';
import ProjectsPanel from './pages/admin/ProjectsPanel';
import LeadsPanel from './pages/admin/LeadsPanel';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="auth" element={<Auth />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="projects" element={<ProjectsPanel />} />
        <Route path="leads" element={<LeadsPanel />} />
      </Route>
    </Routes>
  );
}

export default App;
