import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFilter, setFilterBy, setSortBy } from './student/studentsSlice'
import { Link } from 'react-router-dom'

const ClassView = () => {
  const students = useSelector((state) => state.students.students)
  const filterBy = useSelector((state) => state.students.filterBy )
  const filter = useSelector((state) => state.students.filter)
  const sortBy = useSelector((state) => state.students.sortBy)
  const dispatch = useDispatch()
  
  const studentsByGrade = students.filter((student) => {
    if (filterBy === 'Grade') return true
    return student.grade === filterBy
  } )

  const filteredStudents = [...studentsByGrade].filter((student) => {
    if (filter === 'All') return true
    return student.gender === filter
  })

  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name)
    if (sortBy === 'age') return b.age - a.age
    if (sortBy === 'marks') return b.marks - a.marks
    if (sortBy === 'attendance') return b.attendance - a.attendance
    return 0
  })

  const handleGradeChange = (e) => {
    dispatch(setFilterBy(e.target.value))
  }

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value))
  }

  const handleSortChange = (e) => {
    dispatch(setSortBy(e.target.value))
  }

  return (
    <div className="view-main">
      <h1>Class View</h1>
      <div className="class-View">

      <label>|Select Grade:</label>
      <select value={filterBy} onChange={handleGradeChange}>
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

        <label htmlFor='filter'>|Filter by Gender:</label>
        <select id='filter' onChange={handleFilterChange} value={filter}>
          <option value='All'>All</option>
          <option value='Male'>Boys</option>
          <option value='Female'>Girls</option>
        </select>
      
        <label htmlFor='sortBy'>|Sort by:</label>
        <select id='sortBy' onChange={handleSortChange} value={sortBy}>
          <option value='name'>Name</option>
          <option value='age' >Age</option>
          <option value='marks'>Marks</option>
          <option value='attendance'>Attendance</option>
        </select>

      </div>
     
      <div>
          {sortedStudents.length > 0 ? sortedStudents.map((student) => (
            <div className="view-List" key={student._id}>
            <Link className="link" to={`/students/${student._id}`}>  
            Name: {student.name} || Age: {student.age} || Gender: {student.gender} || Grade: {student.grade}
              </Link>  
            </div>
          ))
        : <h3>No students found</h3>
        }
      </div>
    
    </div>
  )
}

export default ClassView