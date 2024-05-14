import { useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { addTeacherAsync, updateTeacherAsync } from "./teachersSlice"
import { ToastContainer, toast } from "react-toastify"

export const TeacherForm = () => {
    let {state} = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const teacher = state ? state : null

    const [name, setName] = useState( teacher ? teacher.name : "")
    const [subject, setSubject] = useState( teacher ? teacher.subject : "")
    const [contact, setContact] = useState( teacher ? teacher.contact : "") 

    const handleSubmit = () => {
        const newTeacher = {
            name,
            subject,
            contact
        }

      if(!name || !subject || !contact) {
        toast.warn("All fields are required")
      }
      else {
        teacher ?
        dispatch(updateTeacherAsync({id: teacher._id, updatedTeacher: newTeacher})) :
        dispatch(addTeacherAsync(newTeacher));
        navigate("/teachers")
      }
    }

    return(
        <div className="view-main">
             <h2>{teacher ? 'Edit Teacher' : 'Add Teacher'}</h2>
      <input
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='text'
        placeholder='Subject'
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <input
        type='email'
        placeholder='Email'
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />
      <button onClick={handleSubmit} >{teacher ? "Update" : "Add"}</button>
      <ToastContainer autoClose={2000} />
        </div>
    )
}