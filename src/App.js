import React from 'react';
import ClassView from './ClassView';
import SchoolView from './SchoolView';
import { StudentView } from './StudentView';
import StudentDetail from "./StudentDetail"
import StudentForm from "./StudentForm"
import './App.css';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

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
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
