import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTeachers } from "./teachersSlice"
import { Link } from "react-router-dom"

export const TeacherView = () => {
   const dispatch = useDispatch()
   const teachers = useSelector((state) => state.teacher.teachers)
   const status = useSelector((state) => state.teacher.status)
   const error = useSelector((state) => state.teacher.error)
  
   useEffect(() => {
    if (status === 'idle') {
        dispatch(fetchTeachers())
    }
   }, [status,dispatch])

   return(
    <div className="view-main">

      <h1>Teachers View </h1>

      {status === 'loading' && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <Link className="add-link" to="/teachers/add">Add Teacher</Link>

      {teachers.map((teacher) => (
          <div className="view-List" key={teacher._id}>
            <Link className="link" to={`/teachers/${teacher._id}`}>
            Name: {teacher.name} || Subject: {teacher.subject} || Contact: {teacher.contact}
            </Link>
          </div>
      ))}

    </div>
   )

}