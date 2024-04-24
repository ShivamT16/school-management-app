import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTeachers } from "./teachersSlice"
import { TeachersList } from "./TeachersList"
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
    <div>
      <h1>Teachers View </h1>

      {status === 'loading' && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <TeachersList teachers={teachers} />

      <h3>
        <Link to={`/teachers/add`}>Add Teacher</Link>
      </h3>
    </div>
   )

}