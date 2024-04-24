import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addStudentAsync, updateStudentAsync } from './studentsSlice'
import { useLocation } from 'react-router-dom'

const StudentForm = () => {
  let { state } = useLocation()

  const student = state ? state : null

  const [name, setName] = useState(student ? student.name : '')
  const [age, setAge] = useState(student ? student.age : '')
  const [grade, setGrade] = useState(student ? student.grade : '')
  const [attendance, setAttendance] = useState(
    student ? student.attendance : '',
  )
  const [marks, setMarks] = useState(student ? student.marks : '')
  const [gender, setGender] = useState(student ? student.gender : 'Male')
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

    if (student) {
      dispatch(
        updateStudentAsync({ id: student._id, updatedStudent: newStudent }),
      )
    } else {
      dispatch(addStudentAsync(newStudent))
    }
  }

  return (
    <div>
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
    </div>
  )
}

export default StudentForm