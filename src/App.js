import React from 'react';
import ClassView from './ClassView';
import SchoolView from './SchoolView';
import { StudentView } from './StudentView';
import StudentDetail from "./StudentDetail"
import StudentForm from "./StudentForm"
import './App.css';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { TeacherView } from './TeacherView';
import { TeacherDetail } from './TeacherDetail';
import { TeacherForm } from './TeacherForm';

function App() {
  return (
    <div className="App">
     <h1>Redux-ToolKit</h1>
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
