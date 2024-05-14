import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addStudentAsync, updateStudentAsync } from './studentsSlice'
import { useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StudentForm = () => {
  let { state } = useLocation()
  const navigate = useNavigate()

  const student = state ? state : null

  const [name, setName] = useState(student ? student.name : '')
  const [age, setAge] = useState(student ? student.age : '')
  const [grade, setGrade] = useState(student ? student.grade : '')
  const [attendance, setAttendance] = useState(
    student ? student.attendance : '',
  )
  const [marks, setMarks] = useState(student ? student.marks : '')
  const [gender, setGender] = useState(student ? student.gender : '')
  const dispatch = useDispatch()

  const handleSubmit = () => {
    const newStudent = {
      name,
      age,
      grade,
      gender,
      attendance,
      marks,
    }
    
    if( !name || !age || !grade || !gender){
      toast.warn("All details are required")
    } else
    { student ?
      dispatch(updateStudentAsync({ id: student._id, updatedStudent: newStudent }))
      : 
      dispatch(addStudentAsync(newStudent));
      navigate("/")
    }
    
  }

  return (
    <div className="view-main">
      <h2>{student ? 'Edit Student' : 'Add Student'}</h2>
      <input
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='number'
        placeholder='Age'
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <select value={grade} onChange={(e) => setGrade(e.target.value)}>
      <option>Grade</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      <option>11</option>
      <option>12</option>
      </select>
      <div>
        <label>
          Gender:
          <input
            type='radio'
            name='gender'
            value='Male'
            checked={gender === 'Male'}
            onChange={() => setGender('Male')}
          /> Male
        </label>
        <label>
          <input
            type='radio'
            name='gender'
            value='Female'
            checked={gender === 'Female'}
            onChange={() => setGender('Female')}
          />{' '}
          Female
        </label>
      </div>
      {student && (
        <>
          <input
            type='text'
            placeholder='Attendance'
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
          />
          <input
            type='text'
            placeholder='Marks'
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
          />
        </>
      )}
      <button onClick={handleSubmit}>{student ? 'Update' : 'Add'}</button>
      <ToastContainer autoClose={2000} />
    </div>
  )
}

export default StudentForm