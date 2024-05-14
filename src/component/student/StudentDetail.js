import { useDispatch, useSelector } from 'react-redux'

import { Link, useParams } from 'react-router-dom'
import { deleteStudentAsync } from './studentsSlice'

const StudentDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const student = useSelector((state) =>
    state.students.students.find((s) => s._id === id),
  )

  if (!student) {
    return <h2>Student not found.</h2>
  }

  return (
    <div className="view-main">
      <h2>Student Detail</h2>

      <div className='detail-Page'>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Gender: {student.gender} </p>
      <p>Grade: {student.grade}</p>
      <p>Attendance: {student.attendance}</p>
      <p>Marks: {student.marks}</p>
      <Link to={`/students/edit/${student._id}`} state={student}><button > Edit Details </button></Link>
      <Link to="/" ><button onClick={() => dispatch(deleteStudentAsync(student._id))}>Delete</button></Link>
      
      </div>
    </div>
  )
}

export default StudentDetail;