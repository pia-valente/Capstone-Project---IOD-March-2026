import {Routes, Route}  from 'react-router-dom';

import Home from '../pages/home/home.jsx';
import About from '../pages/about page/about.jsx';
import Programs from '../pages/programs page/programs.jsx';
import Contact from '../pages/contact page/contact.jsx';
import Community from '../pages/project-flow page/community.jsx';   
import UserPage from '../pages/user-page/user-page.jsx';
import Login from '../pages/login/login.jsx';     
import Signup from '../pages/signup page/signup.jsx';
import Admin from '../pages/admin page/admin.jsx';


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/programs" element={<Programs></Programs>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/community" element={<Community></Community>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/userpage" element={<UserPage></UserPage>}></Route>
      <Route path="/adminpage" element={<Admin></Admin>}></Route>

    </Routes>
  );
}

export default AppRoutes;