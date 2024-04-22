import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchStudents } from "./studentsSlice"
import StudentList from "./StudentList"
import { Link } from "react-router-dom"

export const StudentView = () => {
    const dispatch = useDispatch()
    const students = useSelector((state) => state.students.students)
    const status = useSelector((state) => state.students.status)
    const error = useSelector((state)=> state.students.error)

    useEffect(() => {
        dispatch(fetchStudents())
    }, [status, dispatch] )

    return (
        <div>
            <h1>Students View</h1>

            {status === 'loading' && <p>loading...</p> }
            {error && <p>Error: {error}</p> }

            <StudentList students={students} />

            <h3>
            <Link to={`/students/add`}>Add student</Link>
            </h3>

        </div>
    )

}