import { useDispatch, useSelector } from 'react-redux'

import { Link, useParams } from 'react-router-dom'
import { deleteTeacherAsync } from './teachersSlice'

export const TeacherDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const teacher = useSelector((state) =>
    state.teacher.teachers.find((t) => t._id === id),
  )

  if (!teacher) {
    return <h2>Teacher not found.</h2>
  }

  return (
    <div className="view-main">
      <h2>Teacher Detail</h2>

      <div className='detail-Page'>
      <p>Name: {teacher.name}</p>
      <p>Subject: {teacher.subject}</p>
      <p>Contact: {teacher.contact}</p>
      <Link to={`/teachers/edit/${teacher._id}`} state={teacher}><button> Edit Details </button></Link>
      <button onClick={() => dispatch(deleteTeacherAsync(id))}>Delete</button>
      </div>

    </div>
  )
}
