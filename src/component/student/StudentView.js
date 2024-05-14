import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchStudents } from "./studentsSlice"
import { Link } from "react-router-dom"
import "./styles.css"

export const StudentView = () => {
    const dispatch = useDispatch()
    const students = useSelector((state) => state.students.students)
    const status = useSelector((state) => state.students.status)
    const error = useSelector((state)=> state.students.error)

    useEffect(() => {
      if(status === 'idle') {  
        dispatch(fetchStudents())
    } 
    }, [status, dispatch] )

    return (
        <div className="view-main">
            <h1>Student View</h1>

            {status === 'loading' && <p>loading...</p> }
            {error && <p>Error: {error}</p> }

            <Link className="add-link" to='/students/add'>Add New Student</Link>

            {students.map((student) => (
          <div className="view-List" key={student._id}>
            <Link className="link" to={`/students/${student._id}`}>
              Name: {student.name} || Age: {student.age} || Gender: {student.gender} || Grade: {student.grade}
            </Link>
          </div>
        ))}

        </div>
    )

}