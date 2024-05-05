import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
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
        <div>
          <div className='navbar'>
            <div className='logo'>Student Management System</div>
            <nav>
              <ul>
                <li>
                  <Link to='/'>Students</Link>
                </li>
                <li>
                  <Link to='/teachers'>Faculty</Link>
                </li>
                <li>
                  <Link to='/classes'>Classes</Link>
                </li>
                <li>
                  <Link to='/school'>School</Link>
                </li>
              </ul>
            </nav>
          </div>

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
        </div>
      </Router>
    </div>
  );
}

export default App;
