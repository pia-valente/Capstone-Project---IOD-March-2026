import {Routes, Route}  from 'react-router-dom';

import Home from '../pages/home/home.jsx';
import About from '../pages/about/about.jsx';
import Programs from '../pages/programs/programs.jsx';
import Contact from '../pages/contact/contact.jsx';
import Community from '../pages/community/community.jsx';   
import Login from '../pages/login/login.jsx';       

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/programs" element={<Programs></Programs>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/community" element={<Community></Community>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
    </Routes>
  );
}

export default AppRoutes;