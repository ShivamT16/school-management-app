import React from 'react';
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import ClassView from './component/ClassView';
import SchoolView from './component/school/SchoolView';
import { StudentView } from './component/student/StudentView';
import StudentDetail from "./component/student/StudentDetail"
import StudentForm from "./component/student/StudentForm"
import { TeacherView } from './component/teacher/TeacherView';
import { TeacherDetail } from './component/teacher/TeacherDetail';
import { TeacherForm } from './component/teacher/TeacherForm';

function App() {
  return (
    <div className="App">
     <Router>
      <nav className='navBar' >
        <h2>School Management System</h2>
        <NavLink className="navLink" to='/'>Students</NavLink>
        <NavLink className="navLink" to='/classes'>Classes</NavLink>
        <NavLink className="navLink" to='/teachers'>Faculty</NavLink>
        <NavLink className="navLink" to='/school'>School</NavLink>
        <NavLink className="navLink" to='https://github.com/ShivamT16/school-management-app' >GitHub</NavLink>
      </nav>
     <Routes>
      <Route path='/school' element={<SchoolView />} />
      <Route path='/classes' element={<ClassView />} />
      <Route path='/' element={<StudentView />} />
      <Route path='/students/:id' element={<StudentDetail />} />
      <Route path='/students/add' element={<StudentForm />} />
      <Route path='/students/edit/:id' element={<StudentForm />} />
      <Route path='/teachers' element={<TeacherView />} />
      <Route path='/teachers/:id' element={<TeacherDetail />} />
      <Route path='/teachers/add' element={<TeacherForm />} />
      <Route path='/teachers/edit/:id' element={<TeacherForm />} />  
     </Routes> 
     </Router>
    </div>
  );
}

export default App;
